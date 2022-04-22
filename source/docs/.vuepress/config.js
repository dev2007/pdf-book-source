module.exports = {
  title: 'BookHub 书库',
  description: '我的个人网站',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  base: '/',
  markdown: {
    lineNumbers: true
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
        path: '/java/java',
        children: ['/java/java_a_beginner’s_guide']
      },
    ]

  }
};