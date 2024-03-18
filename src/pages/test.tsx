import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";
import Field from "../components/Field";

const test = () => {
  return (
    <div className="h-[100vh] w-[100vw]">
      <Canvas shadows="variance" camera={{ position: [0, 6, 14], fov: 42 }}>
        <color attach="background" args={["skyblue"]} />
        <Suspense>
          <Physics debug>
            <Field />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default test;
