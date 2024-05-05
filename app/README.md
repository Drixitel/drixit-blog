# The App Router

The 'router' of the application. This is where the routes are defined. Each folder that contains a `page.ts(x)` file is a page in the application.
- e.g. `app/about/page.tsx` will be rendered at `/about`
- e.g. `app/page.tsx` will be rendered at `/`
- e.g. `app/blog/[id]/page.tsx` will be rendered at `/blog/{id}` for any `id` written in the URL
- read more at the [next.js routing docs](https://nextjs.org/docs/app/building-your-application/routing)

## Notable Files

- `page.ts(x)` - The main file that is rendered at the route.
- `layout.tsx` - The optional layout file that wraps the `page.ts(x)` file.
  - Note that layouts can be nested, read more at the [next.js layout docs](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#nesting-layouts)
- `*.scss` - Optional SCSS files that can be used to style the page. Sass is a CSS preprocessor that allows for more advanced styling.
  - Sass is a superset of CSS, meaning that it has all the features of CSS and more. Feel free to only use CSS if you're not familiar with Sass.
  - `*.module.scss` - SCSS files that are module-scoped, meaning that the styles are only applied to the component(s) that imports them.
  - Read more at the [Sass docs](https://sass-lang.com/documentation)
