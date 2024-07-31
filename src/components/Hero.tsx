import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import TypeWriter from 'typewriter-effect';
import BeeCursor from './BeeCursor';

// Step 1: Create a Hexagon Component
const Hexagon = ({ position }: { position: THREE.Vector3 }) => {
  const ref = useRef(null);
  const [hovered, setHover] = useState(false);
  const points: THREE.Vector2[] = [];

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
      onPointerEnter={() => {
        setHover(true);
      }}
      onPointerOut={() => setHover(false)}
    >
      <lineBasicMaterial color={hovered ? 0xfef08a : 0x000000} />
      <primitive object={edges} attach='geometry' />
    </lineSegments>
  );
};

// Step 2: Define the Hero component and fill it with hexagons
export default function Hero() {
  const [showBeeCursor, setShowBeeCursor] = useState(false);
  const handleShowBeeCursor = () => {
    setShowBeeCursor(true);
  };
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    document.addEventListener('mousemove', handleShowBeeCursor);
  }, []);

  // Create a honeycomb grid
  const hexRadius = 1;
  const gridSize = 15;
  const gap = 0.25;

  const hexagons = [];

  // Calculate hexagon dimensions
  const hexWidth = 2 * hexRadius; // Width of the hexagon
  const hexHeight = Math.sqrt(3) * hexRadius; // Height of the hexagon

  // Calculate the distances between hexagon centers
  const xOffset = hexWidth * 0.75 + gap; // Horizontal distance between hexagon centers
  const yOffset = hexHeight + gap; // Vertical distance between hexagon centers

  for (let q = -gridSize; q <= gridSize; q++) {
    for (let r = -gridSize; r <= gridSize; r++) {
      // Calculate hexagon center position
      const x = q * xOffset;
      const y = (r + q / 2) * yOffset;

      const position = new THREE.Vector3(x, y, 0);
      hexagons.push(<Hexagon key={`${x}-${y}`} position={position} />);
    }
  }
  return (
    <div id='home' className='h-screen w-full relative'>
      {showBeeCursor && <BeeCursor />}
      <div className='absolute sm:w-half m-8  top-1/4 transform -translate-y-1/4 z-10'>
        <div
          className='text-4xl z-10'
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.1s ease-in-out',
          }}
        >
          Hi,
          <br />
          my name is <span style={{ color: '#fde047' }}>Bee.</span>
          <br />
          <div className='text-3xl inline'>
            I&apos;m a{' '}
            <div style={{ color: '#fde047' }} className='inline-block '>
              <TypeWriter
                options={{
                  strings: [
                    'full stack developer',
                    'software engineer',
                    'creative developer',
                    'tinkerer',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
        <br />
        <a
          className='btn bg-yellow-500 hover:bg-yellow-700 rounded-full text-black font-bold py-2 px-4 cursor-pointer'
          href='/portfolio/contact'
        >
         <span style={{textDecoration: "line-through"}}>Buzz</span>{' '}Contact me
        </a>
      </div>

      <Canvas
        className='absolute top-0 left-0 w-full h-full'
        camera={{ position: [0, 0, 10], fov: 50 }}
      >
        {hexagons}
      </Canvas>
    </div>
  );
}
