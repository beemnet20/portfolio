import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

// Step 1: Create a Hexagon Component
const Hexagon = ({ position }: { position: THREE.Vector3 }) => {
  const ref = useRef(null);
  const [hovered, setHover] = useState(false);
  const points = [];
  for (let i = 0; i < 6; i++) {
    let angle = (Math.PI / 3) * i;
    let x = Math.cos(angle) * 1; // Radius of 1
    let y = Math.sin(angle) * 1;
    points.push(new THREE.Vector2(x, y));
  }
  const shape = new THREE.Shape(points);
  return (
    <mesh
      position={position}
      ref={ref}
      scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <shapeGeometry args={[shape]} />
      <meshBasicMaterial visible={hovered} color={0xffff00} />
    </mesh>
  );
};

// Step 2: Define the Hero component and fill it with hexagons
export default function Hero() {
  const hexagons = [];

  // Create a honeycomb grid
  const hexRadius = 1;
  const gridSize = 10;

  for (let q = -gridSize; q <= gridSize; q++) {
    for (let r = -gridSize; r <= gridSize; r++) {
      const x = hexRadius * 1.5 * q;
      const y = hexRadius * Math.sqrt(3) * (r + q / 2);
      const position = new THREE.Vector3(x, y, 0);
      hexagons.push(<Hexagon key={`${x}-${y}`} position={position}/>);
    }
  }

  return (
    <div className='h-screen w-full'>
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        {hexagons}
      </Canvas>
    </div>
  );
}

