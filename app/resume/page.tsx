import { WavesView } from "@/components/scene";
import { resume } from "@/content/resume-entries";
import { Paper } from "@/components/paper";

export default function Page() {
  return (
    <Paper>
      <div className="relative mb-8 py-12 rounded overflow-hidden text-center">
        <WavesView className="absolute inset-0 z-[-1]" />
        <h1 className="text-8xl font-black text-black mix-blend-overlay uppercase">
          Resume
        </h1>
      </div>

      {resume.sections.map((resumeSection) => (
        <section key={resumeSection.title}>
          <resumeSection.RenderSection section={resumeSection} />
        </section>
      ))}
    </Paper>
  );
}
