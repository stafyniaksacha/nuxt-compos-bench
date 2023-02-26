// https://nuxt.com/docs/api/configuration/nuxt-config
const initStart = new Date()
let pageCount = 0
let componentCount = 0

export default defineNuxtConfig({
  modules: [
    // '@nuxt/devtools',
  ],
  hooks: {
    'pages:extend'(pages) {
      pageCount = pages.length
    },
    'components:extend'(components) {
      componentCount = components.length
    },
    'nitro:init'(nitro) {
      nitro.hooks.hook('compiled', () => {
        const memory = process.memoryUsage()
        const allocated = memory.heapTotal / (1024 * 1024)
        const used = memory.heapUsed / (1024 * 1024)
        const duration = new Date().getTime() - initStart.getTime()

        console.log([
          `pages (count)`,
          `compo (count)`,
          `allocated (MB)`,
          `used (MB)`,
          `duration (ms)`,
        ].map((s) => s.padEnd(15)).join(', '))
        console.log([
          pageCount.toFixed(0),
          componentCount.toFixed(0),
          allocated.toFixed(2),
          used.toFixed(2),
          duration.toFixed(0),
        ].map((s) => s.padEnd(15)).join(', '))
        process.exit(0)
      })
    },
  },
  vite: {
    optimizeDeps: {
      disabled: true,
    }
  }
})
