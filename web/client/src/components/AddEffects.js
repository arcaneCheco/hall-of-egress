// import { Vector2 } from "three";
import React from "react";
import { extend } from "@react-three/fiber";
import { Effects } from "@react-three/drei";
import { WaterPass } from "./shader/WaterPass";

extend({
  WaterPass,
});

const AddEffects = () => {
  // const aspect = useMemo(() => new Vector2(512, 512), []);
  return (
    <Effects
      multisamping={8} // Default, uses WebGL2 multisamping if available
      renderIndex={1} // Default
      disableGamma={false} // Default, would switch off the gamma-correction-pass
      disableRenderPass={false} // Default, would remove the first scene-render-pass
    >
      <waterPass attachArray="passes" factor={0.2} />
    </Effects>
  );
};

export default AddEffects;
