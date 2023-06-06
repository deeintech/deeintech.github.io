const ssrTemplate = require("./src/internals/ssr.template")
const customFields = require("./src/config/customFields")
const markdownPlugins = require("./plugins/markdown-plugins")

const config = {
  title: "Dee in Tech",
  tagline: "Facilitating connections and deals for your GameFi brand",
  url: `https://${customFields.domain}`,
  baseUrl: "/",
  baseUrlIssueBanner: false,
  favicon: "/img/favicon.png",
  organizationName: "deeintech",
  projectName: "deeintech.github.io",
  customFields,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  plugins: [
    require.resolve("./plugins/webpack-ts/index"),
    require.resolve("./plugins/optimize/index"),
    require.resolve("./plugins/manifest/index"),
    require.resolve("./plugins/delay-code-block-appearance"),
    [
      "@docusaurus/plugin-pwa",
      {
        pwaHead: [
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.webmanifest",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#21222c",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#21222c",
          },
        ],
      },
    ],
    [
      require.resolve("./plugins/blog"),
      {
        ...markdownPlugins,
        blogSidebarCount: 10,
        feedOptions: {
          type: "all",
          copyright: customFields.copyright,
        },
        showReadingTime: true,
        postsPerPage: 1000,
        blogPostComponent: require.resolve(
          "./src/theme/BlogPostPage/index.tsx",
        ),
        blogTagsPostsComponent: require.resolve(
          "./src/theme/BlogListPage/index.tsx",
        ),
      },
    ],
  ].filter(Boolean),

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    image: "/img/og.gif",
    gtag: {
      trackingID: "G-GTFMXLDKLG",
      anonymizeIP: true,
    },
    prism: {
      defaultLanguage: "js",
      additionalLanguages: [
        "rust",
        "csharp",
        "julia",
        "cpp",
        "java",
        "ebnf",
        "ini",
        "toml",
        "ruby",
        "php",
      ],
      theme: require("./src/internals/prism-github"),
      darkTheme: require("./src/internals/prism-dracula"),
    },
    navbar: {
      title: " ",
      logo: {
        alt: "Dee in Tech",
        src: "/img/navbar/deeintech.svg",
      },
      items: [
        {
          label: "Blog",
          position: "left",
          to: "/blog/"
        },
        {
          label: "Twitter",
          position: "left",
          to: "https://twitter.com/deeintech"
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        // blog is enabled through a custom plugin, so we disable it from preset
        // ./plugins/blog/index.js
        blog: false,
        docs: {
          ...markdownPlugins,
          sidebarPath: require.resolve("./sidebars.js"),
        },

        sitemap: {
          changefreq: "daily",
          priority: 0.7,
          trailingSlash: true,
        },
        theme: {
          customCss: [require.resolve("./src/css/_global.css")],
        },
      },
    ],
  ],
}

module.exports = {
  ...config,
  ssrTemplate: ssrTemplate(config),
}
