import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

const CharizardModel = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <model-viewer
          src="https://sketchfab.com/models/29bae357dcb74bad8f432704e2d9f531/embed"
          alt="Charizard 3D Model"
          auto-rotate
          camera-controls
          style={{ width: '100px', height: '100px' }}
        />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default CharizardModel;
