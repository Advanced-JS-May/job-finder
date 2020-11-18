import React ,{ useState } from 'react';
import { storage } from '../../../libraries/firebase';

//UI
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Fab from "@material-ui/core/Fab";

//services 
import { uploadImage,createCompany } from '../../../services/company'
import { useAuth } from '../../../services/authentication';




export default function ImageUpload() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [company, setCompany] = useState({});
  const { user } = useAuth();

  // const handleImageInput = ({ target:{ files } }) => {
  //   setImage(files[0]);
  //   console.log('initial',image)
  // };
  const handleImageInput = async (e) => {
        const file = e.target.files[0];
        const storageRef = storage.ref("images");
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        setUrl(await fileRef.getDownloadURL());
        // console.log(url)
      };
    
  const handleUpload = () => {
    
    // const uploadTask = uploadImage(image)

    console.log('WOW',url)
    // uploadTask.on(
    //   "state_changed",

    //   () => {
    //     storage
    //       .ref("images")
    //       .child(image.name)
    //       .getDownloadURL()
    //       .then((res) => {
    //         setUrl(url)
    //       });
    //   }
    // )

  

    setCompany((e) => ({
      ...e,
      id:user.uid,
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
    // style={{display: 'none'}}
    ref={image}
  />
  <label>
    <Fab component="button" onClick={handleUpload}>
      <PhotoCamera />
    </Fab>
  </label>
  </>
  )
}

 
  
// import React, { useEffect } from "react";
// import { app } from "./base";

// const db = app.firestore();

// function App() {
//   const [fileUrl, setFileUrl] = React.useState(null);
//   const [users, setUsers] = React.useState([]);

//   const onFileChange = async (e) => {
//     const file = e.target.files[0];
//     const storageRef = app.storage().ref();
//     const fileRef = storageRef.child(file.name);
//     await fileRef.put(file);
//     setFileUrl(await fileRef.getDownloadURL());
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const username = e.target.username.value;
//     if (!username || !fileUrl) {
//       return;
//     }
//     await db.collection("users").doc(username).set({
//       name: username,
//       avatar: fileUrl,
//     });
//   };

//   // useEffect(() => {
//   //   const fetchUsers = async () => {
//   //     const usersCollection = await db.collection("users").get();
//   //     setUsers(
//   //       usersCollection.docs.map((doc) => {
//   //         return doc.data();
//   //       })
//   //     );
//   //   };
//   //   fetchUsers();
//   // }, []);

//   return (
//     <>
//       <form onSubmit={onSubmit}>
//         <input type="file" onChange={onFileChange} />
//         <input type="text" name="username" placeholder="NAME" />
//         <button>Submit</button>
//       </form>
//       <ul>
//         {users.map((user) => {
//           return (
//             <li key={user.name}>
//               <img width="100" height="100" src={user.avatar} alt={user.name} />
//               <p>{user.name}</p>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }


