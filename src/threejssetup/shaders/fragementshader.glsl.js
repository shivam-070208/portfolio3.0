export default /* glsl */`
varying vec2 vUv;
uniform sampler2D uTexture;
uniform sampler2D uNoise;

void main() {
    vec4 color = texture2D(uTexture, smoothstep(0.0,1.0,vUv));
    vec4 noise = texture2D(uNoise, vUv);
    gl_FragColor = color;
}
`;