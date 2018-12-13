const path = require('path')
const nodeExternals = require('webpack-node-externals')

const resolve = pathName => path.join(__dirname, pathName)
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    base: isProd ? '/' : '/',
    dest: 'docs',
    title: "大海前端团队",
    description: 'DHFE_大海前端团队_只是一群热爱技术又爱玩的人在写好用的文章',
    head: [
        ['link', {rel: 'shortcut icon', href: '/favicon.ico'}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['meta', {name: 'theme-color', content: '#3F51B5'}],
        ['meta', {'http-equiv': 'pragma', content: 'no-cache'}],
        ['meta', {'http-equiv': 'content-type', content: 'no-cache, must-revalidate'}],
        ['meta', {'http-equiv': 'expires', content: "Wed, 26 Feb 1997 08:21:57 GMT"}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', {rel: 'apple-touch-icon', href: '/icons/192.png'}],
        // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', {name: 'msapplication-TileImage', content: '/icons/192.png'}],
        ['meta', {name: 'msapplication-TileColor', content: '#3F51B5'}]
    ],
    serviceWorker: true,
    theme: '',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: "大海前端团队",
            description: 'DHFE_大海前端团队_只是一群热爱技术又爱玩的人在写好用的文章'
        }
    },
    configureWebpack: (config, isServer) => {
        const myConfig = {
            resolve: {
                alias: {
                    '@pub': resolve('./public')
                }
            },
            module: {
                rules: [{
                    test: /vuetify.+\.js$/,
                    loader: resolve('./ignoreStylus'),
                }]
            }
        }
        if (isServer) {
            myConfig.externals = nodeExternals({
                whitelist: [/vuetify/, /fortawesome/, /prismjs/]
            })
        }
        return myConfig
    },
    themeConfig: {
        lang: 'zh-CN',
        postDir: '/posts',
        subTitle: '一群有趣有爱的人儿一起做有意义的事儿',
        author: '大海前端团队-DHFE',
        email: 'zhanghuijie1@100tal.com',
        slogan: '有爱有趣',
        since: 2018,
        avatar: '/face.jpg',
        avatarLink: '/',
        icpLicense: '备案号',
        menus: [
            // icons by https://fontawesome.com/icons
            // {
            //     text: 'Home',
            //     icon: 'fa fa-home',
            //     url: '/'
            // },
            {
                text: 'Blog',
                icon: 'fa fa-tag',
                url: '/blog'
            },
            {
                text: 'Github',
                icon: 'fab fa-github',
                url: 'https://github.com/DahaiFE/dhfe',
                external: true
            },
            // {
            //     text: 'Weibo',
            //     icon: 'fab fa-weibo',
            //     url: 'https://www.weibo.com',
            //     external: true
            // },
            {
                text: 'About',
                icon: 'fa fa-user-secret',
                url: '/about'
            },
            {
                text: 'Join',
                icon: 'fa fa-users',
                url: '/join'
            }
        ],
        socials: ['Weibo', 'QQ', 'Facebook', 'Twitter', 'GooglePlus'],
        colors: {
            // generate by https://vuetifyjs.com/zh-Hans/theme-generator
            primary: '#3F51B5',
            secondary: '#6d6d6d',
            accent: '#E91E63',
            error: '#f44336',
            warning: '#FFC107',
            info: '#00B8D4',
            success: '#4caf50'
        },
        format: {
            date: 'YYYY年MM月DD日',
            dateTime: 'YYYY年MM月DD日 HH:mm:ss'
        },
        pagination: {
            path: '/page/:pageNum',
            pageSize: 5
        },
        tags: {
            path: '/blog/:tagName'
        },
        categories: {
            path: '/categories/:category'
        }
    }
}
