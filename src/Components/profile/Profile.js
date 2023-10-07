import React from "react";
import Proptype from "prop-types"
const Profile=({nom,prenom})=>{
    return (
        <div>
            <h3 style={{color:"red"}}>{nom}</h3>
            <h4>{prenom}</h4>
        </div>
    )
}
Profile.Proptype={
    String:Proptype.nom,
    Number:Proptype.age,
}
export default Profile;