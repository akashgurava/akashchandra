// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


module.exports = {
    siteName: "Akash's Blog",
    siteDescription: 'A personal weblog about my projects.',
    siteUrl: 'https://akashchandra.netlify.com',
    plugins: [
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'blog/**/*.md',
                typeName: 'Post',
                refs: {
                    tags: {
                        typeName: 'Tag',
                        route: 'tag/:id',
                        create: true
                    }
                },
                remark: {
                    plugins: [
                        ['gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true }]
                    ]
                }
            }
        },
        {
            use: 'gridsome-plugin-rss',
            options: {
                contentTypeName: 'Post',
                feedOptions: {
                    title: 'Gridsome Portfolio Starter Blog',
                    feed_url: 'https://gridsome-portfolio-starter.netlify.com/rss.xml',
                    site_url: 'https://gridsome-portfolio-starter.netlify.com/'
                },
                feedItemOptions: node => ({
                    title: node.title,
                    description: node.summary,
                    url: 'https://gridsome-portfolio-starter.netlify.com' + node.path,
                    author: 'Andre Madarang',
                    date: node.date
                }),
                output: {
                    dir: './static',
                    name: 'rss.xml'
                }
            }
        },
        {
            use: '@gridsome/plugin-sitemap',
            options: {
                cacheTime: 600000, // default
            }
        },
        {
            use: 'gridsome-plugin-tailwindcss',
            options: {
                tailwindConfig: 'tailwind.config.js',
                purgeConfig: 'purgecss.config.js',
                presetEnvConfig: {},
                shouldPurge: true,
                shouldImport: true,
                shouldTimeTravel: true,
            }
        }
    ],
    transformers: {
        remark: {
            externalLinksTarget: '_blank',
            externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
            anchorClassName: 'icon icon-link',
        }
    }
}
