import dynamic from "next/dynamic";
import Scene from "@/components/scene";
import { Paper } from "@/components/paper";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Certificate = dynamic(() => import("@/components/certificate"), {
  ssr: false,
});

export default function Page() {
  return (
    <Paper>
      <div className="grid grid-cols-2">
        <div className="w-1/2">
          <h1 className="text-4xl font-black">Congrats, Jeff!</h1>
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
          <Certificate name="Jeff" />
        </Scene>
      </div>
    </Paper>
  );
}
