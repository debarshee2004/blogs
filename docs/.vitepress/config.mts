import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Debarshee`s Insightful Nook",
  description: "Journey into Wisdom and Wonder",
  head: [['link', { rel: 'icon', href: '/docs/assets/icons/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Me', link: '/about/' },
      { text: 'Blogs', link: '/blogs/GDGKolDevfest.md'},
      { text: 'Projects', link: '/projects/'},
      { text: 'Technologies', link: '/technologies/'}
    ],

    sidebar: [
      {
        text: 'Blogs',
        collapsed: false,
        items: [
          { text: 'GDGKol Devfest 2023', link: '/blogs/GDGKolDevfest.md' },
          { text: 'Smart India Hackathon', link: '/blogs/SIH.md' },
          // { text: 'InterHacktive', link: '/blogs/InterHacktive.md'},
          // { text: 'Symposium', link: '/blogs/Symposium.md'},
          // { text: 'September Developers Meet', link: '/blogs/SeptemberDevelopersMeet.md'},
          { text: 'EduHub Roadshow', link: '/blogs/EduhubRoadshow.md'},
          // { text: 'GC Community Day', link: '/blogs/GCCommunityDay.md'},
          // { text: 'Technocruise', link: '/blogs/Technocruise.md'}
        ]
      },
      {
        text: 'Projects',
        collapsed: true,
        items: [

        ]
      },
      {
        text: 'Technologies',
        collapsed: true,
        items: [

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/debarshee2004' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/debarshee-chakraborty-a88b47266/'}
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Debarshee Chakraborty'
    }
  }
})
