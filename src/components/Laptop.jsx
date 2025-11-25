import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, PerspectiveCamera } from "@react-three/drei";
import { useEffect, useState } from "react";

/* ==================== DEVICE CAMERA SETTINGS ==================== */
const cameraPresets = {
  mobile:  { fov:65, position: [0, 5, 14] },
  tablet:  { fov: 70, position: [0, 5, 12] },
  laptop:  { fov: 60, position: [0, 5, 10] },
};

/* ======================= LAPTOP MODEL =========================== */
function Keyboard() {
  const rows = 6;
  const cols = 24;
  const keySize = 0.30;
  const spacing = 0.40;
  const startX = -(cols - 12) * spacing + spacing / 2;
  const startY = -(rows + 2.5) * spacing + spacing / 2;

  const keys = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      keys.push(
        <mesh key={`${r}-${c}`} position={[startX + c * spacing, -0.97, startY + r * spacing + 1.5]}>
          <boxGeometry args={[keySize, 0.07, keySize]} />
          <meshStandardMaterial color="#2b2b2b" roughness={0.4} />
        </mesh>
      );
    }
  }

  return <group>{keys}</group>;
}

function LaptopBody() {
  return (
    <group scale={1.5}>
      {/* Base */}
      <mesh position={[0, -1.1, 0]}>
        <boxGeometry args={[10, 0.15, 5]} />
        <meshStandardMaterial color="#1f1f1f" metalness={0.8} roughness={0.1} />
      </mesh>

      <Keyboard />

      {/* TouchPad */}
      <mesh position={[-1, -1, 1.5]}>
        <boxGeometry args={[2.8, 0.01, 1.3]} />
        <meshStandardMaterial color="#2b2b2b" metalness={0} roughness={0.8} />
      </mesh>

      {/* Screen */}
      <mesh position={[0, 1.3, -3.28]} rotation={[-0.35, 0, 0]}>
        <boxGeometry args={[10, 5, 0.1]} />
        <meshStandardMaterial color="#111" metalness={0.2} roughness={0.4} />
      </mesh>

      {/* Display Surface */}
      <mesh position={[0, 1.3, -3.2]} rotation={[-0.35, 0, 0]}>
        <planeGeometry args={[9.5, 4.5]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
    </group>
  );
}

/* ======================= MAIN SCENE =========================== */

export default function LaptopScene({ children }) {
  const [device, setDevice] = useState("laptop");

  useEffect(() => {
    const updateDevice = () => {
      const width = window.innerWidth;
      if (width < 640) setDevice("mobile");
      else if (width < 1024) setDevice("tablet");
      else setDevice("laptop");
    };

    updateDevice();
    window.addEventListener("resize", updateDevice);
    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  const { fov, position } = cameraPresets[device];

  return (
    <div className="relative z-0 w-full h-[60vh] sm:h-[70vh]">
      <Canvas shadows className="w-full h-[60vh]">
        {/* Camera */}
        <PerspectiveCamera makeDefault fov={fov} position={position} />

        {/* Model */}
        <LaptopBody />

        {/* Lighting */}
        <ambientLight intensity={1} />
        <directionalLight position={[5, 3, 5]} intensity={2} />
        <directionalLight position={[0, 1, 5]} intensity={2} />

        <spotLight
          position={[5, 6, 6]}
          angle={0.4}
          penumbra={0.5}
          intensity={200}
          color="#ffdd55"
          castShadow
        />

        {/* Screen Overlay */}
        <Html
          transform
          position={[-0.3, 2, -5]}
          rotation={[-0.35, 0, 0]}
          className="pointer-events-auto w-120 h-65"
        >
          <div className="bg-black/70  backdrop-blur-lg border-white/10 p-6 rounded-xl text-center">
            {children}
          </div>
        </Html>

        {/* Controls */}
        <OrbitControls
          enableZoom
          enablePan
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2.2}
          minAzimuthAngle={-Math.PI / 6}
          maxAzimuthAngle={Math.PI / 6}
        />

        {/* Instructions */}
        <Html transform position={[0, -5, 0]}>
          <p className="text-white/70 sm:text-2xl text-3xl text-center">
            🖱️ Drag to rotate • Scroll to zoom
          </p>
        </Html>
      </Canvas>
    </div>
  );
}
