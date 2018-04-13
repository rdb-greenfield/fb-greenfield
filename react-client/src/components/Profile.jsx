import React, { Component } from "react";
import ProfileHead from "./ProfileHead.jsx";
import Intro from "./Intro.jsx";
import ProfilePost from "./ProfilePost.jsx";
import ProfileFriends from "./ProfileFriends.jsx";
import ProfileWall from "./ProfileWall.jsx";
import ProfilePhotos from "./ProfilePhotos.jsx";

// import React from "react";

export default () => {
  return (
    <div className="profileMain">
      <div className="profileMainHead">
        <ProfileHead />
      </div>
      <div className="profileLeft">
        <Intro />
        <ProfilePhotos />
        <ProfileFriends />
      </div>
      <div className="profileRight">
        <ProfilePost />
        <div className="postContainer">
          <ProfileWall />
          <ProfileWall />
          <ProfileWall />
          <ProfileWall />
          <ProfileWall />
          <ProfileWall />
          <ProfileWall />
          <ProfileWall />
          <ProfileWall />
        </div>
      </div>
    </div>
  );
};
// export default class Profile extends Component {
//   render() {
//     return (
//       <div className="profileMain">
//         <div className="profileMainHead">
//           <ProfileHead />
//         </div>
//         <div className="profileLeft">
//           <Intro />
//           <ProfilePhotos />
//           <ProfileFriends />
//         </div>
//         <div className="profileRight">
//           <ProfilePost />
//           <div className="postContainer">
//             <ProfileWall />
//             <ProfileWall />
//             <ProfileWall />
//             <ProfileWall />
//             <ProfileWall />
//             <ProfileWall />
//             <ProfileWall />
//             <ProfileWall />
//             <ProfileWall />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
