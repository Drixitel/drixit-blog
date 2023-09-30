# Drixit Blog

## Site Status:

[![Netlify Status](https://api.netlify.com/api/v1/badges/51528303-0ebb-4a66-91f6-8cd001f5b929/deploy-status)](https://app.netlify.com/sites/gleeful-khapse-41949b/deploys?filter=main)

## Issues
- See GitHub Issues before losing time in Google

## How to develop

- clone the repository to any directory
  - `git clone https://github.com/JMBeresford/drixit-blog.git`
- run `npm install` to install the project dependencies

  - make sure you have `npm` and `nodejs 16.x` installed if you encounter errors

    - on ubuntu/debian:

      ```
      curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
      sudo apt update && sudo apt install nodejs
      ```

- run command `npm run dev` in package.json directory or subdirectory to start up the development server
  - once running, you can go to `localhost:8000` in your browser to see the
    live project
  - while running, the dev server will auto-reload the project in your
    browser when the code is edited
    - an exception to this is when `gatsby` files are edited -- this
      requires a full reload to be realized in browser
- when you are satisfied with your changes, `git commit -a && git push` to push your changes up and this will trigger a new build on netlify
  - `esc` to save comment 
  - `:wq` to write/close/commit changes

## How to add content

- any sub-directory in `content/blog` constitutes a blog post
  - e.g. the existence of `content/blog/hello-world` means that there will be
    a post at the link: `http://drixit-blog.com/posts/hello-world`
- so to create a new post, simply create a new sub-directory `content/blog/<title>`
- each post is generated from a markdown file `index.md` within that posts'
  directory
  - e.g. `content/blog/hello-world/index.md` will define the content found at
    `http://drixit-blog.com/posts/hello-world`
- this markdown file uses standard markdown functionality when rendered on the web,
  but it also has additional functionality beyond that of normal markdown
  - visit the `example` page (e.g. `localhost:8000/posts/example` when on the dev
    server) to see examples of all of the functionality
- in addition, metadata for the post is defined in the **frontmatter** at the top
  of the markdown file

  - the frontmatter looks like the following, and has the listed possible options:

    ```yaml
    ---
    title: Hello World
    date: "2015-05-21T22:12:03.284Z"
    description: "Hello World"
    tags: ["physics", "math", "linux"]
    headerImage: ./header-img1.jpg
    private: false
    ---
    ```

  - note that private posts do not show up in the lists on the website, i.e
    you need to manually enter their url to get to them
  - also note that the date can be a simple `"YYYY-MM-DD"`
