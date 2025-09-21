import { ReactNode } from "react";

export default function Layout(props: { children: ReactNode }) {
  return <div className="container w-screen">{props.children}</div>;
}
