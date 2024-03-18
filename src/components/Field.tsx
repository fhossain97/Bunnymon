import { Cylinder, OrbitControls } from "@react-three/drei";
import {
  CuboidCollider,
  CylinderCollider,
  RigidBody,
} from "@react-three/rapier";
import { Grass } from "./Grass";
import { BufferGeometry, MeshStandardMaterial } from "three";

const Field = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={1} />
      <directionalLight
        color={"#9e69da"}
        position={[5, 5, 5]}
        intensity={0.8}
        castShadow
      />

      {/* <Grass scale={[3, 3, 3]} position-x={0.6} /> */}

      <RigidBody colliders={false} type="fixed" position={-0.2}>
        <CylinderCollider args={[1 / 2, 5]} />

        <Cylinder scale={[3, 1, 3]} receiveShadow>
          {" "}
          <meshStandardMaterial color="lightgreen" />
        </Cylinder>
      </RigidBody>
    </>
  );
};

export default Field;
