# All4Ling Website

This is a static site using a [Hugo](https://gohugo.io/) template called [Doks](https://getdoks.org/), forked from https://github.com/h-enk/doks.

## Setup

### Locally installed dependencies

1. Install [nodejs](https://nodejs.org/en/download/)
2. Make sure the installation was successful and npm is available: `node -v && npm -v`
3. cd to the root of this repository and run `npm install`. This will install Hugo and all the other necessary dependencies.

#### Starting the server

`npm run start`


### Docker-ized environment

1. Install [docker](https://docs.docker.com/get-docker/)
2. Install [docker-compose](https://docs.docker.com/compose/install/)

#### Starting the server

`docker-compose up`


### Deploy

1. To deploy, push your commits to master.

This will trigger `.gitlab-ci.yml`, which will deploy the website to a [GitLab page](https://docs.gitlab.com/ee/user/project/pages/) located at [https://commul.pages.scientificnet.org/all4ling/www/](https://commul.pages.scientificnet.org/all4ling/www/), and reverse proxied at [https://all4ling.eurac.edu](https://all4ling.eurac.edu).


### Why Doks?
Nine main reasons why you should use Doks:

1. __Security aware__. Get A+ scores on [Mozilla Observatory](https://observatory.mozilla.org/analyze/doks.netlify.app) out of the box. Easily change the default Security Headers to suit your needs.

2. __Fast by default__. Get 100 scores on [Google Lighthouse](https://googlechrome.github.io/lighthouse/viewer/?gist=7731347bb8ce999eff7428a8e763b637) by default. Doks removes unused css, prefetches links, and lazy loads images.

3. __SEO-ready__. Use sensible defaults for structured data, open graph, and Twitter cards. Or easily change the SEO settings to your liking.

4. __Development tools__. Code with confidence. Check styles, scripts, and markdown for errors and fix automatically or manually.

5. __Bootstrap framework__. Build robust, flexible, and intuitive websites with Bootstrap. Or use any other front-end framework if you prefer.

6. __Netlify-ready__. Deploy to Netlify with sensible defaults. Easily use Netlify Functions, Netlify Redirects, and Netlify Headers.

7. __Full text search__. Search your Doks site with FlexSearch. Easily customize index settings and search options to your liking.

8. __Page layouts__. Build pages with a landing page, blog, or documentation layout. Add custom sections and components to suit your needs.

9. __Dark mode__. Switch to a low-light UI with the click of a button. Change colors with variables to match your branding.


## Requirements

- [Git](https://git-scm.com/) — latest source release
- [Node.js](https://nodejs.org/) — latest LTS version or newer

<details>
<summary>Why Node.js?</summary>

Doks uses npm (included with Node.js) to centralize dependency management, making it [easy to update](https://getdoks.org/docs/help/how-to-update/) resources, build tooling, plugins, and build scripts.

</details>

## Get started

Start a new Doks project in three steps:

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run start
```

## Other commands

Doks comes with [commands](https://getdoks.org/docs/prologue/commands/) for common tasks.

## Documentation

- [Netlify](https://docs.netlify.com/)
- [Hugo](https://gohugo.io/documentation/)
- [Doks](https://getdoks.org/)

## Communities

- [Netlify Community](https://community.netlify.com/)
- [Hugo Forums](https://discourse.gohugo.io/)
- [Doks Discussions](https://github.com/h-enk/doks/discussions)

## Thanks

<a href="https://www.netlify.com/">
  <img src="https://cdn.netlify.com/15ecf59b59c9d04b88097c6b5d2c7e8a7d1302d0/1b6d6/img/press/logos/full-logo-light.svg" width="110.25" height="30" alt="Netlify Logo">
</a>

Thanks to [Netlify](https://www.netlify.com/) for providing the hosting infrastructure.

<a href="https://www.algolia.com/">
  <img src="https://res.cloudinary.com/hilnmyskv/image/upload/q_auto/v1631888269/Algolia_com_Website_assets/images/shared/algolia_logo/logo-algolia-nebula-blue-full.svg" width="97" height="30" alt="Algolia Logo">
</a>

Thanks to [Algolia](https://www.algolia.com/) for providing the documentation search.

## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website.

[![OC sponsor 0](https://opencollective.com/doks/tiers/sponsor/0/avatar.svg)](https://opencollective.com/doks/tiers/sponsor/0/website)
[![OC sponsor 1](https://opencollective.com/doks/tiers/sponsor/1/avatar.svg)](https://opencollective.com/doks/tiers/sponsor/1/website)

## Backers

Support this project by becoming a backer. Your avatar will show up here.

[![Backers](https://opencollective.com/doks/tiers/backer.svg)](https://opencollective.com/doks)
