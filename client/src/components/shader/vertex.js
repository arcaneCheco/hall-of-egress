const vImg = `
varying vec2 vUv;
uniform float order;
uniform float distanceFromCenter;
float PI = 3.141592653589793238;
void main() {
  vUv = (uv - vec2(0.5)) * (0.8 - 0.2 * distanceFromCenter * (2. - distanceFromCenter)) + vec2(0.5);

  vec3 pos = position;

  // create bend;

  pos.y += sin(PI*uv.x)*0.05;
  pos.z += sin(PI*uv.x)*0.05;
  // pos.x -= sin(PI*uv.y)*0.015;

  // pos.y += 1.2*order; // offset;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
}`;
const vDesc = `
varying vec2 vUv;
uniform float order;
uniform float distanceFromCenter;
float PI = 3.141592653589793238;
void main() {
  vUv = (uv - vec2(0.5)) * (0.8 - 0.2 * distanceFromCenter * (2. - distanceFromCenter)) + vec2(0.5);

  vec3 pos = position;


  // create bend;

  // pos.y += sin(PI*uv.x)*0.05;
  // pos.z += sin(PI*uv.x)*0.05;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
}`;

export { vImg, vDesc };
