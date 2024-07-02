import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const TextureMesh = () => {
  const mesh = useRef(null);

  useFrame(state => {
    const { clock, mouse, gl } = state;
    if (mesh.current) {
      mesh.current.material.uniforms.u_mouse.value = [mouse.x / 2 + 0.5, mouse.y / 2 + 0.5];
      mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
      let c = gl.domElement.getBoundingClientRect();
      mesh.current.material.uniforms.u_resolution.value = [c.width, c.height];
    }
  });

  const material = useMemo(() => new THREE.ShaderMaterial({
    fragmentShader: `
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      void main() {
        vec2 st = gl_FragCoord.xy / u_resolution.xy;
        gl_FragColor = vec4(st.x, st.y, abs(sin(u_time)), 1.0);
      }
    `,
    vertexShader: `
      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    uniforms: {
      u_time: { value: 0.0 },
      u_resolution: { value: new THREE.Vector2() },
      u_mouse: { value: new THREE.Vector2() },
    },
  }), []);

  return (
    <mesh ref={mesh} position={[0, 0, 0]} scale={50} rotation={[0, 0, 0]} material={material}>
      <planeGeometry args={[1, 1, 1024, 1024]} />
    </mesh>
  );
};

const TextureMeshComponent = () => {
  return (
    <div className="nt-embed" style={{ height: '100vh', width: '100vw' }}>
      <Canvas
        gl={{
          preserveDrawingBuffer: true,
          premultipliedAlpha: false,
          alpha: true,
          antialias: true,
          precision: 'highp',
          powerPreference: 'high-performance',
        }}
        resize={{ debounce: 0, scroll: false, offsetSize: true }}
        dpr={1}
        camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 2] }}
      >
        <TextureMesh />
      </Canvas>
    </div>
  );
};

export default TextureMeshComponent;
