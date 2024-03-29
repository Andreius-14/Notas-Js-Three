import * as THREE from "three";

// Basico 
import {scene,camera,renderer,box3D} from '../components/componentes_Escena_I.js'
import {stats,controls,background} from '../components/componentes_Escena_II.js'

// import { OrbitControls } from "three/addons/controls/OrbitControls.js"; // cuando se aplica la camara siempre apuntara a 0,0,0
// Campos - Instancias
// let camera, scene, renderer; //Si solo fuera esta linea y no 3 seria bueno
// let controls;
let mesh;

init();
animate();

// Funciones
function init() {

  // Instancia e Propiedades
  // scene = new THREE.Scene();
  // camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000,);
  // renderer = new THREE.WebGLRenderer({ antialias: true });

  camera.position.z = 2;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // GEOMETRIA NUEVA - CUBO [Inicio]
  const texture = new THREE.TextureLoader().load("./assets/lado.gif");
  texture.colorSpace = THREE.SRGBColorSpace;

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ map: texture });     
  //({ color: 0x44aa88 }) ({ map: texture })
 
  mesh = new THREE.Mesh(geometry, material);



  // GEOMETRIA NUEVA - CUBO [Final]


  // controls = new OrbitControls(camera, renderer.domElement);
  // // controls.target.set(0, 0.5, 0);
  // controls.enablePan = false;   // Desplazar X,Y de Camara
  // controls.enableDamping = true;
  // controls.autoRotate = true;
  // controls.update(); 

  
  scene.add(mesh);
  // INSERCION
  // document.body.appendChild(renderer.domElement);

}


function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.01;

  stats.update();
  controls.update(); 
  // INSERCION 
  renderer.render(scene, camera);
}

// 🌱 La funcion animate es Especial - Se ejecuta de Manera Continua FPS

