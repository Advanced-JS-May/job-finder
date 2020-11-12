import React ,{ useState } from 'react'
import { storage } from '../../../libraries/firebase'
//UI
import Button from '@material-ui/core/Button';

//services 
import { uploadImage,getImageUrl,createCompany } from '../../../services/company'
import { useAuth } from '../../../services/authentication';
// import { uploadImage,getImageUrl } from '../../../services/company';

export default function  ImageUpload ()  {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [company,setCompany] = useState({});
    const { user } = useAuth();

    const handleImageInput = e => {
         setImage(e.target.files[0]);
        
    }
  
    //   console.log('URL on input',url)


      const handleUpload = () => {

        const uploadTask = uploadImage(image);
        uploadTask.on(
          "state_changed",
        
          () => {
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then(url => {
                setUrl(url);
              });
          }
         
        // getImageUrl(image)
        //   .then(url => {
        //     setUrl(url);
        //   })
        );
        setCompany((e)=>({
            ...e,
            id:user.uid,
            image:url
            }))
            console.log(company)
        createCompany(company);

        console.log('URL',url)
      };
   

     return (
        <div> 
            <div>
             <input type="file" onChange={handleImageInput} />
            </div>
            <div>
                <Button variant="contained" color="primary" onClick={handleUpload}>
                                                Submit
                </Button>
            </div>
        </div> 
     )
}



