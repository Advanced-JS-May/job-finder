import React ,{ useState } from 'react';
import { storage } from '../../../libraries/firebase';

//UI
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Fab from "@material-ui/core/Fab";

//services 
import { uploadImage,getImageUrl,createCompany } from '../../../services/company'
import { useAuth } from '../../../services/authentication';

// import { uploadImage,getImageUrl } from '../../../services/company';



export default function ImageUpload() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [company, setCompany] = useState({});
  const { user } = useAuth();

  const handleImageInput = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = () => {
    const uploadTask = uploadImage(image);
    uploadTask.on(
      "state_changed",

      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );

    setCompany((e) => ({
      ...e,
      id: user.uid,
      image: url,
    }));

    createCompany(company);
  };

  return (
  <>
  <input
    accept="image/*"
    id="contained-button-file"
    multiple
    type="file"
    onChange={handleImageInput}
  />
  <label htmlFor="contained-button-file">
    <Fab component="button" onClick={handleUpload}>
      <PhotoCamera />
    </Fab>
  </label>
  </>
  )
}

