import { toSnakeCase } from "@/lib/utils";
import { ResumeEntryComponentProps, ResumeSectionComponentProps } from ".";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function SectionDefault(props: ResumeSectionComponentProps) {
  const { title, entries } = props.section;

  return (
    <div className="w-full mb-4">
      <h2>{title}</h2>
      <Separator className="mt-2 mb-4" />

      <div className="flex flex-col gap-3">
        {entries.map((entry, i) => (
          <EntryDefault key={i} entry={entry} section={props.section} />
        ))}
      </div>
    </div>
  );
}

export function EntryDefault(props: ResumeEntryComponentProps) {
  const sectionTitle = toSnakeCase(props.section.title);
  const { title, date, location, description, RenderPage, linkExternal } =
    props.entry;

  const link = RenderPage
    ? `/resume/${sectionTitle}/${toSnakeCase(title)}`
    : linkExternal;

  return (
    <div className="w-full border-l bg-muted/50 border-primary px-3 pt-1 pb-2 rounded-r">
      <div className="flex justify-between items-baseline">
        <EntryTitle title={title} link={link} />
        <h4>{date}</h4>
      </div>

      {location && <h4>{location}</h4>}

      <p>{description}</p>
    </div>
  );
}

export function EntryTitle(props: { title: string; link?: string }) {
  const { title, link } = props;

  function Header() {
    return <h3>{title}</h3>;
  }

  return link ? (
    <Link href={link} className="hover:text-accent transition-colors">
      <Header />
    </Link>
  ) : (
    <Header />
  );
}
