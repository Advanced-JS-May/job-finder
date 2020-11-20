import React from "react";
//UI
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Fab from "@material-ui/core/Fab";


//components
import ImageUpload from "./../ImageUpload/ImageUpload";
import {
  ProfilePicture,
  CoverImage,
} from "./../../../components/icons/Avatar/Avatar";
import CompanyInfoCard from '../../Company/CompanyInfoCard/CompanyInfoCard'
import "./ProfileHeader.css" 





export default function ProfileHeader(props) {
  return (
    <div className="mainHeader">
        <div  id="profilePicture">
        <ProfilePicture imageLink={props.companyImage} />
        </div>
        <div  id="profileUpload">
        <ImageUpload />
               </div>
        <div id="coverImage">
        <CoverImage imageLink={props.companyImage} />
        </div>
        <div id="coverUpload">
        <ImageUpload />
        </div>
     </div>
  );
}
