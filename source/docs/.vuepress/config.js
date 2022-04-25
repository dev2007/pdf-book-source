module.exports = {
  title: 'BookHub IT电子书库',
  description: '电子书库，让我变强',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: '电子书,PDF,ePub,doc,document,文档,中文文档,编程,人工智能,AI,大数据,bigdata,云计算,java,c#,c++,c,python,php,sql,swift,go,golang,js,javascript,css,html,elasticsearch,es,ELK,入门教程,计算机,IT,k8s,book,docker,系统架构' }]
  ],
  base: '/',
  markdown: {
    lineNumbers: true
  },
  plugins: [
    ['@vuepress/medium-zoom',{
      selector: '.page img',
      delay: 1000,
      options: {
        margin: 24
      }
    }],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-226868573-2'
      }
    ],
    [
      '@renovamen/vuepress-plugin-baidu-tongji', {
        'ba': '919e4f5ecb3ab000e26c2f61cedc7ce0'
      }
    ],
    [
      'vuepress-plugin-comment',
      {
        choosen: 'gitalk', 
        options: {
          clientID: '6852269af4df47405b4e',
          clientSecret: '65e33f2cbf43b13a37258667c63fa5d1aba615c2',
          repo: 'gitalk-comment',
          owner: 'dev2007',
          admin: ['dev2007'],
          distractionFreeMode: false 
        }
      }
    ]
  ],
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