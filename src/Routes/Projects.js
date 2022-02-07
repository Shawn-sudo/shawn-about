// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Footer from "../Components/Footer";

// const Projects = () => {
//   const [
//     showProbelmsOfPreexistingServices,
//     setShowProbelmsOfPreexistingServices,
//   ] = useState(false);

//   window.scrollTo(0, 0);
//   var windowHalfY = window.innerHeight / 2;
//   window.addEventListener("resize", () => {
//     windowHalfY = window.innerHeight / 2;
//   });

//   useEffect(() => {
//     // var projectsElement = document.querySelector("#Projects");
//     // projectsElement.focus();
//     // //doesn't work well

//     const projectsElement = document.querySelector("#Projects");
//     projectsElement.focus();
//     const frontPageScrollInstructionContainer = document.querySelector(
//       ".scroll-instruction-container"
//     );
//     // const frontPageCenterTitle = document.querySelector(".center-title");

//     let scrolledY = 0;
//     let scrolledYBefore = 0;
//     projectsElement.addEventListener("scroll", (event) => {
//       scrolledYBefore = scrolledY;
//       scrolledY = projectsElement.scrollTop;
//       if (scrolledY < windowHalfY) {
//         frontPageScrollInstructionContainer.style.display = "block";
//         // frontPageCenterTitle.style.display = "block";
//         frontPageScrollInstructionContainer.style.opacity =
//           1 - scrolledY / windowHalfY;
//         // frontPageCenterTitle.style.opacity = 1 - scrolledY / windowHalfY;
//       } else {
//         frontPageScrollInstructionContainer.style.display = "none";
//         // frontPageCenterTitle.style.display = "none";
//       }
//     });
//   });

//   return (
//     <div
//       id="Projects"
//       tabIndex="-1"
//       style={{
//         height: "100vh",
//         overflow: "scroll",
//         textAlign: "center",
//         background:
//           "linear-gradient(to bottom right, #ec5f59 0%, #b9f6ca 100%)",
//       }}
//     >
//       {/* <div style={{ height: 55 }} /> */}
//       <div
//         style={{
//           height: "100vh",
//         }}
//       >
//         <div style={{ height: "50%" }} />
//         <h1
//           className="center-title"
//           style={{
//             fontSize: 60,
//             transform: "translate(0, -50%)",
//           }}
//         >
//           A Journey to Connect People
//         </h1>
//         <div>
//           <Link to="/preexistings/problems" style={{ color: "black" }}>
//             What's wrong with the preexisting services?
//           </Link>
//         </div>
//       </div>
//       <div className="scroll-instruction-container">
//         <div className="scroll-instruction transition-by-it-self">
//           <div>scroll down</div>
//         </div>
//       </div>
//       <div
//         style={{
//           backgroundColor: "ghostwhite",
//           borderRadius: 25,
//           boxShadow: "0 3px 7.5px grey",
//         }}
//       >
//         <div
//           style={{
//             width: "90vw",
//             height: 1000,
//             maxWidth: 1200,
//             margin: "auto",
//             transform: "rotate3d(0, 1, 0, 15deg)",
//             borderRadius: 50,
//             boxShadow: "0px 3px 7.5px grey",
//           }}
//         >
//           Atrable here
//         </div>
//         <div
//           style={{
//             width: "90vw",
//             height: 1000,
//             maxWidth: 1200,
//             margin: "auto",
//             transform: "rotate3d(0, 1, 0, 15deg)",
//             borderRadius: 50,
//             boxShadow: "0px 3px 7.5px grey",
//           }}
//         >
//           Closquare here
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// // const MyCard = (props) => {
// //   return <div style={props.style}>{props.children}</div>;
// // };

// export default Projects;
