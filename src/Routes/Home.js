import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import * as dat from "dat.gui";

const Home = () => {
  //structure of this page: as if My avatar is presentationing
  //There are many companies that say "We connect people!"
  //But, do they?
  //Instagram: Showing off to others, rather than being connected
  //            "Who is living a happier life?"
  //            pic: everybody smiling
  //Facebook: Tooooooooo public
  //            "Who has more friends??" "What post did u liked?" "What was the chat with u and Jacob about?" "Your account has been disabled. Upload your ID"
  //            eyes(like big brother), bugs
  //Snapchat: Streak Game
  //          🔥300: Best Friend
  //          🔥200: Best Friend
  //          🔥100: Best Friend
  //          🔥30: Close Friend
  //          🔥3: Friend

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

  const [slide1CenterTitle, setSlide1CenterTitle] = useState({
    position: "absolute",
    margin: "auto",
    left: 0,
    right: 0,
    top: "calc(40vh - 30px)",
    textAlign: "center",
    opacity: 1,
  });

  useEffect(() => {
    // Canvas
    const canvas = document.querySelector("canvas#Home-3d-background");

    // Scene
    const scene = new THREE.Scene();

    // Objects
    // const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
    // const geometry = new THREE.BoxGeometry(0.7, 1, 1);
    const geometry = new THREE.SphereGeometry(0.7, 7, 5);

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    textureLoader.crossOrigin = "";
    const textureImage = require("../static/textures/WorldMap.jpg");
    const texture = textureLoader.load(textureImage);

    // Materials
    // const material = new THREE.MeshBasicMaterial();
    const material = new THREE.LineDashedMaterial({
      color: new THREE.Color(0xec5f59),
      linewidth: 1,
      scale: 1,
      dashSize: 3,
      gapSize: 1,
    });

    // material.map = texture;
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

    // Camera
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
    renderer.setClearColor(0xd9f9ea, 1);

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

    // Animate by mouse's movement
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

    // // Change page when being scrolled
    // document.addEventListener("wheel", onDocumentScrolled);
    // function onDocumentScrolled(event) {
    //   //todo: if the page of the 3D intro space is not finished yet, ignore every scroll
    //   //   console.log(event.deltaY);
    // }

    // Animate
    const clock = new THREE.Clock();
    const spin = () => {
        targetX = mouseX * 0.0005;
      targetY = mouseY * 0.0005;

      const elapsedTime = clock.getElapsedTime();
      //   document.getElementById("elapsed-time").innerHTML =
      // clock.getElapsedTime();

      //   Update objects
      sphere.rotation.y = 0.5 * elapsedTime;

        sphere.rotation.y += 0.5 * (targetX - sphere.rotation.y);
      sphere.rotation.x += 0.5 * (targetY - sphere.rotation.x);

      // Update Orbital Controls
      // controls.update()

      // Render
      renderer.render(scene, camera);

      // Call spin again on the next frame
      window.requestAnimationFrame(spin);
    };

    spin();

    //Not related to the 3d thing

    var homeElement = document.querySelector(".Home");
    var slide1CenterTitle = document.querySelector("#center-title");
    let scrolledY = 0;
    let scrolledYBefore = 0;
    const changeSlide1 = () => {
      scrolledYBefore = scrolledY;
      scrolledY = homeElement.scrollTop;
      if (scrolledY == 0) {
        slide1CenterTitle.style.opacity = 1;
      } else {
        slide1CenterTitle.style.opacity = 0;
      }
      window.requestAnimationFrame(changeSlide1);
    };
    changeSlide1();
    // homeElement.addEventListener("scroll", () => {
    //   console.log(homeElement.scrollTop);
    //   if (homeElement.scrollTop == 0) {
    //     setSlide1CenterTitle({
    //       position: "absolute",
    //       margin: "auto",
    //       left: 0,
    //       right: 0,
    //       top: "calc(40vh - 30px)",
    //       textAlign: "center",
    //       opacity: 1,
    //     });
    //   } else {
    //     setSlide1CenterTitle({
    //       position: "absolute",
    //       margin: "auto",
    //       left: 0,
    //       right: 0,
    //       top: "calc(40vh - 30px)",
    //       textAlign: "center",
    //       opacity: 0,
    //     });
    //   }
    // });
  });

  // window.addEventListener("scroll", () => {
  //   console.log(window.scrollY);
  // });

  // function onDocumentScroll(event) {}

  return (
    <div className="Home">
      <div
        className="slide"
        id="slide0"
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#b9f6ca",
        }}
      >
        <canvas className="slide webgl" id="Home-3d-background"></canvas>
        {/* The 3D thing: start with home (family) → town → country → world */}
        <div
          id="center-title"
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
              animationName: "title-animation",
              animationDuration: "2s",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-out",
            }}
          >
            <h1
              style={{
                fontSize: 60,
                fontWeight: "900",
                color: "#69f0ae",
                textShadow:
                  "-1px 0 1.7px white, 0 1px 1.7px white, 1px 0 1.7px white, 0 -1px 1.7px white",
              }}
            >
              Seihyun Lee
            </h1>
          </div>
        </div>
      </div>

      <div
        className="slide"
        id="slide1"
        style={{ width: "100vw", height: "100vh", backgroundColor: "grey" }}
      >
        Instagram here
      </div>
      <div
        className="slide"
        id="slide2"
        style={{ width: "100vw", height: "100vh", backgroundColor: "blue" }}
      >
        Facebook here
      </div>
      <div
        className="slide"
        id="slide3"
        style={{ width: "100vw", height: "100vh", backgroundColor: "yellow" }}
      >
        SnapChat here
      </div>
      <div
        className="slide"
        id="slide4"
        style={{ width: "100vw", height: "100vh", backgroundColor: "#ec5f59" }}
      >
        Atrable here
      </div>
      {/* <div
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
      </div> */}
    </div>
  );
};

export default Home;
