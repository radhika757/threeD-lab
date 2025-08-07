
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const ScrollingEffects = () => {
  
  return (
    <Canvas>
        
        {/* Mesh is a fundamental building block for rendering any 3D object */}
     <mesh> 
        {/* A mesh needs a geometry ie a shape */}
        <boxGeometry args={[4, 4, 4]} />
        <meshStandardMaterial color="orange" />
     </mesh>
    </Canvas>
  )
}

export default ScrollingEffects
