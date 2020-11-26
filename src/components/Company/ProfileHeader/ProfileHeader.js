import React from "react";

//components
import ImageUpload from "./../ImageUpload/ImageUpload";
import {  ProfilePicture,CoverImage } from "./../../../components/icons/Avatar/Avatar";
import "./ProfileHeader.css" 





export default function ProfileHeader( { image, coverImage, name } ) {

return (
 <>
    <div className="mainHeader">
      <div id="profilePicture">
        <ProfilePicture imageLink={image} />
      </div>
      <div id="profileUpload">
        <ImageUpload imageType="image" />
      </div>
      <div id="coverImage">
        <CoverImage imageLink={coverImage} />
      </div>
      <div id="coverUpload">
        <ImageUpload imageType="coverImage" />
      </div>
    </div>
    <div id="profileName">
      {!name?(
        <h2>JobSeeaker.am</h2>
      ):(
         <h2>{name}</h2>
      )
      }
    </div>
 </>
 );
}
