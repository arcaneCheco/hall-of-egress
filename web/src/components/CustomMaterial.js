import { v1, v2, v3, v4 } from "../shader/vertex";
import { fImg, fDesc, f2, f3 } from "../shader/fragment";
import { DoubleSide, Color } from "three";
import { useMemo } from "react";
import useStore from "../store";

const CustomMaterial = ({ imgTex, order, vertexShader, fragmentShader }) => {
  const data = useMemo(
    () => ({
      uniforms: {
        tex: { value: imgTex },
        time: { value: 0 },
        distanceFromCenter: { value: 0 },
        order: { value: order },
        hasTexture: { value: 0 },
        scale: { value: 0 },
        shift: { value: order },
        opacity: { value: 1 },
        color: { value: new Color("orange") },
        pos: { value: 0 },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      // wireframe: true,
      side: DoubleSide,
    }),
    []
  );
  return <shaderMaterial attach="material" {...data} />;
};

export default CustomMaterial;
