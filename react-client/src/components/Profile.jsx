import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProfileHead from "./ProfileHead.jsx";
import Intro from "./Intro.jsx";
import ProfilePost from "./ProfilePost.jsx";
import ProfileFriends from "./ProfileFriends.jsx";
import ProfileWall from "./ProfileWall.jsx";
import ProfilePhotos from "./ProfilePhotos.jsx";
import HomeNav from "./HomeNav.jsx";

class Profile extends Component {
  render() {
    return (
      <div>
        <HomeNav />
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
              {this.props.profile.wall.map(post => {
                console.log(post);
                if (post.post_type === "post") {
                  return (
                    <ProfileWall
                      author={post.firstname + " " + post.lastname}
                      body={post.body}
                      timestamp={post.createdat}
                      likes={post.likes}
                      ownerProfilePicture={post.profilepicture}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile
  };
}

export default connect(mapStateToProps)(Profile);
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
