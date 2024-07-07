import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import Image from 'next/image';
import TypeWriter from 'typewriter-effect';

// Step 1: Create a Hexagon Component
const Hexagon = ({ position }: { position: THREE.Vector3 }) => {
  const ref = useRef(null);
  const [hovered, setHover] = useState(false);
  const points = [];

  for (let i = 0; i < 6; i++) {
    let angle = (Math.PI / 3) * i;
    let x = Math.cos(angle);
    let y = Math.sin(angle);
    points.push(new THREE.Vector2(x, y));
  }

  const shape = new THREE.Shape(points);
  const geometry = new THREE.ShapeGeometry(shape);
  const edges = new THREE.EdgesGeometry(geometry);

  return (
    <lineSegments
      position={position}
      ref={ref}
      scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <lineBasicMaterial color={hovered ? 0xffff00 : 0x000000} />
      <primitive object={edges} attach='geometry' />
    </lineSegments>
  );
};

// Step 2: Define the Hero component and fill it with hexagons
export default function Hero() {
  const hexagons = [];

  // Create a honeycomb grid
  const hexRadius = 1;
  const gridSize = 15;

  for (let q = -gridSize; q <= gridSize; q++) {
    for (let r = -gridSize; r <= gridSize; r++) {
      const x = hexRadius * 1.5 * q;
      const y = hexRadius * Math.sqrt(3) * (r + q / 2);
      const position = new THREE.Vector3(x, y, 0);
      hexagons.push(<Hexagon key={`${x}-${y}`} position={position} />);
    }
  }

  return (
    <div className='h-screen w-full relative'>
      <Image
        src='/portfolio/android-chrome-192x192.png'
        alt='Me'
        width={36}
        height={36}
        className='absolute top-0 left-0 m-8 z-10'
      />
      <p className='absolute w-half m-8  top-1/4 transform -translate-y-1/4 z-10'>
        <p className='text-4xl z-10'>
          Hi, my
          <br />
          name is <span style={{ color: 'yellow' }}>Bee.</span> I'm a <br />
          <span className='text-3xl' style={{ color: 'yellow' }}>
            <TypeWriter
              options={{
                strings: ['Full Stack Developer', 'Software Engineer', 'Web Developer', 'R Developer', 'Dog enthusiast'],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </p>
      </p>

      <Canvas
        className='absolute top-0 left-0 w-full h-full'
        camera={{ position: [0, 0, 10], fov: 75 }}
      >
        {hexagons}
      </Canvas>
    </div>
  );
}
