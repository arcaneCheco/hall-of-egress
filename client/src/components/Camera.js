import { useThree } from "@react-three/fiber";
import { Vector3 } from "three";
const Camera = () => {
  const { camera } = useThree();
  camera.position.z = 9;
  camera.position.y = 5;
  let origin = new Vector3(0, 0, 0);
  camera.lookAt(origin);

  return 1;
};

export default Camera;

//   const curve = new THREE.EllipseCurve(
//   0,
//   1, // ax, aY
//   r2,
//   r2, // xRadius, yRadius
//   0,
//   2 * Math.PI, // aStartAngle, aEndAngle
//   true, // aClockwise
//   0 // aRotation
// );

// const points = curve.getPoints(10);
