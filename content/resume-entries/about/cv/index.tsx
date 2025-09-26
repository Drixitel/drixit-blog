import { EntryPageComponentProps } from "@/content/resume-entries";
import Image from "next/image";
import { PDFViewer } from "./pdfviewer";

export function cv(props: EntryPageComponentProps) {
  const { entry } = props;

  return (
    <div>
      <h2>{entry.title}</h2>
      <h4>{entry.date}</h4>
      {entry.location && <h4>{entry.location}</h4>}

      <p>{entry.description}</p>
      <PDFViewer />
      <a href="/pichardoCV_2025.pdf" target="_blank" rel="noopener noreferrer">
        Download CV (PDF)
      </a>
    </div>
  );
}
