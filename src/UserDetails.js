import React from 'react';

const UserDetails = ({data,profession}) =>{
  const displayProfession = () =>{
    switch (profession) {
      case 1:
        return "Student"
        break;
      case 2:
        return "Govt. Official"
        break;
      case 3:
        return "Self Employed"
        break;
      case 4:
        return "Private"
        break;
      default:

    }
  }
  return(
    <div>
      First Name :{data.fname} <br />
      Last Name :{data.lname} <br />
      Email :{data.email} <br />
      Gender : {data.gender} <br />
      Profession : {displayProfession()}<br />
    </div>
  );
}

export default UserDetails;
