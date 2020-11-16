import React from "react";
//UI
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

//components 
import ImageUpload from './../ImageUpload/ImageUpload';
import { ProfilePicture, CoverImage} from './../../../components/icons/Avatar/Avatar';


export default function ProfileHeader () {
   

    return (
      <>
        <CardContent>
          <Grid >
           <ProfilePicture />
           <ImageUpload />
           <CoverImage />
          </Grid>
        </CardContent>
      </>
    );
  }