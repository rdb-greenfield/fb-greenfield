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
  constructor(props) {
    super(props);
    this.state = {
      owner: this.props.profile.user.id
    };
  }

  render() {
    return (
      <div>
        <HomeNav />
        <div className="profileMain">
          <div className="profileMainHead">
            <ProfileHead owner={this.state.owner} />
          </div>
          <div className="profileLeft">
            <Intro />
            <ProfilePhotos photos={this.props.profile.photos} />
            <ProfileFriends friends={this.props.friends} />
          </div>
          <div className="profileRight">
            <ProfilePost owner={this.state.owner} />
            <div className="postContainer">
              <div className="scrollContainer">
                {this.props.profile.wall.map(post => {
                  if (post.post_type === "post") {
                    return (
                      <ProfileWall
                        key={post.id}
                        author={post.firstname + " " + post.lastname}
                        body={post.body}
                        timestamp={post.createdat}
                        likes={post.likes}
                        ownerProfilePicture={post.profilepicture}
                        postId={post.id}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    user: state.user,
    currentUser: state.currentUser,
    friends: state.friends
  };
}

export default connect(mapStateToProps)(Profile);
