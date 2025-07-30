import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import '../styles/TubeTorusVortex.css';

// Function to generate points for a hypnotic spiral (Archimedean spiral)
const generateSpiralPoints = (turns, pointsPerTurn, radiusGrowth, zDepth) => {
  const points = [];
  for (let i = 0; i < turns * pointsPerTurn; i++) {
    const angle = (i / pointsPerTurn) * Math.PI * 2;
    const radius = (i / (turns * pointsPerTurn)) * radiusGrowth;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    const z = - (i / (turns * pointsPerTurn)) * zDepth; // Extend into depth
    points.push(new THREE.Vector3(x, y, z));
  }
  return points;
};

// Hypnotic Spiral Tunnel component that extends deeper with scroll
const HypnoticSpiral = ({ scrollY }) => {
  const groupRef = useRef();
  const turns = 200; // Many turns for "infinite" depth
  const pointsPerTurn = 5555; // Resolution
  const radiusGrowth = 144; // How much the radius grows to fill screen
  const zDepth = 5555; // Deep extension
  const spiralCount = 8; // More spiral arms for hypnotic effect

  // Memoize spiral curves
  const spirals = useMemo(() => {
    const spirals = [];
    for (let s = 0; s < spiralCount; s++) {
      const offsetPoints = generateSpiralPoints(turns, pointsPerTurn, radiusGrowth, zDepth).map(p => {
        // Add phase offset for each arm
        const angleOffset = (s / spiralCount) * Math.PI * 2;
        const x = p.x * Math.cos(angleOffset) - p.y * Math.sin(angleOffset);
        const y = p.x * Math.sin(angleOffset) + p.y * Math.cos(angleOffset);
        return new THREE.Vector3(x, y, p.z);
      });
      const curve = new THREE.CatmullRomCurve3(offsetPoints);
      spirals.push(curve);
    }
    return spirals;
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Rotate the entire spiral for hypnotic spinning effect
      groupRef.current.rotation.z += delta * 0.9; // Adjusted speed for visibility

      // Move the spiral towards the camera based on scroll for infinite depth illusion
      groupRef.current.position.z = scrollY * 0.9; // Pull spiral towards camera as scrolling
    }
  });

  return (
    <group ref={groupRef}>
      {spirals.map((curve, index) => (
        <mesh key={index}>
          <tubeGeometry args={[curve, 256, 0.5, 16, false]} /> {/* Higher resolution for smooth spiral */}
          <meshBasicMaterial
            color={index % 2 === 0 ? '#555555' : '#555555'} // Vibrant contrasting colors for visibility
            transparent={true}
            opacity={0.5}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
};

// Animated particles for added depth and hypnosis, filling the background
const SpiralParticles = ({ scrollY }) => {
  const pointsRef = useRef();
  const particleCount = 2000; // More particles for full background coverage

  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 30; // Wider spread to fill screen
      const z = (Math.random() - 0.5) * 1000; // Spread along full depth
      positions[i * 3] = radius * Math.cos(angle);
      positions[i * 3 + 1] = radius * Math.sin(angle);
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      // Rotate particles for spiral flow
      pointsRef.current.rotation.z += delta * 0.1;

      // Move particles towards camera for continuous animation
      pointsRef.current.position.z = scrollY * 0.5; // Sync with spiral movement

      // Animate individual particles with slight movement
      const posArray = pointsRef.current.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        posArray[i3 + 2] += delta * (1 + Math.sin(i * 0.01)) * 2; // Move forward, vary speed
        if (posArray[i3 + 2] > 100) { // Reset if past certain point
          posArray[i3 + 2] = -1000 - Math.random() * 500;
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#FFFFFF"
        size={0.1}
        transparent={true}
        opacity={0.5}
      />
    </points>
  );
};

const TubeTorusVortex = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="tube-torus-vortex">
      <Canvas camera={{ position: [0, 0, 0], fov: 90, far: 2000 }}> {/* Wide FOV and far clipping for depth */}
        <color attach="background" args={['#000000']} /> {/* Ensure black background */}
        <ambientLight intensity={0.5} />
        <HypnoticSpiral scrollY={scrollY} />
        <SpiralParticles scrollY={scrollY} />
      </Canvas>
    </div>
  );
};

export default TubeTorusVortex;