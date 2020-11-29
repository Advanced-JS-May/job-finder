import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { storage } from "../../../libraries/firebase";

//UI
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Fab from "@material-ui/core/Fab";

//services
import { uploadImageUrl } from "../../../services/company";
import { useAuth } from '../../../services/authentication';

export default function ImageUpload( { imageType } ) {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const { user } = useAuth();
  let id=user.uid
 
  const handleImageInput = async  ({ target: { files } }) => {
    let image = files[0];
    const fileRef = storage.ref(imageType).child(image.name);
    setImage(image);
    await fileRef.put(image);
    setUrl(await fileRef.getDownloadURL());
    
  };


  const handleUpload =   () => {

    uploadImageUrl(id,imageType,url);
     window.location.reload()
   };


return (
  <Fab  variant="extended">
    <div>
    <input
      accept="image/*"
      id="contained-button-file"
      type="file"
      onChange={handleImageInput}
      // style={{display: 'none'}}
      // ref={hiddenFileInput}
    />
      </div>
      <div>
    <label>
      <Fab component="button" onClick={handleUpload}>
        <PhotoCamera />
      </Fab>
    </label>
    </div>
    </Fab>
);
}
