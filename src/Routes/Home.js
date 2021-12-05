import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import * as dat from "dat.gui";

const Home = () => {
  //structure
  //  1. Projects
  //  1-1. Personal Projects
  //      Closquare: Moving a whole "Table" into a mobile device
  //          Used Flutter and Firebase
  //          --> Failed
  //      Atrable - 1: Sharing projects with others
  //          --> Failed
  //      Atrable - 2:
  //      Atrable: Audio based Social Media
  //  1-2. School Projects
  //      I-Research: About the relationship between the pandemic and depression (Mar - Apr, 2021)
  //      Karooni: Book Reading (To Kill a Mockingbird) (Apr - May, 2021)
  //  2. Diaries

  useEffect(() => {
    // Canvas
    const canvas = document.querySelector("canvas.webgl");

    // Scene
    const scene = new THREE.Scene();

    // Objects
    // const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
    const geometry = new THREE.BoxGeometry(0.7, 1, 1);

    // Materials
    const material = new THREE.MeshBasicMaterial();
    material.color = new THREE.Color(0xec5f59);
    // material.metalness = 0.7;
    // material.roughness = 0.1;

    // Mesh
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Lights
    const pointLight = new THREE.PointLight(0xffffff, 0.2);
    pointLight.position.x = 2;
    pointLight.position.y = 0;
    pointLight.position.z = 10;
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xffffff, 0.5);
    pointLight2.position.x = -2;
    scene.add(pointLight2);

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

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
    });

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 2;
    scene.add(camera);

    // Controls
    // const controls = new OrbitControls(camera, canvas)
    // controls.enableDamping = true

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0xffffff, 1);

    // Animate
    document.addEventListener("mousemove", onDocumentMouseMove);
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    function onDocumentMouseMove(event) {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    }

    const clock = new THREE.Clock();

    const spin = () => {
      //   targetX = mouseX * 0.0001;
      targetY = mouseY * 0.0005;

      const elapsedTime = clock.getElapsedTime();
      //   document.getElementById("elapsed-time").innerHTML =
      // clock.getElapsedTime();

      //   Update objects
      sphere.rotation.y = 0.5 * elapsedTime;

      //   sphere.rotation.y += 0.5 * (targetX - sphere.rotation.y);
      sphere.rotation.x += 0.5 * (targetY - sphere.rotation.x);

      // Update Orbital Controls
      // controls.update()

      // Render
      renderer.render(scene, camera);

      // Call spin again on the next frame
      window.requestAnimationFrame(spin);
    };

    spin();

    //   gui.add(sphere.rotation, "x").step(0.01);
  });

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "calc(100vh - 55px)",
          backgroundColor: "orange",
        }}
      >
        <canvas class="webgl"></canvas>
      </div>

      {/* <div
        style={{
          width: "100vw",
          height: "calc(100vh - 55px)",
          backgroundColor: "orange",
        }}
      >
        The 3D thing here: start with home (family) → town → country → world
      </div> */}
      <div
        style={{
          position: "absolute",
          margin: "auto",
          left: 0,
          right: 0,
          top: "calc(40vh - 30px)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 400,
            margin: "auto",
            borderRadius: 20,
            backdropFilter: "blur(20px)",
          }}
        >
          <h1
            style={{
              fontSize: 60,
              fontWeight: "900",
              color: "#69f0ae",
              textShadow:
                "-1px 0 1.7px white, 0 1px 1.7px white, 1px 0 1.7px white, 0 -1px 1.7px white",

              // color: "transparent",
              // backdropFilter: "blur(30px)",
            }}
          >
            Seihyun Lee
          </h1>
        </div>
      </div>
      <div
        style={{
          minHeight: "100vh",
          width: "90vw",
          maxWidth: 1000,
          margin: "auto",
        }}
      >
        <h1>
          123sadfhj;qf alkf;klewjrf w;akdjfka jasklfjkwqe;jfapokfjaks; jfas
          fasdjflkasd jf;as dkfas
        </h1>
      </div>
    </>
  );
};

export default Home;
