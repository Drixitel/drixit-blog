import Scene, { Waves, WavesView } from "@/components/scene";
import { NameLg } from "../components/name";
import { Descriptors } from "@/components/descriptors";
import { RecentPosts } from "./recent-posts";
import { Paper } from "@/components/paper";

export default function Home() {
  return (
    <main className="container">
      <Paper>
        <section className="relative mb-16">
          <div className="container relative mb-8">
            <Scene className="absolute inset-0 rounded-lg overflow-hidden">
              <Waves />
            </Scene>
            <NameLg />
          </div>

          <Descriptors />
        </section>

        <RecentPosts />
      </Paper>
    </main>
  );
}
