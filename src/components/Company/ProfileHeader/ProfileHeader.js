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

export default function ProfileHeader() {
  return (
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
            <ProfilePicture />
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
            <CoverImage />
            {/* <ImageUpload /> */}
          </Box>
    </>
  );
}