import { Paper } from "@/components/paper";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="container">
      <Paper>{children}</Paper>
    </div>
  );
}
