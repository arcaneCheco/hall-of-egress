const v1 = `
uniform float time;
varying vec2 vUv;
float PI = 3.141592653589793238;
uniform float distanceFromCenter;
void main() {
  vUv = (uv - vec2(0.5)) * (0.8 - 0.2 * distanceFromCenter * (2. - distanceFromCenter)) + vec2(0.5);
  vec3 pos = position;

  pos.y += sin(PI*uv.x)*0.05;
  pos.z += sin(PI*uv.x)*0.05;

  pos.y += sin(time*0.3)*0.02;
  vUv.y -= sin(time*0.3)*0.02;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
}`;
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
uniform float pos;
void main() {
  vUv = (uv - vec2(0.5)) * (0.8 - 0.2 * distanceFromCenter * (2. - distanceFromCenter)) + vec2(0.5);

  vec3 pos = position;

  // pos.x += 1.2*pos;

  // create bend;

  pos.y += sin(PI*uv.x)*0.05;
  pos.z += sin(PI*uv.x)*0.05;
  // pos.x -= sin(PI*uv.y)*0.015;

  // pos.y += pos*uv.x;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
}`;
const v3 = `
varying vec2 vUv;
uniform float order;
void main() {
  vUv = uv;
  vec3 pos = position;
  pos.y += 1.2*order;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
}`;
const v4 = `
uniform float scale;
uniform float shift;
uniform float order;
varying vec2 vUv;
void main() {
  vec3 pos = position;
  // pos.x = pos.x + ((sin(uv.y * 3.1415926535897932384626433832795) * shift * 2.0) * 0.125);
  pos.y += 1.3 * order;
  // pos.z += 1.3 * order + 5;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
}`;

export { v1, vImg, vDesc };
