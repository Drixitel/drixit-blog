import { WavesView } from "@/components/scene";
import { NameLg } from "../components/name";
import { Descriptors } from "@/components/descriptors";
import { RecentPosts } from "./recent-posts";
import { Paper } from "@/components/paper";

export default function Home() {
  return (
    <main className="container">
      <Paper>
        <section className="relative mb-16">
          <div className="container relative mb-8 overflow-hidden">
            <div className="absolute inset-0 outline rounded-lg outline-secondary outline-[1000px]">
              <WavesView className="absolute inset-0" />
            </div>
            <NameLg />
          </div>

          <Descriptors />
        </section>

        <RecentPosts />
      </Paper>
    </main>
  );
}
