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

export { fImg, fDesc };
