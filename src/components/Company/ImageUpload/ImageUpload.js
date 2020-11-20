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

//   return (
//     <div style={{border:"3px solid green",
//     borderRadius:"13px",
//     width:"300px",
//     display:"flex",
//     flexDirection:"row",
//     textAlign:"center",
//     alignContent:"center"}}>
//       <div>
//       <input
//         accept="image/*"
//         id="contained-button-file"
//         multiple
//         type="file"
//         onChange={handleImageInput}
//         // style={{display: 'none'}}
//         // ref={hiddenFileInput}
//       />
//         </div>
//         <div>
//       <label>
//         <Fab component="button" onClick={handleUpload}>
//           <PhotoCamera />
//         </Fab>
//       </label>
//       </div>
//     </div>
//   );
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
