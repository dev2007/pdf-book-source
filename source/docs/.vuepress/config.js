module.exports = {
  title: 'BookHub IT书库',
  description: '共享书库，学习进步',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  base: '/',
  markdown: {
    lineNumbers: true
  },
  plugins: {
    '@vuepress/medium-zoom': {
      selector: '.page img',
      delay: 1000,
      options: {
        margin: 16
      }
    }
  },
  themeConfig: {
    logo: '/favicon.ico',
    nav: [
      { text: '首页', link: '/' },
      { text: '中文技术文档', link: 'https://docs.bookhub.zone' },
      { text: 'GitHub', link: 'https://github.com/dev2007/bookhub' }
    ],
    sidebar: [
      {
        title: '书籍分类',
        path: '/books',
        children: []
      },
      {
        title: 'Java',
        path: '/java/list',
        children: ['/java/java_a_beginners_guide',
          '/java/java_the_complete_reference',
          '/java/modernizing_enterprise_java',
          '/java/reactive_systems_in_java'
        ]
      },
      {
        title: 'JavaScript',
        path: '/javascript/list',
        children: ['/javascript/multithreaded_javascript']
      },
    ]

  }
};