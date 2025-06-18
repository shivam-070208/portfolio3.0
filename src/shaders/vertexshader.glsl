// Vertex shader with skinning support for Three.js (no #include)

attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;

#ifdef USE_SKINNING
attribute vec4 skinIndex;
attribute vec4 skinWeight;
uniform mat4 bindMatrix;
uniform mat4 bindMatrixInverse;
uniform mat4 boneMatrices[ MAX_BONES ];
#endif

varying vec2 vUv;

void main() {
    vUv = uv;
    vec3 transformed = position;
    vec3 objectNormal = normal;

    #ifdef USE_SKINNING
    mat4 skinMatrix = skinWeight.x * boneMatrices[int(skinIndex.x)];
    skinMatrix    += skinWeight.y * boneMatrices[int(skinIndex.y)];
    skinMatrix    += skinWeight.z * boneMatrices[int(skinIndex.z)];
    skinMatrix    += skinWeight.w * boneMatrices[int(skinIndex.w)];
    skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;
    transformed = ( skinMatrix * vec4( transformed, 1.0 ) ).xyz;
    #endif

    gl_Position = projectionMatrix * modelViewMatrix * vec4( transformed, 1.0 );
}
