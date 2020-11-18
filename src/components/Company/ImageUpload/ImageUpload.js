import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { storage } from "../../../libraries/firebase";
//UI
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Fab from "@material-ui/core/Fab";

//services
import {
  uploadImage,
  createCompany,
  uploadImageUrl,
} from "../../../services/company";

export default function ImageUpload() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const { id } = useParams();

  // const handleImageInput = ({ target:{ files } }) => {
  //   setImage(files[0]);
  //   console.log('initial',image)
  // };
  const handleImageInput = async ({ target: { files } }) => {
    let image = files[0];
    const fileRef = storage.ref("images").child(image.name);

    await fileRef.put(image);
    setUrl(await fileRef.getDownloadURL());
  };

  const handleUpload = () => {
    uploadImageUrl(id, url);
    console.log(url);
    window.location.reload(false);
  };

  return (
    <>
      <input
        accept="image/*"
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleImageInput}
        // style={{display: 'none'}}
        ref={image}
      />
      <label>
        <Fab component="button" onClick={handleUpload}>
          <PhotoCamera />
        </Fab>
      </label>
    </>
  );
}
