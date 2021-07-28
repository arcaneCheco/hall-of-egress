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

class SphereMesh extends Mesh {
  constructor() {
    super(
      new SphereGeometry(0, 50, 20, 0, Math.PI * 2, 0, Math.PI * 2),
      new MeshStandardMaterial({
        color: 0xff0000,
      })
    );
  }
}

const App = () => {
  let cameraInitialPositionX = 0;
  let cameraInitialPositionY = 2;
  let cameraInitialPositionZ = 5;

  const sphere = new SphereMesh();

  const onContextCreate = async (gl) => {
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

    camera.lookAt(sphere.position);

    const renderer = new Renderer({ gl });
    renderer.setSize(width, height);

    const ambientLight = new AmbientLight({ color: 0x101010, intensity: 0.5 });
    scene.add(ambientLight);

    const geometry = new BoxBufferGeometry(1, 1, 1);
    const material = new MeshStandardMaterial({
      color: "blue",
    });
    const cube = new Mesh(geometry, material);

    scene.add(cube);

    const render = () => {
      requestAnimationFrame(render);
      cube.rotation.y += 0.05;
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };

    render();
  };

  return (
    <View style={{ flex: 1 }}>
      <GLView onContextCreate={onContextCreate} style={{ flex: 1 }}>
        <View>
          <TouchableWithoutFeedback onPressIn={() => console.log("UP")}>
            <Text style={styles.text}>UP</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPressIn={() => console.log("down")}>
            <Text style={styles.text}>DOWN</Text>
          </TouchableWithoutFeedback>
        </View>
      </GLView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    zIndex: 100,
  },
});
