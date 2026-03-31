import "../../styles/home/Hero.scss";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import brainModelUrl from "../../assets/models/3d-orange-brain.glb";

function BrainModel() {
  const { scene } = useGLTF(brainModelUrl);
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.side = THREE.DoubleSide; // garante renderização frente e verso
    }
  });

  return <primitive ref={ref} object={scene} scale={5} position={[0, 0, 0]} />;
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Building What Matters</h1>
          <p className="hero-subtitle">
            Transformamos desafios em inovação para impulsionar os negócios do futuro.
          </p>
          <div className="hero-buttons">
            <button className="btn-orange">Nossas Soluções</button>
            <button className="btn-outline">Conheça a BRQ</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-glow"></div>
          <Canvas style={{ width: 400, height: 400 }} camera={{ position: [0, 0, 1000], fov: 50 }}>
            <ambientLight intensity={0.2} />
            <directionalLight position={[0, 0, 5]} intensity={1} />
            <BrainModel />
          </Canvas>
        </div>
      </div>
    </section>
  );
}