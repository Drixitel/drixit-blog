import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  const size = 5;

  const h1Styles = {
    fontSize: `clamp(2rem, 2rem + 1.25vw, ${size}rem)`,
    margin: 0,
  };

  const h3Styles = {
    fontSize: `clamp(1.7rem, 1.75rem + 1.5vw, ${size / 1.5}rem)`,
    fontFamily: "var(--fontFamily-serif",
    margin: "0 0 0.25ch",
    color: "var(--color-bg)",
    backgroundColor: "var(--color-text-light)",
    padding: "0.25ch 0.25ch 0.1ch",
  };

  return (
    <>
      <Layout location={location} title={siteTitle}>
        <section>
          <div
            className="text"
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gridTemplateRows: "auto auto",
              margin: "5rem 0 0 0",
            }}
          >
            <h1 style={h1Styles}>Michelle</h1>
            <div
              className="small"
              style={{
                display: "flex",
                alignItems: "flex-end",
                height: "100%",
                textTransform: "lowercase",
                marginLeft: "2ch",
              }}
            >
              <h3 style={{ ...h3Styles }}>All About</h3>
            </div>
            <h1 style={{ gridColumn: "1/3", ...h1Styles }}>Pichardo-Munoz</h1>
          </div>
        </section>

        <div className="section" style={{ maxWidth: "50ch" }}>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facere
            ipsa quis soluta aliquid quibusdam adipisci doloremque quaerat, illo
            numquam tempora debitis hic enim possimus, dolores repellendus
            incidunt consequuntur vel accusantium magni velit voluptatibus!
            Consequuntur perspiciatis ipsum impedit quo, obcaecati quae
            cupiditate quod porro deserunt, error magnam aspernatur architecto.
            Autem recusandae enim corporis, debitis soluta saepe optio amet sed
            quasi!
          </p>
        </div>
      </Layout>
    </>
  );
};

export default About;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="About" />;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
