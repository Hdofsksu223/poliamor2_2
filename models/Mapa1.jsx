/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 mapa1.glb --transform 
Files: mapa1.glb [30.9MB] > C:\Users\ignac\Escritorio\Trabajos\poliamor2_2\models\mapa1-transformed.glb [2.27MB] (93%)
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/mapa1-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.003']} position={[-499.413, -118.077, -1.786]} scale={[28.03, 42.361, 2.252]} />
      <mesh geometry={nodes.Cube005.geometry} material={nodes.Cube005.material} position={[-473.417, -117.097, -106.865]} rotation={[-Math.PI, 1.53, -Math.PI]} scale={[110.018, 42.361, 2.28]} />
      <mesh geometry={nodes.Cone.geometry} material={materials['Material.005']} position={[-529.543, 126.607, -142.966]} rotation={[-2.353, 0, 0]} scale={59.191} />
      <mesh geometry={nodes.Cone001.geometry} material={materials['Material.006']} position={[-529.543, 126.607, -142.966]} rotation={[-2.353, 0, 0]} scale={59.191} />
      <mesh geometry={nodes.images.geometry} material={materials.images} position={[-4605.154, -75.632, 513.737]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={8765.638} />
      <mesh geometry={nodes.Sphere.geometry} material={materials['Material.010']} position={[-496.096, -147.535, -352.478]} scale={257.847} />
      <mesh geometry={nodes.Cone002.geometry} material={materials['Material.008']} position={[638.087, 636.883, -1390.803]} scale={1232.402} />
      <mesh geometry={nodes.Sphere001.geometry} material={materials['Material.001']} position={[963.942, -20.073, -78.778]} scale={90.103} />
      <mesh geometry={nodes.Plane001.geometry} material={materials['Material.007']} position={[2352.23, 138.272, 358.332]} rotation={[0, 0, 1.605]} scale={[314.438, 123.494, 123.101]} />
      <mesh geometry={nodes.Cylinder002.geometry} material={materials['Material.009']} position={[675.572, 356.65, -1365.245]} scale={[718.533, 173.368, 685.537]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials['Material.002']} position={[910.902, -215.615, 185.265]} scale={[2272.778, 35.306, 705.887]} />
      <mesh geometry={nodes.New_Project.geometry} material={materials['New Project']} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
      <mesh geometry={nodes.Sphere003.geometry} material={materials['Material.011']} position={[4083.94, 2144.061, 1642.497]} scale={107.111} />
    </group>
  )
}

useGLTF.preload('/mapa1-transformed.glb')
