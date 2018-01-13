import React from 'react';
import './NavBarUser.css';

// import the sample user profile icon
import userProfileIcon from './images/user-profile-icon.png';

const navBarUser = (props) => {
  return (
    <div className="navBarUser">
      <img className="profileImage" src={userProfileIcon} alt="User profile" />
    </div>
  );
};

export default navBarUser;
