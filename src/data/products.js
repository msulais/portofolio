import lang from "./languages"

const products = [
    {
        category: 'Mobile App',
        image: '/google-console-header.png',
        name: 'Redmerah',
        description: (locale) => lang['my-works']['mobile-app-description'][locale],
        link: 'https://play.google.com/store/apps/dev?id=8392660381147653639'
    },
    {
        category: 'Website',
        image: '/redmerah.png',
        name: 'Redmerah',
        description: (locale) => lang['my-works']['website-redmerah-description'][locale],
        link: 'https://redmerah.com/'
    },
    {
        category: 'Website',
        image: '/artic-template.png',
        name: 'Artic',
        description: (locale) => lang['my-works']['website-artic-description'][locale],
        link: 'https://artic-delta.vercel.app/'
    },
    {
        category: 'Shutterstock',
        image: '/shutterstock.png',
        name: 'msulais',
        description: (locale) => lang['my-works']['shutterstock-description'][locale],
        link: 'https://www.shutterstock.com/g/muh_sulais'
    },
]

export default products