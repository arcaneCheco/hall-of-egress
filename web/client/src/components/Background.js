import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const Background = () => {
  const { scene } = useThree();
  const tex = useTexture("space.jpeg");
  scene.background = tex;
  return tex;
};

// const tex = useTexture("space.jpeg");

export { Background };
