// .vitepress/config.js
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Personal Portfolio',
  description: 'Portfolio of Hashan Wickramasinghe',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Skills', link: '/skills/' },
      { text: 'Contact', link: '/contact/' }
    ],
    sidebar: {
      '/projects/': [
        {
          text: 'Projects',
          items: [
            { text: 'Project LioRide', link: '/projects/project-lioride' },
            { text: 'Pearl Education Website', link: '/projects/pearl-education' },
            { text: 'Investment Company System', link: '/projects/investment-company' },
          ]
        }
      ],
      '/': [
        { text: 'Home', link: '/' },
        { text: 'Projects', link: '/projects/' },
        { text: 'Skills', link: '/skills/' },
        { text: 'Contact', link: '/contact/' }
      ]
    }
  }
})
