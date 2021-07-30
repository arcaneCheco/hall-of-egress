import { Text } from "@react-three/drei";
const Description = ({ text }) => {
  //   const descs = useStore((state) =>
  //     state.gallery.map((obj) => obj.description)
  //   );

  return (
    <mesh position={[-3, 2, 4]} scale={[4, 4, 4]} rotation={[-0.4, 0.3, 0.2]}>
      <Text maxWidth={1.2} curveRadius={-5} text={text}>
        <meshPhongMaterial attach="material" color={"green"} />
      </Text>
    </mesh>
  );
};

export default Description;
