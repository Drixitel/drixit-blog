## How to add content


- any sub-directory in `content/posts` constitutes a posts post
  - e.g. the existence of `content/posts/hello-world` means that there will be
    a post at the link: `http://drixit-posts.com/posts/hello-world`
- so to create a new post, simply create a new sub-directory `content/posts/<title>`
- each post is generated from a file `index.tsx` within that posts'
  directory
  - e.g. `content/posts/hello-world/index.tsx` will define the content found at
    `http://drixit-posts.com/posts/hello-world`
- this file uses standard typescript and markdown functionality when rendered on the web,
  but it also has additional functionality beyond that of normal markdown
  - visit the `example` page (e.g. `localhost:3000/posts/example` when on the dev
    server) to see examples of all of the functionality
- in addition, metadata for the post is defined in the **frontmatter** at the top
  of the markdown file reference the example: content>posts>example>index.tsx

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