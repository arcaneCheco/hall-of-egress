import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
// import gsap from "gsap";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/three";
// import { useSpring, animated } from "@react-spring/three";
const Camera = () => {
  const { camera, scene } = useThree();
  camera.position.z = 9;
  camera.position.y = 5;
  let origin = new THREE.Vector3(0, 0, 0);
  camera.lookAt(origin);

  // const [isActive, setIsActive] = useState(true);
  // const { activePos } = useSpring({
  //   activePos: isActive ? [0, 5, 8] : [0, 0, 0],
  //   config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 },
  // });
  // camera.position.setX(activePos[0]);
  // camera.position.setY(activePos[1]);
  // camera.position.setZ(activePos[2]);
  // camera.lookAt(origin);

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
  // //   cur

  // const points = curve.getPoints(10);
  // //   console.log(points[0].x);

  // let origin = new THREE.Vector3(0, 0, 0);

  return 1;
};

export default Camera;

//   const zPos = useState(8);

//   let h = 1;
//   let r = 8;
//   let r2 = r * Math.cos(Math.asin(h / r));
//   //   console.log(r2);

//   let speed = 0.5;

//   const curve = new THREE.EllipseCurve(
//     0,
//     1, // ax, aY
//     r2,
//     r2, // xRadius, yRadius
//     0,
//     2 * Math.PI, // aStartAngle, aEndAngle
//     true, // aClockwise
//     0 // aRotation
//   );
//   //   cur

//   const points = curve.getPoints(10);
//   //   console.log(points[0].x);

//   let origin = new THREE.Vector3(0, 0, 0);

//   var tl = gsap.timeline({repeat: 2, repeatDelay: 1});
// tl.to("#id", {x: 100, duration: 1});
// tl.to("#id", {y: 50, duration: 1});
// tl.to("#id", {opacity: 0, duration: 1});

//   gsap.set(camera.position, { z: 32 });

//   gsap
//     .timeline({
//       reapeat: -1,
//       defaults: { duration: 3 },
//       onUpdate: camera.lookAt(origin),
//     })
//     .to(camera.position, { z: points[0].x, x: points[0].y })
//     .to(camera.position, { x: points[1].x, z: points[1].y })
//     .to(camera.position, { x: points[2].x, z: points[2].y })
//     .to(camera.position, { x: points[3].x, z: points[3].y })
//     .to(camera.position, { x: points[4].x, z: points[4].y })
//     .to(camera.position, { x: points[5].x, z: points[5].y })
//     .to(camera.position, { x: points[6].x, z: points[6].y })
//     .to(camera.position, { x: points[7].x, z: points[7].y })
//     .to(camera.position, { x: points[8].x, z: points[8].y })
//     .to(camera.position, { x: points[9].x, z: points[9].y });

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
//   let i = 0;
//   setInterval(() => {
//     console.log(i);
//     let initial =
//     gsap.to(camera.position, {
//       duration: 100,
//       x: points[i].x,
//       //   y: 1,
//       z: points[i].y,
//     });
//     camera.lookAt(origin);
//     i = (i + 1) % 29;
//   }, 100);
//   let i = 10;

//   let init = Object.assign(camera.position);
//   console.log(init);

//   const tester = () => {
//     console.log(camera.position);
//   };
//   gsap.to(camera.position, {
//     // delay: 1000,
//     onComplete: tester,
//     duration: 5000,
//     // repeat: 10,
//     //   delay: 2000,
//     x: 2,
//     y: 1,
//     z: 16,
//   });

//   const [dollyFinished, setDollyFinished] = useState(false);
//   const [rotationSpeed, setRotationSpeed] = useState(0);
//   const lerp = (start, end, alpha) => start * (1 - alpha) + end * alpha;

//   const { z } = useSpring({
//     from: { z: 8 },
//     z: 10,
//     config: {
//       mass: 0.1,
//       tension: 200,
//       friction: 180,
//     },
//     // onRest: () => setDollyFinished(true),
//   });

//   useFrame(() => {
//     if (camera.position.z > 10) camera.position.z = z;
//     // ref.current.update();
//     // if (dollyFinished && rotationSpeed < 0.3) {
//     //   setRotationSpeed(lerp(rotationSpeed, 0.305, 0.005));
//     // }
//   });

//   points.forEach(({ x, y }) => {
//     setTimeout(() => {
//       console.log("x: ", x, ", y: ", y);
//     }, 1000);
//     camera.position.setX(x);
//     camera.position.setZ(y);
//   });

//   const [active, setActive] = useState(true);
//   while (i < 28) {
//     console.log(i);
//     gsap.to(camera.position, {
//       delay: 1000,
//       duration: 1000,
//       x: points[i].x,
//       y: 1,
//       z: points[i].y,
//     });
//     camera.lookAt(origin);
//     i = i + 1;
//     // i = (i + 1) % 29;
//   }

//   useFrame((state) => {
//     // const time = state.clock.getElapsedTime() % 60;
//     i = Math.abs(i + 0.1) % 29;
//     j += 0.1;

//     // console.log(i);
//     // t += 0.01;
//     if (j % 1 === 0.0) {
//       //   let cur = camera.position
//       gsap.to(camera.position, {
//         duration: state.clock.getDelta() * 10,
//         x: points[i].x,
//         y: 1,
//         z: points[i].y,
//       });
//       camera.position.setX(points[i].x);
//       camera.position.setZ(points[i].y);
//       camera.lookAt(origin);
//     }
//   });
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

//   const geometry = new THREE.BufferGeometry().setFromPoints(points);

//   const material = new THREE.LineBasicMaterial({ color: 0xff0000 });

//   // Create the final object to add to the scene
//   const ellipse = new THREE.Line(geometry, material);
//   ellipse.rotateX(Math.PI / 2);
//   scene.add(ellipse);

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
