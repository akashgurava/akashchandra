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
    ]
}
