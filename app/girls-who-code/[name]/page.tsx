import dynamic from "next/dynamic";
import Scene from "@/components/scene";
import { Paper } from "@/components/paper";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

const Certificate = dynamic(() => import("@/components/certificate"), {
  ssr: false,
});

const names = ["Jeff", "Ada", "Gauss", "Butt"].map(name_in_names => name_in_names.toLowerCase());

type Params = {
  name: string;
};

type Props = {
  params: Params;
};

export default function Page(props: Props) {
  // const name = props.params.name;
  const name = toTitleCase(props.params.name);
  if (!names.includes(name.toLowerCase())) {
    notFound();
  }

  return (
    <Paper>
      <div className="grid grid-cols-2">
        <div className="w-1/2">
          <h1 className="text-4xl font-black">Congrats, {name}!</h1>
          <h3 className="text-xl mt-1">You finished Girls Who Code!</h3>

          <Separator className="my-4" />

          <p className="text-sm mb-3">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>

          <Button>Download Certificate</Button>
        </div>

        <Scene
          className="min-h-[400px] border bg-card"
          camera={{ position: [0, 0, 5.5], fov: 45 }}
        >
          <Certificate name={name} />
        </Scene>
      </div>
    </Paper>
  );
}

export function generateStaticParams(): Params[] {
  return names.map((name_in_names) => ({ name: name_in_names }));
}


function toTitleCase(str:string): string {
  if (str === "") return ""
  return str.split(' ').map(word => word[0].toUpperCase()+ word.slice(1).toLowerCase()).join("")
}