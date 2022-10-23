import * as React from "react";
import { Link } from "gatsby";
import Scene from "./scene";

const NAVS = [
  ["Posts", "/posts"],
  ["About Me", "/about"],
];

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

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
        marginBottom: "1.125rem",
        width: "100%",
        ...style,
      }}
    >
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>

      <nav style={{ display: "flex", gap: "3em" }}>
        {NAVS.map(([text, url], idx) => (
          <NavItem key={idx} text={text} url={url} />
        ))}
      </nav>
    </header>
  );

  const Footer = () => (
    <footer style={{ marginTop: "2em" }}>
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
            height: "80vh",
            maxHeight: "800px",
            width: "100vw",
            position: "absolute",
            display: "grid",
            justifyContent: "left",
            gridTemplateColumns: "1fr auto 1fr",
            gridTemplateRows: "auto 1fr",
            background:
              "linear-gradient(0deg, rgba(34,28,28,1) 0%, rgba(34,28,28,0) 100%)",
          }}
        >
          {/* <div
            className="canvas"
            style={{
              gridArea: "1 / 1 / 3 / 4",
              zIndex: -1,
              backgroundColor: "#333",
              width: "100%",
              height: "100%",
            }}
          ></div> */}
          <Scene />
          <Header
            className="global-wrapper"
            style={{ gridRow: "1/2", gridColumn: "1/4", zIndex: 1 }}
          />

          <div
            className="content global-wrapper"
            style={{
              alignSelf: "end",
              gridRow: "2/3",
              gridColumn: "1/4",
              width: "100%",
            }}
          >
            <h1>Hi, I'm Michelle! 👋</h1>

            <p>
              I'm a pretty lady, who is currently studying Applied Physics and
              Mathematics at UCSC.
            </p>
          </div>
        </div>
        <div
          className="spacer"
          style={{
            height: "80vh",
            maxHeight: "800px",
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
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
