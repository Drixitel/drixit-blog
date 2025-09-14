# Drixit Blog

There are READMEs in each directory with more information about the role of each directory.

### Directories

- `app/` - The 'router' of the application. This is where the routes are defined. Each folder that contains a `page.ts(x)` file is a page in the application.
  - e.g. `app/about/page.tsx` will be rendered at `/about`
  - e.g. `app/page.tsx` will be rendered at `/`
  - e.g. `app/blog/[id]/page.tsx` will be rendered at `/blog/{id}` for any `id` written in the URL
  - read more at the [next.js routing docs](https://nextjs.org/docs/app/building-your-application/routing)
- `components/` - Reusable components that are used throughout the application.
- `lib/` - Utility functions that are used throughout the application, usually relating to outside resources/packages.
- `content/` - Index of contents -- like markdown files -- that are used to generate various pages/page content.

Most anything else is essentially utilities/configuration that will not be directly interacted with.

### Development

> Ensure you have `pnpm` installed:
> [installation instructions](https://pnpm.io/installation#using-a-standalone-script)

To start the development server, run:

```bash
pnpm install
pnpm dev
```

This will start the development server, note the terminal output for what url to find the app at.

When you are satisfied with your changes, `git commit -a && git push` to push your changes up and this will trigger a new build on Vercel
  - `esc` to save comment
  - `:wq` to write/close/commit changes

### Deployment

This project is set up to be deployed to [Vercel](https://vercel.com).

- When you push to the `main` branch, Vercel will automatically deploy the changes.
- When you push to a branch, Vercel will create a preview deployment of the changes so you (and anyone else) can review them before merging.

### Notable Tools Used

- [Next.js](https://nextjs.org/) - React framework used to build the application.
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework used to style the application.
  - [shadcn/ui](https://ui.shadcn.com/) - Tailwind CSS component library used to assist in building the application.
