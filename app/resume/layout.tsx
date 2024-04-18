import { ReactNode } from "react";
import styles from "./resume.module.scss";

export default function Layout(props: { children: ReactNode }) {
  return <div className={styles.resume}>{props.children}</div>;
}
