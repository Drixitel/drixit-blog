import { graphql, useStaticQuery } from "gatsby";
import { useState } from "react";

const useAllTags = () => {
  const [tags, setTags] = useState([]);

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: ASC }
        limit: 1000
      ) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            tags
          }
        }
      }
    }
  `);

  

  return tags;
};

export default useAllTags;
