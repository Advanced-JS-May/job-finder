import React from "react";
//UI
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
//components
import ImageUpload from "./../ImageUpload/ImageUpload";
import {
  ProfilePicture,
  CoverImage,
} from "./../../../components/icons/Avatar/Avatar";
import CompanyInfoCard from '../../Company/CompanyInfoCard/CompanyInfoCard'
export default function ProfileHeader(company) {
  return (
    <>
    <>
          <Box
            // bgcolor="grey.700"
            // color="white"
            p={2}
            position="absolute"
            top='30%'
            left="10%"
            zIndex="tooltip"
            borderRadius='15px'
          >
            <ProfilePicture imageLink={company.image}/>
            <ImageUpload />
          </Box>
          <Box
            // bgcolor="background.paper"
            color="text.primary"
            p={2}
            position="absolute"
            top={150}
            left="15%"
            zIndex="modal"
            borderRadius='15px'
          >
            <CoverImage imageLink={company.image}/>
            <ImageUpload />
          </Box>
    </>
    <>
    <CompanyInfoCard />
    </>
    </>
  );
}