

// https://vitepress.dev/reference/site-config
export default {
    nav: [
        { text: "Home", link: "/" },
    ],

    sidebar: [{
        text: "Getting started",
        items: [
            { text: "About", link: "/getting-started/about" },
            { text: "Ecosystem", link: "/getting-started/ecosystem" },
            { text: "Installation", link: "/getting-started/installation" },
            { text: "Development", link: "/getting-started/development" },
            { text: "Demo", link: "/getting-started/demo" }
        ]
    }, {
        text: "Contributing",
        items: [
            { text: "Environment", link: "/contributing/environment" },
            { text: "Gitflow", link: "/contributing/git-flow" },
            { text: "Commits", link: "/contributing/commits" },
            { text: "Pull requests", link: "/contributing/pull-requests" }
        ]
    }, {
        text: "Database",
        items: [
            { text: "Schema", link: "/database/schema" },
            { text: "Versioning", link: "/database/versioning" }
        ]
    }, {
        text: "Ruby on Rails",
        items: [
            { text: "Initializer", link: "/ruby-on-rails/initializer" },
            { text: "Credentials", link: "/ruby-on-rails/credentials" },
            { text: "Router", link: "/ruby-on-rails/router" },
        ]
    }, {
        text: "Theming",
        items: [
            { text: "Colors", link: "/theming/colors" },
            { text: "Typography", link: "/theming/typography" },
            { text: "Customization", link: "/theming/customization" },
        ]
    }, {
        text: "Testing"
    }],

    socialLinks: [
        { icon: "github", link: "https://github.com/vuejs/vitepress" },
        { icon: 'twitter', link: "https://twitter.com/LesliTech" },
    ]
}
