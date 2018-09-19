import React, {Component} from 'react';


class Profile extends Component{
  render(){
    const {name, followers, picture} = this.props.artistData;
    return(
      <div className='artistProfile'>
        <div className='artistPicture'>{picture}</div>
        <div className='artistname'>{name}</div>
        <div className='artistFollowers'>{followers}</div>
      </div>
    );
  }
}

export default Profile;