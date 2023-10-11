import * as THREE from "three";

import { scene,camera,renderer,box3D} from './componentes_Escena_I';
import { worldcolor  } from "./componentes_world";

import Stats from "three/addons/libs/stats.module.js";                            // Informacion de Consumo
import { OrbitControls } from "three/addons/controls/OrbitControls.js";           // Control de Camara - Sensilla

//------------------------------------------------------------------------------//

// PROPIEDADES
export const background = (color=worldcolor.grey) => {
    scene.background = new THREE.Color( color );    
}

//------------------------------------------------------------------------------//

// INFORMACION - [Deben actualizarse en Animate()]
export const stats = new Stats();
box3D.appendChild(stats.dom);

export const controls = new OrbitControls(camera, renderer.domElement);
controls.enablePan = false;   // Desplazar X,Y de Camara
controls.enableDamping = true;// Suavizar Movimiento
//  controls.target.set(0, 0.5, 0);  // POsicion de Inicio
//  controls.autoRotate = true;

//------------------------------------------------------------------------------//
  
// AUTOAJUSTAR - [No requiere ser importado]
  
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize);