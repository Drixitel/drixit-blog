import { toSnakeCase } from "@/lib/utils";
import { resume } from "@/content/resume-entries";
import { notFound } from "next/navigation";
import { Paper } from "@/components/paper";

type Params = {
  section: string;
  entry: string;
};

type Props = {
  params: Params;
};

export default function Page(props: Props) {
  const section = resume.sections.find(
    (section) => toSnakeCase(section.title) === props.params.section
  );

  const entry = section?.entries.find(
    (entry) => toSnakeCase(entry.title) === props.params.entry
  );

  if (!entry?.RenderPage) {
    notFound();
  }

  const { RenderPage, ...restEntry } = entry;

  return (
    <div>
      <Paper>
        <RenderPage entry={restEntry} />
      </Paper>
    </div>
  );
}

export function generateStaticParams(): Params[] {
  return resume.sections.flatMap((section) =>
    section.entries.map((entry) => ({
      entry: entry.title,
      section: section.title,
    }))
  );
}
