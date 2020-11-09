import React ,{ useState }from 'react'

//UI
import Button from '@material-ui/core/Button';

//services 
import { uploadImage,getImageUrl } from '../../../services/company'

export default function  ImageUpload ()  {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    
    const handleImageInput  = (e) => {
        setImage(e.target.files[0]);
    
    };

    const handleImageUpload = () => {
    const uploadTask = uploadImage(image);
      uploadTask.on(
        "state_changed",
         getImageUrl(image)
         .then(url => {
         setUrl(url);
        })
      )
      }

     return (
        <div> 
            <div>
             <input type= "file" onChange={handleImageInput}/>
            </div>
            <div>
                <Button variant="contained" color="primary" onClick={handleImageUpload}>
                                                Submit
                </Button>
            </div>
        </div> 
     )
}



