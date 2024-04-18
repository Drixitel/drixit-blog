import { ReactNode } from "react";
import styles from "./layout.module.scss";
import { cn } from "@/lib/utils";
import { Paper } from "@/components/paper";

export default function Layout(props: { children: ReactNode }) {
  return (
    <main className={cn(styles.post)}>
      <Paper>
        <article>{props.children}</article>
      </Paper>
    </main>
  );
}
