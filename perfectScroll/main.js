import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import { GUI } from 'dat.gui'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap'


// --- Imports
const mainCanvas = document.getElementById('bg')

// --- Values
const size = {
  width: 100,
  height: 100
}


// --- main setup
const mainScene = new THREE.Scene()
const renderer = new THREE.WebGL1Renderer({
  canvas: mainCanvas
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(size.width,size.height)
renderer.setClearColor(0x555555)

const mainCamera = new THREE.PerspectiveCamera(75,size.width/size.height,1,100)
mainCamera.position.set(0,0,10)

const mainControls = new OrbitControls(mainCamera,renderer.domElement)
mainControls.target.set(0,0,0)

renderer.render(mainScene,mainCamera)
const gui = new GUI()

// 3d objects
const cgeo = new THREE.BoxGeometry(2,2,2)
const cmat = new THREE.MeshNormalMaterial()
const cmesh = new THREE.Mesh(cgeo,cmat)

mainScene.add(cmesh)

// Helpers
const axishelp = new THREE.AxesHelper(3)
mainScene.add(axishelp)


// Animation loop
function Animate(){
  window.requestAnimationFrame(Animate)

  cmesh.rotateX(0.002)
  cmesh.rotateY(0.005)
  console.log(cmesh.position.x)
  mainControls.update()

  renderer.render(mainScene,mainCamera)
}
Animate()


// GUI
gui.add(cmesh.position,'x',-5,5,0.01).name("cube x")

// GSAP
gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".mainScroll",
    start: "top top",
    end: "100% 100%",
    markers: true,
    scrub: true
  }
})
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".mainScroll",
    start: "top top",
    end: "100% 100%",
    markers: true,
    scrub: true
  }
})
const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".mainScroll",
    start: "top top",
    end: "100% 100%",
    markers: true,
    scrub: true
  }
})

tl
.fromTo(cmesh.position,{x: 0},{x: -5})
.to(cmesh.position,{x: 5})
.to(cmesh.position,{x: 0})
tl2
.fromTo(cmesh.position,{y: 0},{y: -5})
.to(cmesh.position,{y: 5})
.to(cmesh.position,{y: 0})
tl3
.fromTo(cmesh.scale,{y: 1,x: 1,z: 1},{y: 1,x: 1,z: 1})
.to(cmesh.scale,{y: 2,x: 2,z: 2})
.to(cmesh.scale,{y: 1,x: 1,z: 1})



// On Resize 
const onResize = ()=>{
  
  size.width = window.innerWidth
  size.height = window.innerHeight
  
  mainCamera.aspect = size.width / size.height
  mainCamera.updateProjectionMatrix()
  
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(size.width,size.height)
}
window.addEventListener('resize', onResize)
onResize()

const larp = (OldMin,OldMax,NewMin,NewMax,OldValue) =>{
  let OldRange = (OldMax - OldMin)  
  let NewRange = (NewMax - NewMin)  
  let NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin
  return NewValue
}