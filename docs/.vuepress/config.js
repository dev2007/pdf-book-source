module.exports = {
  title: 'BookHub 计算机电子书库',
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
    [
      '@vuepress/google-analytics', {
        'ga': 'UA-226868573-2'
      }
    ],
    [
      '@renovamen/vuepress-plugin-baidu-tongji', {
        'ba': '919e4f5ecb3ab000e26c2f61cedc7ce0'
      }
    ]
  ],
  themeConfig: {
    logo: '/favicon.ico',
    lastUpdated: '最后更新',
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
        path: '/java/',
        children: [
          '/java/97_things_every_java_programmer_should_know.html',
          '/java/big_java_early_objects.html',
          '/java/brief_java_early_objects.html',
          '/java/classic_computer_science_problems_in_java.html',
          '/java/core_java_volume_I_undamentals.html',
          '/java/core_java_volume_II_advanced_features.html',
          '/java/hands_on_selenium_webDriver_with_java.html',
          '/java/high_performance_java_persistence.html',
          '/java/introduction_to_java_programming_and_data_structures.html',
          '/java/java_a_beginners_guide.html',
          '/java/java_cookbook.html',
          '/java/java_how_to_program.html',
          '/java/java_performance.html',
          '/java/java_the_complete_reference.html',
          '/java/java_to_kotlin.html',
          '/java/learning_java.html',
          '/java/modernizing_enterprise_java.html',
          '/java/reactive_systems_in_java.html',
          '/java/sre_with_java_microservices.html',
          '/java/testing_java_microservices.html',
          '/java/the_java_module_system.html'
        ]
      },
      {
        title: 'JavaScript',
        path: '/javascript/',
        children: [
          '/javascript/deep_javascript_theory_and_techniques.html',
          '/javascript/deep_learning_with_javascript',
          '/javascript/javascript_cookbook.html',
          '/javascript/javascript_for_impatient_programmers.html',
          '/javascript/javascript_the_definitive_guide.html',
          '/javascript/javascript_the_new_toys.html',
          '/javascript/javascript_on_things.html',
          '/javascript/learning_javascript_data_structures_and_algorithms.html',
          '/multi/learning_php_mysql_&_javascript.html',
          '/javascript/modern_javaScript_for_the_impatient.html',
          '/javascript/multithreaded_javascript.html',
          '/javascript/the_joy_of_javaScript.html'
        ]
      },
      {
        title: 'MySQL',
        path: '/mysql/',
        children: [
          '/multi/learning_php_mysql_&_javascript.html'
        ]
      },
      {
        title: 'PHP',
        path: '/php/',
        children: [
          '/multi/learning_php_mysql_&_javascript.html'
        ]
      },
      {
        title: 'Python',
        path: '/python',
        children: [
          '/python/full_stack_python_security.html'
        ]
      }
    ]

  }
};