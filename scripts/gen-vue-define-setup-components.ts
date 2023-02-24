import { rm, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const amount = 100;

const templateComponent = [
  `<script setup lang="ts">`,
  `const props = withDefaults(defineProps<INTERFACE>(), DEFAULTS);`,
  `</script>`,
  ``,
  `<template>`,
  `  <div>`,
  `    <h2>NAME</h2>`,
  `    <pre>{{ props }}</pre>`,
  `  </div>`,
  `</template>`,
].join('\n')
const templateInterface = [
  `{`,
  `  props1: string;`,
  `  props2?: string;`,
  `  props3?: 'foo' | 'bar' | 'baz';`,
  `  props4?: { sub1?: boolean; sub2?: number };`,
  `  props5?: string[];`,
  `  props6?: { sub1?: boolean; sub2?: number }[];`,
  `}`,
].join('\n')
const templateDefault = [
  `{`,
  `  props1: 'foo',`,
  `  props2: 'bar',`,
  `  props3: 'baz',`,
  `  props4: () => ({ sub1: true, sub2: 42 }),`,
  `  props5: () => (['foo', 'bar', 'baz']),`,
  `  props6: () => ([{ sub1: true, sub2: 42 }]),`,
  `}`,
].join('\n')

const template = templateComponent
  .replace('INTERFACE', templateInterface)
  .replace('DEFAULTS', templateDefault);

async function main() {
  console.log('Generating components...');
  const componentsDir = join(root, './components');
  const pagesDir = join(root, './pages');
  const viteCacheDir = join(root, './node_modules/.vite');
  const nuxtDir = join(root, './.nuxt');

  if (existsSync(viteCacheDir)) {
    console.log('Cleaning up vite cache directory...');
    await rm(viteCacheDir, { recursive: true });
  }
  if (existsSync(nuxtDir)) {
    console.log('Cleaning up nuxt cache directory...');
    await rm(nuxtDir, { recursive: true });
  }

  if (existsSync(componentsDir)) {
    console.log('Cleaning up components directory...');
    await rm(componentsDir, { recursive: true });
  }
  if (existsSync(pagesDir)) {
    console.log('Cleaning up pages directory...');
    await rm(pagesDir, { recursive: true });
  }

  console.log('Creating components directory...');
  await mkdir(componentsDir, { recursive: true });


  const names = [];
  const tasks = [];
  for (let i = 0; i < amount; i++) {
    const name = `Component${i}`;
    names.push(name);

    console.log(`Creating component ./components/${name}...`);
    const file = join(componentsDir, `${name}.vue`);
    tasks.push(writeFile(file, template.replace(/NAME/g, name)));
  }

  console.log('Creating pages/index.vue...');
  await mkdir(pagesDir, { recursive: true });

  const file = join(pagesDir, 'index.vue');
  const content = [
    `<template>`,
    `  <div>`,
    `    <h1>Index</h1>`,
    `    <div>`,
    ...names.map((name, index) => `      <${name} props1="hello ${index+1}" />`),
    `    </div>`,
    `  </div>`,
    `</template>`,
  ].join('\n');

  tasks.push(writeFile(file, content));

  await Promise.all(tasks);
}

main().then(() => {
  console.log('Done');
  process.exit(0);
}).catch((err) => {
  console.error(err);
  process.exit(1);
})
