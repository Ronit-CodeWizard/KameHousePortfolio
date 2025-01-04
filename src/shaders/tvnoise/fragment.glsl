uniform float uTime;
uniform float uProgress;

varying vec2 vUv;

float noise(vec2 pos, float evolve) {

    float e = fract(evolve * 0.01);
    vec2 coord = pos * e;
    
    float n = fract(sin(dot(coord, vec2(12.0, 78.0))) * 43758.0);

    return n * uProgress;
}

void main() {

    float n = noise(vUv, uTime);
    n = step(0.5, n); 

    vec3 color = vec3(n) * 0.7;  

    gl_FragColor = vec4(color, 1.0);
}
