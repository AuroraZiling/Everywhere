import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Everywhere",
  description: "Seamless AI Assistant that brings your Favorite LLM in Every app, Every time, Every where.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  locales: {
    'en-US': {
      lang: 'en-US',
      label: 'English',
      title: 'Everywhere',
      dir: 'en-US'
    },
    'zh-CN': {
      lang: 'zh-CN',
      label: '简体中文',
      title: 'Everywhere',
      dir: 'zh-CN'
    }
  }
})

