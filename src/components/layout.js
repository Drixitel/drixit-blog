import * as React from "react";
import { Link } from "gatsby";
import Scene from "./scene";
import { gsap, Power0 } from "gsap";
import "katex/dist/katex.min.css";

import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

const NAVS = [
  ["Posts", "/posts"],
  ["About Me", "/about"],
];

const DESCRIPTORS = [
  "multivariate calculus",
  "LOR audio book",
  "speg the all knowing",
  "carne asada fries",
  "desmos",
  "spanish punk music",
  "hats",
  "It's just algebra",
  "my cats Ada and Gauss",
  "my friends",
  "the master equations",
  "candied apples",
  "measuring time takes time",
];

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  const tl = React.useRef(gsap.timeline({ repeat: -1, repeatDelay: 3 }));
  const descRef = React.useRef();
  const [descIdx, setDescIdx] = React.useState(0);

  React.useEffect(() => {
    tl.current.clear();

    tl.current
      .to(".descriptor", {
        opacity: 0,

        duration: 0.5,
        ease: Power0.easeInOut,
        onComplete: () => {
          setDescIdx(prev => (prev + 1) % DESCRIPTORS.length);
        },
      })
      .to(".descriptor", {
        opacity: 1,

        duration: 0.5,
        ease: Power0.easeInOut,
      });
  }, []);

  const NavItem = ({ text, url }) => (
    <Link
      to={url || `/${text}`}
      style={{
        fontWeight: 600,
        fontFamily: "var(--fontFamily-sans)",
        fontSize: "1.2em",
      }}
    >
      {text}
    </Link>
  );

  const Header = ({ style, className = "", ...props }) => (
    <header
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "2.125rem",
        width: "100%",
        ...style,
      }}
    >
      <h1 className="main-heading desktop">
        <Link to="/" className="noBar">
          {title}
        </Link>
      </h1>
      <h1 className="main-heading mobile">
        <Link to="/" className="noBar">
          MPM
        </Link>
      </h1>

      <nav style={{ display: "flex", gap: "3em" }}>
        {NAVS.map(([text, url], idx) => (
          <NavItem key={idx} text={text} url={url} />
        ))}
      </nav>
    </header>
  );

  const Footer = () => (
    <footer style={{ marginTop: "2em" }} className="thin-wrapper">
      © {new Date().getFullYear()}, Built by
      {` `}
      <a href="https://www.john-beresford.com" className="noAnim">
        John Beresford
      </a>
    </footer>
  );

  if (isRootPath)
    return (
      <>
        <div
          className="canvasWrapper"
          style={{
            height: "min(80svh, 800px)",
            width: "100vw",
            position: "absolute",
            display: "grid",
            justifyContent: "left",
            gridTemplateColumns: "1fr auto 1fr",
            gridTemplateRows: "auto 1fr",
          }}
        >
          <Header
            className="global-wrapper thin-wrapper"
            style={{ gridRow: "1/2", gridColumn: "1/4", zIndex: 2 }}
          />

          <div
            className="content global-wrapper thin-wrapper"
            style={{
              alignSelf: "end",
              gridRow: "2/3",
              gridColumn: "1/4",
              width: "100%",
              zIndex: 2,
            }}
          >
            <h1 style={{ fontSize: "3.25rem" }}>Hi, I'm Michelle! 👋</h1>

            <div className="wrapper">
              <h3
                style={{
                  color: "var(--color-text)",
                  display: "inline",
                  margin: 0,
                }}
              >
                Lives in my head :{" "}
              </h3>
              <h3
                className="descriptor"
                ref={descRef}
                style={{
                  color: "var(--color-primary)",
                  margin: 0,
                  height: 0,
                }}
              >
                {DESCRIPTORS[descIdx]}
              </h3>
            </div>
          </div>

          <Scene />
        </div>
        <div
          className="spacer"
          style={{
            height: "min(80svh, 800px)",
            pointerEvents: "none",
            touchAction: "none",
          }}
        ></div>
        <div className="global-wrapper">
          <main>{children}</main>
          <Footer />
        </div>
      </>
    );

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <div className="thin-wrapper">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
