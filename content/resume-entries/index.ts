import { toSnakeCase } from "@/lib/utils";
import { about } from "./about";
import { academics } from "./academics";
import { experience } from "./experience";
import { research } from "./research";
import { teaching_leadership } from "./teaching_leadership";
import { EntryDefault, SectionDefault } from "./default-renderers";

// for rending a page for a single entry when that entry is clicked
// in the resume
export type EntryPageComponentProps = { entry: SanitizedResumeEntry };
export type EntryPageComponent<
  T extends EntryPageComponentProps = EntryPageComponentProps,
> = (props: T) => JSX.Element;

// for rendering a single entry in a section on the resume
export type ResumeEntryComponentProps = {
  entry: SanitizedResumeEntry;
  section: SanitizedResumeSection;
} & JSX.IntrinsicElements["div"];
export type ResumeEntryComponent<
  T extends ResumeEntryComponentProps = ResumeEntryComponentProps,
> = (props: T) => JSX.Element;

// for rendering a section on the resume
export type ResumeSectionComponentProps = {
  section: SanitizedResumeSection;
} & JSX.IntrinsicElements["div"];
export type ResumeSectionComponent<
  T extends ResumeSectionComponentProps = ResumeSectionComponentProps,
> = (props: T) => JSX.Element;

type ResumeEntryLink =
  | {
      linkExternal?: never;
      RenderPage?: EntryPageComponent;
    }
  | {
      linkExternal?: string;
      RenderPage?: never;
    };

export type ResumeEntry = {
  title: string;
  location?: string;
  date: string;
  description: string;
  tags: string[];
  RenderEntry?: ResumeEntryComponent;
} & ResumeEntryLink;

export type ResumeSection = {
  title: string;
  entries: ResumeEntry[];
  RenderSection?: ResumeSectionComponent;
};

export type Resume = {
  sections: ResumeSection[];
};

export const resume = sanitizeResume({
  sections: [about, academics, experience, research, teaching_leadership],
});

type SanitizedResumeEntry = Omit<ResumeEntry, "RenderEntry"> & {
  RenderEntry: ResumeEntryComponent;
};

type SanitizedResumeSection = Omit<
  ResumeSection,
  "RenderSection" | "entries"
> & {
  entries: SanitizedResumeEntry[];
  RenderSection: ResumeSectionComponent;
};

type SanitizedResume = {
  sections: SanitizedResumeSection[];
};

function sanitizeResume(resume: Resume): SanitizedResume {
  const sanitizedSections: SanitizedResumeSection[] = [];
  for (const section of resume.sections) {
    const sanitizedEntries: SanitizedResumeEntry[] = [];

    for (const entry of section.entries) {
      sanitizedEntries.push({
        ...entry,
        tags: entry.tags.map((tag) => toSnakeCase(tag)),
        RenderEntry: entry.RenderEntry ?? EntryDefault,
      });
    }

    sanitizedSections.push({
      ...section,
      entries: sanitizedEntries,
      RenderSection: section.RenderSection ?? SectionDefault,
    });
  }

  return { sections: sanitizedSections };
}
