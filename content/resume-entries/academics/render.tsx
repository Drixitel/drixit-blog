import { Separator } from "@/components/ui/separator";
import { ResumeSectionComponentProps } from "..";

export function RenderAcademics(props: ResumeSectionComponentProps) {
  const { section } = props;

  return (
    <div>
      <h2>{section.title}</h2>
      <Separator className="mt-2 mb-4" />

      <div className="flex flex-wrap gap-5">
        {section.entries.map((entry) => (
          <div key={entry.title} className="basis-2/5 grow">
            <entry.RenderEntry entry={entry} section={section} />
          </div>
        ))}
      </div>
    </div>
  );
}
