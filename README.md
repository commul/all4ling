# All4Ling Website

This is a static site using a [Hugo](https://gohugo.io/) template called [Doks](https://getdoks.org/), forked from https://github.com/h-enk/doks.

### Setup

1. Install [nodejs](https://nodejs.org/en/download/)
2. Make sure the installation was successful and npm is available: `node -v && npm -v`
3. cd to the root of this repository and run `npm install`. This will install Hugo and all the other necessary dependencies.

### Starting the server

`npm run start`


### Deploy

1. To deploy, push your commits to master.

This will trigger `.gitlab-ci.yml`, which will deploy the website to a [GitLab page](https://docs.gitlab.com/ee/user/project/pages/) located at [https://commul.pages.scientificnet.org/all4ling/www/](https://commul.pages.scientificnet.org/all4ling/www/), mirrored at [https://all4ling.eurac.edu](https://all4ling.eurac.edu)


### Why Doks?

1. __Security aware__. Get A+ scores on [Mozilla Observatory](https://observatory.mozilla.org/analyze/doks.netlify.app) out of the box. Easily change the default Security Headers to suit your needs.

2. __Fast by default__. Get 100 scores on [Google Lighthouse](https://googlechrome.github.io/lighthouse/viewer/?gist=7731347bb8ce999eff7428a8e763b637) by default. Doks removes unused css, prefetches links, and lazy loads images.

3. __SEO-ready__. Use sensible defaults for structured data, open graph, and Twitter cards. Or easily change the SEO settings to your liking.

4. __Development tools__. Code with confidence. Check styles, scripts, and markdown for errors and fix automatically or manually.

5. __Bootstrap framework__. Build robust, flexible, and intuitive websites with Bootstrap. Or use any other front-end framework if you prefer.

6. __Netlify-ready__. Deploy to Netlify with sensible defaults. Easily use Netlify Functions, Netlify Redirects, and Netlify Headers.

7. __Full text search__. Search your Doks site with FlexSearch. Easily customize index settings and search options to your liking.

8. __Page layouts__. Build pages with a landing page, blog, or documentation layout. Add custom sections and components to suit your needs.

9. __Dark mode__. Switch to a low-light UI with the click of a button. Change colors with variables to match your branding.


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
