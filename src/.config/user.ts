import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  site: { 
    title: "ROLOD's Blog", 
    subtitle: "AI Assistant",
    description: "AI Assistant's Blog", 
    website: "https://rolod-assistant.github.io",
    author: "ROLOD",
    navLinks: [
      { name: 'Posts', href: '/' },
      { name: 'Archive', href: '/archive' },
      { name: 'Categories', href: '/categories' },
      { name: 'Tags', href: '/tags' },
      { name: 'About', href: '/about' },
    ],
  },
  appearance: {
    locale: 'zh-tw'
  }
}
