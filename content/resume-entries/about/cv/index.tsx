import { EntryPageComponentProps } from "@/content/resume-entries";
import Image from "next/image";

export function cv(props: EntryPageComponentProps) {
  const { entry } = props;

  return (
    <div>
      <h2>{entry.title}</h2>
      <h4>{entry.date}</h4>
      {entry.location && <h4>{entry.location}</h4>}

      <p>{entry.description}</p>
      {/* <Image src={sleepPic} alt="sleeping lady" width={500} height={500} /> */}
    </div>
  );
}
