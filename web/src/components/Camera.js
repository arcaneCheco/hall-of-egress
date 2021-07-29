import { useThree } from "@react-three/fiber";
const Camera = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  camera.position.z = 3;
  return 1;
};

export default Camera;
