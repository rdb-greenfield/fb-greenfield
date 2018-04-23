import React, { Component } from 'react';
import { connect } from 'react-redux';
import S3CoverUploader from './S3CoverUploader.jsx';
import HomeNav from './HomeNav.jsx';
import ProfilePost from './ProfilePost.jsx';
import ProfileWall from './ProfileWall.jsx';
import Comment from './Comment.jsx';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <HomeNav />
        <div className="feed">
          <div className="feedStatus">
            <ProfilePost owner={this.props.profile.user.id} />
          </div>
          <div className="feedWall">
            <div className="postContainer">
              <div className="scrollContainer">
                {console.log('props:', this.props)}
                {this.props.profile.feed.reverse().map(post => {
                  if (post.post_type === 'post') {
                    return (
                      <ProfileWall
                        key={post.id}
                        author={post.firstname + ' ' + post.lastname}
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
    profile: state.profile
  };
}

export default connect(mapStateToProps)(Home);
