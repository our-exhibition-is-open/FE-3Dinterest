import * as THREE from 'three'
import { useRef, useReducer, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, MeshTransmissionMaterial, Environment, Lightformer } from '@react-three/drei'
import { CuboidCollider, BallCollider, Physics, RigidBody } from '@react-three/rapier'
import { EffectComposer, N8AO } from '@react-three/postprocessing'
import { easing } from 'maath'


function BackGround(props) {
    const [accent, click] = useReducer((state) => ++state % accents.length, 0)
    const connectors = useMemo(() => shuffle(accent), [accent])
    return (
      <Canvas onClick={click} shadows dpr={[1, 1.5]} gl={{ antialias: false }} camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }} {...props}>
        <color attach="background" args={['#141622']} />
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Physics /*debug*/ gravity={[0, 0, 0]}>
          <Pointer />
          {connectors.map((props, i) => <Connector key={i} {...props} />) /* prettier-ignore */}
          <Connector position={[10, 10, 5]}>
            <Model>
              <MeshTransmissionMaterial clearcoat={1} thickness={0.1} anisotropicBlur={0.1} chromaticAberration={0.1} samples={8} resolution={512} />
            </Model>
          </Connector>
        </Physics>
        <EffectComposer disableNormalPass multisampling={8}>
          <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
        </EffectComposer>
        <Environment resolution={256}>
          <group rotation={[-Math.PI / 3, 0, 1]}>
            <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
            <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
            <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
            <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
          </group>
        </Environment>
      </Canvas>
    )
  }
  
  function Connector({ position, children, vec = new THREE.Vector3(), scale, r = THREE.MathUtils.randFloatSpread, accent, ...props }) {
    const api = useRef()
    const pos = useMemo(() => position || [r(10), r(10), r(10)], [])
    useFrame((state, delta) => {
      delta = Math.min(0.1, delta)
      api.current?.applyImpulse(vec.copy(api.current.translation()).negate().multiplyScalar(0.2))
    })
    return (
      <RigidBody linearDamping={4} angularDamping={1} friction={0.1} position={pos} ref={api} colliders={false}>
        <CuboidCollider args={[0.38, 1.27, 0.38]} />
        <CuboidCollider args={[1.27, 0.38, 0.38]} />
        <CuboidCollider args={[0.38, 0.38, 1.27]} />
        {children ? children : <Model {...props} />}
        {accent && <pointLight intensity={4} distance={2.5} color={props.color} />}
      </RigidBody>
    )
  }