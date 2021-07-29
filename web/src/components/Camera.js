import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
const Camera = () => {
  const { camera, scene } = useThree();
  //   console.log(gl);
  camera.position.z = 8;
  camera.position.y = 1;

  let h = 1;
  let r = 8;
  let r2 = r * Math.cos(Math.asin(h / r));
  //   console.log(r2);

  let speed = 0.5;

  const curve = new THREE.EllipseCurve(
    0,
    1, // ax, aY
    r2,
    r2, // xRadius, yRadius
    0,
    2 * Math.PI, // aStartAngle, aEndAngle
    false, // aClockwise
    0 // aRotation
  );
  //   cur

  const points = curve.getPoints(30);
  //   console.log(points[0].x);

  let origin = new THREE.Vector3(0, 0, 0);

  //   const fadeStyles = useSpring({
  //     config: { duration: 500,
  //         mass: 9,
  //         tension: 250,
  //         friction: 60 },
  //     from: { opacity: 0 },
  //     to: {
  //       opacity: showA ? 1 : 0
  //     }
  //   });

  //   let t = 0;
  let i = 0;
  let j = 0;
  useFrame((state) => {
    // const time = state.clock.getElapsedTime() % 60;
    i = Math.abs(i + 0.1) % 29;
    j += 0.1;

    // console.log(i);
    // t += 0.01;
    if (j % 1 === 0.0) {
      camera.position.setX(points[i].x);
      camera.position.setZ(points[i].y);
      camera.lookAt(origin);
    }
  });
  //   useFrame((state) => {
  //     const time = state.clock.getElapsedTime() % 60;
  //     let delt = state.clock.getDelta();
  //     // console.log(delt);
  //     // i = Math.abs(i + 0.1) % 29;
  //     // j += 0.1;

  //     // // console.log(i);
  //     // // t += 0.01;
  //     // if (j % 1 === 0.0) {
  //     //   camera.position.setX(points[i].x);
  //     //   camera.position.setZ(points[i].y);
  //     //   camera.lookAt(origin);
  //     // }
  //   });

  //   let i = 0;

  //   function animate() {
  //     setTimeout(function () {
  //       requestAnimationFrame(animate);
  //       i = (i + 1) % 30;
  //       camera.position.setX(points[i].x);
  //       camera.position.setZ(points[i].y);
  //       camera.lookAt(origin);
  //     }, 1000);
  //   }
  //   animate();

  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  const material = new THREE.LineBasicMaterial({ color: 0xff0000 });

  // Create the final object to add to the scene
  const ellipse = new THREE.Line(geometry, material);
  ellipse.rotateX(Math.PI / 2);
  scene.add(ellipse);

  /**
   *
   * far = 1000
   * fov = 75
   * layers
   * matrix, maybe use this to make it look curved
   * near = 0.1
   * renderOrder = 0
   * scale
   * roaton
   * zoom
   */
  return 1;
};

export default Camera;
