import { Text } from "@react-three/drei";
import CustomMaterial from "./CustomMaterial";
const Description = ({
  text,
  ref,
  order,
  shift,
  vertexShader,
  fragmentShader,
}) => {
  return (
    <mesh position={[-6, 0, 0]} scale={[4, 4, 4]} rotation={[-0.4, 0.3, 0.2]}>
      <Text
        maxWidth={1.2}
        curveRadius={-5}
        text={text}
        ref={ref}
        outlineBlur={0.1}
        outlineOpacity={0.05}
        outlineWidth={0.15}
      >
        <CustomMaterial
          //   imgTex={textures[i]}
          order={order}
          shift={shift}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          attach="material"
        />
      </Text>
    </mesh>
  );
};

export default Description;
