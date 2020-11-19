import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { storage } from "../../../libraries/firebase";

//UI
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Fab from "@material-ui/core/Fab";

//services
import { uploadImageUrl } from "../../../services/company";

export default function ImageUpload(props) {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const { id } = useParams();
 
  const handleImageInput = async  ({ target: { files } }) => {
    let image = files[0];
    const fileRef = storage.ref(props.imageType).child(image.name);
    setImage(image);
    await fileRef.put(image);
    setUrl(await fileRef.getDownloadURL());
    
  };

//  const hiddenFileInput = React.useRef(null);

  const handleUpload =   () => {

    uploadImageUrl(id,props.imageType,url);
     window.location.reload()
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
        // ref={hiddenFileInput}
      />
      <label>
        <Fab component="button" onClick={handleUpload}>
          <PhotoCamera />
        </Fab>
      </label>
    </>
  );
}
