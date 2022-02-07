import React, { useEffect } from "react";
import * as THREE from "three";

const SmallTown = () => {
  // It looks like memory is being leaked: opening a page with this would increase memory usuage, 
  //    but closing a page with this doesn't decrease memory usage.
  //    if I open the page with this again, memory usuage increases
  // The 3D thing: start with home (family) → town → country → world
  //   or just make it like a movie theater
  useEffect(() => {
    // Canvas
    const canvas = document.querySelector("canvas#Home-3d-background");

    // Scene
    const scene = new THREE.Scene();

    // Objects
    const geometry = new THREE.SphereGeometry(3, 7, 5);

    // Materials
    const materialGreen = new THREE.MeshStandardMaterial();
    // material.color = new THREE.Color(0xec5f59);
    materialGreen.color = new THREE.Color(0x69f0ae);
    materialGreen.metalness = 0.1;
    materialGreen.roughness = 0.5;

    const materialGhostWhite = new THREE.MeshStandardMaterial();
    materialGhostWhite.color = new THREE.Color(0xf8f8ff);
    materialGhostWhite.metalness = 0.1;
    materialGhostWhite.roughness = 0.5;

    const materialRed = new THREE.MeshStandardMaterial();
    materialRed.color = new THREE.Color(0xec5f59);
    materialRed.metalness = 0.1;
    materialRed.roughness = 0.5;

    // Mesh
    const sphere = new THREE.Mesh(geometry, materialGreen);
    // scene.add(sphere);

    const geometry1 = new THREE.BoxGeometry(10, 10, 0.75);
    geometry1.rotateY(Math.PI / 4 + Math.PI / 10);
    const backPlate1 = new THREE.Mesh(geometry1, materialRed);
    backPlate1.position.x = -3;
    scene.add(backPlate1);

    const geometry2 = new THREE.BoxGeometry(10, 10, 0.75);
    geometry2.rotateY(-Math.PI / 4 + Math.PI / 10);
    const backPlate2 = new THREE.Mesh(geometry2, materialGhostWhite);
    backPlate2.position.x = 3.5;
    backPlate2.position.z = -1.5;
    scene.add(backPlate2);

    const geometry3 = new THREE.BoxGeometry(12, 10, 0.75);
    geometry3.rotateX(Math.PI / 2);
    geometry3.rotateY(Math.PI / 4 + Math.PI / 10);
    const backPlate3 = new THREE.Mesh(geometry3, materialGhostWhite);
    backPlate3.position.x = 1.05;
    backPlate3.position.y = -4.5;
    backPlate3.position.z = 2.2;
    backPlate3.castShadow = true;
    scene.add(backPlate3);

    const geometry4 = new THREE.BoxGeometry(100, 100, 0.75);
    geometry4.rotateX(Math.PI / 2);
    const floor = new THREE.Mesh(geometry4, materialGhostWhite);
    floor.position.y = -7;
    floor.receiveShadow = true;
    scene.add(floor);

    //Texts

    // Lights
    const ambientLight = new THREE.AmbientLight(0xb06060);
    scene.add(ambientLight);

    // const pointLight = new THREE.PointLight(0xffffff, 0.7);
    // pointLight.position.x = 10;
    // pointLight.position.y = 10;
    // pointLight.position.z = 20;
    // scene.add(pointLight);

    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(25, 25, 35);
    spotLight.castShadow = true;

    scene.add(spotLight);

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 20;
    scene.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0xf8f8ff, 1);

    // // Controls
    // const controls = new OrbitControls(camera, renderer.domElement);
    // // controls.enableDamping = true
    // controls.enableZoom = false;
    // controls.enableRotate = true;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Update size-related variables
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
    });

    // Animate by mouse's movement
    document.addEventListener("mousemove", onDocumentMouseMove);
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    // Render
    renderer.render(scene, camera);

    function onDocumentMouseMove(event) {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
      targetX = mouseX * 0.00015;
      targetY = mouseY * 0.0005;
      //   Update objects
      sphere.rotation.y += 0.5 * (targetX - sphere.rotation.y);
      sphere.rotation.x += 0.5 * (targetY - sphere.rotation.x);
      camera.position.x = targetX * 2;
      camera.position.y = -targetY * 2;

      // Render
      renderer.render(scene, camera);
    }

    // Animate
    const clock = new THREE.Clock();
    const animate = () => {
      targetX = mouseX * 0.00015;
      targetY = mouseY * 0.0005;

      const elapsedTime = clock.getElapsedTime();

      // Object Animation
      sphere.rotation.y = 0.5 * elapsedTime;

      // Mouse Effect
      sphere.rotation.y += 0.5 * (targetX - sphere.rotation.y);
      sphere.rotation.x += 0.5 * (targetY - sphere.rotation.x);

      // // Update Orbital Controls
      // controls.update();

      // Render
      renderer.render(scene, camera);

      // Call spin again on the next frame
      requestAnimationFrame(animate);
    };

    animate();
  });

  return <canvas className="slide webgl" id="Home-3d-background"></canvas>;
};

export default SmallTown;
