import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import { GUI } from 'dat.gui'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap'

const doubleLarp = (OldMin,OldMax,NewMin,NewMax,OldValue) =>{
  let OldRange = (OldMax - OldMin)  
  let NewRange = (NewMax - NewMin)  
  let NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin
  return NewValue
}

// --- Imports
const mainCanvas = document.getElementById('bg')
// --- Values
const size = {
  width: window.innerWidth,
  height: window.innerHeight,
}

const threeRange = {
  minWidth: 3,
  maxWidth: 15,
  minHeight: 8,
  maxHeight: 8
}
const webRange = {
  minWidth: 400,
  maxWidth: 1920,
  minHeight: 800,
  maxHeight: 1080
}
const range3 = {
  x: doubleLarp(
    webRange.minWidth
    ,webRange.maxWidth
    ,threeRange.minWidth
    ,threeRange.maxWidth
    ,size.width
  ),
  y: doubleLarp(
    webRange.minHeight
    ,webRange.maxHeight
    ,threeRange.minHeight
    ,threeRange.maxHeight
    ,size.height
  ),
}
// larp from min-max screen the range in 
// wich the object will move

// create custom range variable



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
  
  mainControls.update()

  renderer.render(mainScene,mainCamera)
}
Animate()


// GUI
gui.add(cmesh.position,'x',-15,15,0.01).name("cube x")
gui.add(cmesh.position,'y',-10,10,0.01).name("cube y")

// GSAP
gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".mainScroll",
    start: "top top",
    end: "100% 100%",
    scrub: true
  }
})
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".mainScroll",
    start: "top top",
    end: "100% 100%",
    scrub: true
  }
})
const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".mainScroll",
    start: "top top",
    end: "100% 100%",
    scrub: true
  }
})

tl
.fromTo(cmesh.position,{x: 0},{x: range3.x})
.to(cmesh.position,{x: -range3.x})
.to(cmesh.position,{x: 0})
tl2
.fromTo(cmesh.position,{y: 0},{y: range3.y})
.to(cmesh.position,{y: -range3.y})
.to(cmesh.position,{y: 0})
// tl3
// .fromTo(cmesh.scale,{y: 2,x: 2,z: 2},{y: 1,x: 1,z: 1})
// .to(cmesh.scale,{y: 4,x: 4,z: 4})
// .to(cmesh.scale,{y: 1,x: 1,z: 1})


// On Resize 
const onResize = ()=>{
  
  size.width = window.innerWidth
  size.height = window.innerHeight

  range3.x = doubleLarp(
    webRange.minWidth
    ,webRange.maxWidth
    ,threeRange.minWidth
    ,threeRange.maxWidth
    ,size.width
  )
  range3.y = doubleLarp(
    webRange.minHeight
    ,webRange.maxHeight
    ,threeRange.minHeight
    ,threeRange.maxHeight
    ,size.height
  )
  console.log(range3.x)
  
  mainCamera.aspect = size.width / size.height
  mainCamera.updateProjectionMatrix()
  
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(size.width,size.height)
}
window.addEventListener('resize', onResize)
onResize()