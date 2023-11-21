import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Card from "../components/card";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Michelle Pichardo`;
  const posts = data.allMarkdownRemark.nodes;
  const carouselRef1 = React.useRef(null);
  const carouselRef2 = React.useRef(null);

  const portfolioPosts = React.useMemo(
    () =>
      posts.filter(post =>
        post.frontmatter.tags.map(t => t.toLowerCase()).includes("portfolio")
      ),
    [posts]
  );

  const oddsPosts = React.useMemo(
    () =>
      posts.filter(
        post =>
          !post.frontmatter.tags.map(t => t.toLowerCase()).includes("portfolio")
      ),
    [posts]
  );

  function scrollCarousel(direction, carousel) {
    carousel = carousel;
    if (!carousel) return;

    const scrollAmount = carousel.offsetWidth / 2;
    carousel.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
  }

  return (
    <>
      <Layout location={location} title={siteTitle}>
        <section className="top3">
          <div className="thin-wrapper top3-categories">
            <h1>Portfolio Updates</h1>
          </div>

          <div className="wrapper">
            <div
              className="button left"
              onClick={() => scrollCarousel("left", carouselRef1.current)}
            >
              <FaChevronCircleLeft />
            </div>
            <div ref={carouselRef1} className="carousel">
              <div className="cards">
                {portfolioPosts.map((post, idx) => (
                  <Card key={idx} post={post} />
                ))}
              </div>
            </div>
            <div
              className="button right"
              onClick={() => scrollCarousel("right", carouselRef1.current)}
            >
              <FaChevronCircleRight />
            </div>
          </div>

          <div className="thin-wrapper top3-categories">
            <h1>Odds and ends</h1>
          </div>

          <div className="wrapper">
            <div
              className="button left"
              onClick={() => scrollCarousel("left", carouselRef2.current)}
            >
              <FaChevronCircleLeft />
            </div>
            <div ref={carouselRef2} className="carousel">
              <div className="cards">
                {oddsPosts.map((post, idx) => (
                  <Card key={idx} post={post} />
                ))}
              </div>
            </div>
            <div
              className="button right"
              onClick={() => scrollCarousel("right", carouselRef2.current)}
            >
              <FaChevronCircleRight />
            </div>
          </div>

          <div className="thin-wrapper">
            <h6>
              <Link to="/posts" className="underline noBar">
                check out the rest
              </Link>
            </h6>
          </div>
        </section>

        <section
          style={{ position: "relative", padding: "3em 0", marginTop: "5em" }}
        >
          <div
            className="bg"
            style={{
              position: "absolute",
              top: "0",
              bottom: "0",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100vw",
              zIndex: -1,
              backgroundColor: "rgb(43, 35, 35)",
            }}
          />

          <div className="wrapper thin-wrapper">
            <h1 style={{ margin: "0 0 1em" }}>Let's Talk!</h1>

            <form name="Contact Form" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="Contact Form" />
              <p>
                <label>
                  Name:
                  <input type="text" name="name" />
                </label>
              </p>
              <p>
                <label>
                  Email:
                  <input type="text" name="email" />
                </label>
              </p>
              <p>
                <label>
                  Message:<textarea name="message" rows={5}></textarea>
                </label>
              </p>
              <button type="submit">Send</button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default BlogIndex;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Michelle Pichardo" />;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { private: { ne: true } } }
    ) {
      nodes {
        excerpt(pruneLength: 250)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
          headerImage {
            childImageSharp {
              gatsbyImageData(width: 2048, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;

function repeatArrayContent(arr, times) {
  const newArr = [];
  for (let i = 0; i < times; i++) {
    newArr.push(...arr);
  }
  return newArr;
}
