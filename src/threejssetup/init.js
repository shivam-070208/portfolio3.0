import * as THREE from 'three';
import { DRACOLoader, GLTFLoader } from 'three/examples/jsm/Addons.js';


export function init({ elm }) {
    this.THREE = THREE
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    this.renderer = new THREE.WebGLRenderer({ canvas: elm, antialias: true,alpha:true});
   
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.gltfloader = new GLTFLoader;
    this.dracoloader = new DRACOLoader();
    this.pointlight = new THREE.PointLight('white',50.0)
   
    this.ambientlight = new THREE.AmbientLight('white',2)
   
   
  


    this.resize = () => {
        this.camera.aspect = window.innerWidth/ window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.render(this.scene,this.camera)
    }

}
