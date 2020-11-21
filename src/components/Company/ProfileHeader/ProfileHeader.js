import React from "react";

//components
import ImageUpload from "./../ImageUpload/ImageUpload";
import {  ProfilePicture,CoverImage } from "./../../../components/icons/Avatar/Avatar";
import "./ProfileHeader.css" 





export default function ProfileHeader( { image, coverImage } ) {
  return (
    <div className="mainHeader">
        <div  id="profilePicture">
        <ProfilePicture imageLink={image} />
        </div>
        <div  id="profileUpload">
        <ImageUpload imageType='image'/>
               </div>
        <div id="coverImage">
        <CoverImage imageLink={coverImage} />
        </div>
        <div id="coverUpload">
        <ImageUpload imageType='coverImage'/>
        </div>
     </div>
  );
}
