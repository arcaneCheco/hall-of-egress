const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight intensity={1} position={[0, 0, 0]} />
    </>
  );
};

export default Lights;
