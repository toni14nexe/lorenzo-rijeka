const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/"
            },
            {
                "loc": "/kontakt"
            },
            {
                "loc": "/backoffice"
            },
            {
                "loc": "/portal"
            },
            {
                "loc": "/reklamiranje"
            },
            {
                "loc": "/poslovi"
            },
            {
                "loc": "/pretrazivanje"
            },
            {
                "loc": "/webshop"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
