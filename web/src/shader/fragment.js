const f1 = `
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
}`;
const f2 = `
  uniform sampler2D tex;
  varying vec2 vUv;
  void main() {
  vec4 t = texture2D(tex, vUv);
  gl_FragColor = t;
}`;

export { f1, f2 };
