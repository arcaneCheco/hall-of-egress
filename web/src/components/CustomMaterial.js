import { v1, v2 } from "../shader/vertex";
import { f1, f2 } from "../shader/fragment";
import { DoubleSide } from "three";
import { useMemo } from "react";
import useStore from "../store";

const CustomMaterial = ({ imgTex, order }) => {
  const data = useMemo(
    () => ({
      uniforms: {
        tex: { value: imgTex },
        time: { value: 0 },
        distanceFromCenter: { value: 0 },
        order: { value: order },
      },
      vertexShader: v2,
      fragmentShader: f2,
      transparent: true,
      side: DoubleSide,
    }),
    []
  );
  return <shaderMaterial attach="material" {...data} />;
};

export default CustomMaterial;
