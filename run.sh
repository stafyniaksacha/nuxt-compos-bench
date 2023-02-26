#!/bin/bash

COMP_COUNT=10000
NODE_COUNT=100
OUTPUT="./results.csv"
NAME=".vue ${NODE_COUNT} nodes"
HEADER="name,sample,pages (count),components (count),allocated (MB),used (MB),duration (ms)"
MAX_SAMPLES=40

echo $HEADER

if [ ! -f "$OUTPUT" ]; then
  echo $HEADER > $OUTPUT
fi

for SAMPLE in $(seq 1 1 ${MAX_SAMPLES})
do
  npx esno ./scripts/gen-vue-large-nodes.ts ${COMP_COUNT} ${NODE_COUNT} &> /dev/null

  RESULT=$(pnpm dev | tail -1 | sed -e 's/ //g')

  echo "${NAME},${SAMPLE},${RESULT}"
  echo "${NAME},${SAMPLE},${RESULT}" >> $OUTPUT
done


