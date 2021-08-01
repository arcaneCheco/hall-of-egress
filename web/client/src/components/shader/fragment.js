const fImg = `
  uniform sampler2D tex;
  varying vec2 vUv;
  uniform float distanceFromCenter;
  void main() {
    // float updatedDis = mod(distanceFromCenter, 5.);
    // float updatedDis = mod(distanceFromCenter, 5.);
    vec4 t = texture2D(tex, vUv);
    float blackwhite = (t.r + t.b + t.g) /3.;
    vec4 another = vec4(blackwhite, blackwhite, blackwhite, 1.);
    gl_FragColor = mix(another, t, distanceFromCenter);
    gl_FragColor.a = clamp(distanceFromCenter, 0.5, 1.); 
    // gl_FragColor.a = 0.; 
}`;
const fDesc = `
  uniform sampler2D tex;
  varying vec2 vUv;
  uniform float distanceFromCenter;
  uniform vec3 color;
  uniform float opacity;
  // uniform float pos;
  void main() {
    // float updatedDis = mod(distanceFromCenter, 5.);
    // float updatedDis = mod(distanceFromCenter, 5.);
    vec4 t = texture2D(tex, vUv);
    float blackwhite = (t.r + t.b + t.g) /3.;
    vec4 another = vec4(blackwhite, blackwhite, blackwhite, 1.);
    gl_FragColor = vec4(color, opacity);
    // gl_FragColor = vec4(0.,0.,0.,0.);
    gl_FragColor.a = distanceFromCenter;
    // gl_FragColor = mix(another, t, distanceFromCenter);
    // gl_FragColor = vec4(color, opacity);
    // gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    // gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}`;
const f3 = `
uniform sampler2D tex;
uniform float hasTexture;
uniform float shift;
uniform float scale;
uniform vec3 color;
uniform float opacity;
varying vec2 vUv;
void main() {
  float angle = 0.0;
  vec2 p = (vUv - vec2(0.5, 0.5)) * (1.0 - scale) + vec2(0.5, 0.5);
  vec2 offset = 0.0 * vec2(cos(angle), sin(angle));
  vec4 cr = texture2D(tex, p + offset);
  vec4 cga = texture2D(tex, p);
  vec4 cb = texture2D(tex, p - offset);
  if (hasTexture == 1.0) gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);
  else gl_FragColor = vec4(color, opacity);
}`;

export { fImg, fDesc };
