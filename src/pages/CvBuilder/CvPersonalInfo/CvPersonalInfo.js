import React, { useCallback, useEffect, useState } from 'react';
import { AccordionDetails, Fab } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import MenuItem from '@material-ui/core/MenuItem';
import CITIES from '../../../constants/armenianCities';
import GENDERS from '../../../constants/gender';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import {
  addImage,
  deleteImage,
  useStorage,
} from '../../../services/manipulateStorage.service';
import { useAuth } from '../../../services/authentication';
import { removeUserFieldById } from '../../../services/user';
import useUserData from '../../../services/userHook';

function CvPersonalInfo() {
  const [image, setImage] = useState(null);
  const { imageUrl, setImageUrl } = useState(null);
  const { user } = useAuth();
  const { updateUserById } = useUserData();

  const handleFileUpload = async (e) => {
    e.preventDefault();

    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      const task = addImage(`cv/${user.uid}`, e.target.files[0]);
      console.log(task);
      // setImageUrl(url);
      // updateUserById(user.uid, { cvImage: url });
    }
  };

  const handleImageRemove = () => {
    deleteImage();
    updateUserById(user.uid, { cvImage: null });
  };

  // useEffect(() => {
  //   if (user && url) {
  //     console.log(url);
  //     updateUserById(user.uid, { cvImage: url });
  //   }
  // }, [updateUserById, url, user]);

  return (
    <>
      <AccordionDetails
        style={{
          width: '90%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ minHeight: 100 }}>
          {imageUrl && <img height={100} src={imageUrl} alt="avatar" />}
        </div>
        {image && imageUrl ? (
          <Fab
            variant="extended"
            component="span"
            size="medium"
            aria-label="add Photo"
            color="secondary"
            onClick={handleImageRemove}
            style={{
              alignSelf: 'flex-start',
            }}
          >
            <DeleteIcon />
            Delete
          </Fab>
        ) : (
          <label
            htmlFor="image"
            style={{
              alignSelf: 'flex-start',
            }}
          >
            <input
              onChange={handleFileUpload}
              hidden
              multiple
              accept="image/*"
              id="image"
              type="file"
            />
            <Fab
              variant="extended"
              component="span"
              size="medium"
              aria-label="add Photo"
              color="primary"
              style={{
                alignSelf: 'flex-start',
              }}
            >
              <PhotoCameraIcon style={{ marginRight: 10 }} />
              Upload Your photo
            </Fab>
          </label>
        )}

        <TextField
          fullWidth
          label="Name"
          name="name"
          margin="normal"
          // value={nameValue}
          // onChange={handleNameChange}
          // onBlur={handleNameBlur}
          // error={nameError}
          variant="outlined"
          InputProps={{ style: { padding: 5 } }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Surname"
          name="surname"
          // value={surnameValue}
          // onChange={handleSurnameChange}
          // onBlur={handleSurnameBlur}
          // error={surnameError}
          variant="outlined"
          InputProps={{ style: { padding: 5 } }}
        />
        <TextField
          type="number"
          label="Age"
          margin="normal"
          // value={ageValue}
          // onChange={handleAgeChange}
          // onBlur={handleAgeBlur}
          // error={ageError}
          name="age"
          variant="outlined"
          fullWidth
          InputProps={{ style: { padding: 5 } }}
        />
        {/* <TextField
          variant="outlined"
          select
          label="gender"
          margin="normal"
          name="gender"
          // value={genderValue}
          // onChange={handleGenderChange}
          // onBlur={handleGenderBlur}
          // error={genderError}
          fullWidth
          InputProps={{ style: { padding: 0 } }}
        >
          {GENDERS.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField> 
         <TextField
          variant="outlined"
          select
          label="city"
          margin="normal"
          name="city"
          // value={cityValue}
          // onChange={handleCityChange}
          // onBlur={handleCityBlur}
          // error={cityError}
          fullWidth
          InputProps={{ style: { padding: 0 } }}
        >
          {CITIES.map((option) => {
            if (option === 'All') {
              return (
                <MenuItem disabled key={option} value={option}>
                  {option}
                </MenuItem>
              );
            }
            return (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            );
          })}
        </TextField> */}
      </AccordionDetails>
    </>
  );
}

export default CvPersonalInfo;
