import CustomMaterial from "./CustomMaterial";
const Image = ({ imgTex, id, isActive, order }) => {
  //   const gallery = useStore((state) => state.gallery);

  //   let position = 0;
  //   let rounded = 0;

  //   let wheelSpeed = 0;
  //   useStore.subscribe(
  //     (prev, next) => {
  //       wheelSpeed = next;
  //       // console.log(s);
  //     },
  //     (state) => state.wheelSpeed
  //   );

  return (
    <group>
      <mesh>
        <planeBufferGeometry args={[1.5, 1.0, 20, 20]} />
        <CustomMaterial />
      </mesh>
    </group>
  );
};

export default Image;
