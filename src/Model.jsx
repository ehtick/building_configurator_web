import React from 'react'
import {useGLTF} from '@react-three/drei'
import {MeshLambertMaterial} from 'three';

export function Model(props) {
    const {nodes, materials} = useGLTF('/objects/Window.glb')
    const lambertMaterial = new MeshLambertMaterial({color: 0xffffff});

    function selectMesh() {
        let selectedMesh = nodes.Window_0.geometry;

        if (props.name === 'Corner') {
            selectedMesh = nodes.Corner.geometry;
        } else if (props.name === 'null') {
            selectedMesh = nodes.Null.geometry;
        } else if (props.name === 'Ceiling') {
            selectedMesh = nodes.Ceiling.geometry;
        } else if (props.name === 'Ceiling_corner') {
            selectedMesh = nodes.Ceiling_corner.geometry;
        } else if (props.name === 'Ceiling_cap') {
            selectedMesh = nodes.Ceiling_cap.geometry;
        } else {
            if (props.name === 'Window_0') {
                selectedMesh = nodes.Window_0.geometry;
            } else if (props.name === 'Window_1') {
                selectedMesh = nodes.Window_1.geometry;
            } else if (props.name === 'Window_2') {
                selectedMesh = nodes.Window_2.geometry;
            }
        }
        return (selectedMesh)
    }

    return (
        // dispose={null}
        <group {...props}   >
            <mesh receiveShadow castShadow
                  geometry={selectMesh()}
                // material={nodes.Window_0.material}
                  material={lambertMaterial}
            />
        </group>
    )
}

useGLTF.preload('/objects/Window.glb')
