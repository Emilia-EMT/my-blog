// https://github.com/nuxt-themes/alpine/blob/main/nuxt.schema.ts
export default defineAppConfig({
  alpine: {
    title: 'Emilia',
    description: '',
    image: {
      src: '/social-card-preview.png',
      alt: '',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'About' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: true, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: 'ooocococ',
      telegram: {
        icon: 'uil:telegram',
        label: 'CODE:002',
        href: 'https://t.me/buchuanpangci'
      },
      github_com: {
        icon: 'uil:github',
        label: 'Emilia-EMT',
        href: 'https://github.com/Emilia-EMT'
      }
    },
  }
})
