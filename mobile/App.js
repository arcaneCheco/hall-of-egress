import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
// import Expo from "expo";
import {
  Scene,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  BoxBufferGeometry,
  MeshStandardMaterial,
  SphereGeometry,
  AmbientLight,
} from "three";
import THREE, { Renderer } from "expo-three";
import { ExpoWebGLRenderingContext, GLView } from "expo-gl";

// class SphereMesh extends Mesh {
//   constructor() {
//     super(
//       new SphereGeometry(0, 50, 20, 0, Math.PI * 2, 0, Math.PI * 2),
//       new MeshStandardMaterial({
//         color: 0xff0000,
//       })
//     );
//   }
// }

const App = () => {
  let cameraInitialPositionX = 0;
  let cameraInitialPositionY = 0;
  let cameraInitialPositionZ = 3;

  // const sphere = new SphereMesh();

  const onContextCreate = async (gl) => {
    /**init */
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, width / height, 0.1, 1000);
    gl.canvas = {
      width: gl.drawingBufferWidth,
      height: gl.drawingBufferHeight,
    };
    camera.position.set(
      cameraInitialPositionX,
      cameraInitialPositionY,
      cameraInitialPositionZ
    );
    const renderer = new Renderer({ gl });
    renderer.setSize(width, height);
    const ambientLight = new AmbientLight({ color: 0x101010, intensity: 1.0 });
    scene.add(ambientLight);
    /****** */

    // camera.lookAt(sphere.position);

    const geometry = new BoxBufferGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({
      color: "blue",
    });
    const cube = new Mesh(geometry, material);
    scene.add(cube);

    /**animation */
    const render = () => {
      requestAnimationFrame(render);
      cube.rotation.y += 0.05;
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };
    render();
    /****** */
  };

  return (
    <View style={{ flex: 1 }}>
      <GLView
        onContextCreate={onContextCreate}
        style={{ flex: 1, width: 500, height: 500 }}
      >
        {/* <View>
          <TouchableWithoutFeedback onPressIn={() => console.log("UP")}>
            <Text style={styles.text}>UP</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPressIn={() => console.log("down")}>
            <Text style={styles.text}>DOWN</Text>
          </TouchableWithoutFeedback>
        </View> */}
      </GLView>
    </View>
  );
};

export default App;

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 36,
//     zIndex: 100,
//   },
// });

// devtools
// http://localhost:19000/debugger-ui/
