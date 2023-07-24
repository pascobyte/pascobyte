module.exports = {
    globDirectory: 'public/',
    globPatterns: [
        '**/*.{css,ttf,webp,js}'
    ],
    swDest: 'public/sw.js',
    ignoreURLParametersMatching: [
        /^utm_/,
        /^fbclid$/
    ],
    skipWaiting: true,
    clientsClaim: true,
    navigationPreload: true,
    runtimeCaching: [
        {
            urlPattern: /^https?.*/,
            handler: 'NetworkFirst',
            options: {
                cacheName: 'workbox-runtime-cache',
                expiration: {
                    maxEntries: 100,
                    maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
                },
                networkTimeoutSeconds: 10,
                cacheableResponse: {
                    statuses: [0, 200],
                },
            },
        },
    ],
};
