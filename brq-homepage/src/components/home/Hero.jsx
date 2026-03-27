import "../../styles/home/Hero.scss";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function BrainModel() {
  const { scene } = useGLTF("./../../../public/models/3d-orange-brain.glb");
  return <primitive object={scene} scale={1.5} />;
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Building What Matters</h1>
          <p className="hero-subtitle">
            Transformamos desafios em inovação para impulsionar os negócios do
            futuro.
          </p>
          <div className="hero-buttons">
            <button className="btn-orange">Nossas Soluções</button>
            <button className="btn-outline">Conheça a BRQ</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-glow"></div>

          {/* Canvas 3D com o cérebro */}
          <Canvas style={{ height: 300, width: 300 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <BrainModel />
            <OrbitControls />
          </Canvas>

        </div>
      </div>
    </section>
  );
}