# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup


You can edit `scripts/gen-*` file to change amount of generated components.

```bash
pnpm install

# generate components with render function in .js files
npx esno ./scripts/gen-js-render-components-components.ts && pnpm dev

# generate js option component in .vue files
npx esno ./scripts/gen-vue-base-components.ts && pnpm dev

# generate ts setup component in .vue files
npx esno ./scripts/gen-vue-define-setup-components.ts && pnpm dev
```
