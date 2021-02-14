import React from "react";



function Card(props) {
    console.log(props.UserData.profileImg)
    return(
        <div className="main-div">
            <div className="img-user">
            <img src={props.UserData.profileImg} alt="profile-img"/>
            <h3>
        <i class="fas fa-user-alt"></i>   {props.UserData.name}
        </h3>
        <p>
            {props.UserData.bio} 
        </p>
            </div>

        <button className="phone-btn">
        <i class="fas fa-phone-alt"></i> +{props.UserData.phone}
        </button>
        <div className="location">
        <i class="fas fa-map-marker-alt"></i> {props.UserData.suite} {props.UserData.street} {props.UserData.city}
        </div>

        <div>
        <img className="profile" src={props.UserData.profileImg} alt="profile-img"/>
        <img className="profile two" src={props.UserData.profileImg} alt="profile-img"/>
        <img className="profile three" src={props.UserData.profileImg} alt="profile-img"/>
        </div>
        </div>

    ) 
}

export default Card