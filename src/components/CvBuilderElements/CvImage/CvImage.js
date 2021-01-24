import React, { useState } from 'react';
import { Fab } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

import {
  addImage,
  deleteImage,
} from '../../../services/manipulateStorage.service';

function CvImage() {
  const [image, setImage] = useState(null);
  const { imageUrl, setImageUrl } = useState(null);

  const handleFileUpload = async (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      // const task = addImage(`cv/${user.uid}`, e.target.files[0]);
      // setImageUrl(url);
    }
  };

  const handleImageRemove = () => {
    deleteImage();
  };

  return (
    <>
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
    </>
  );
}

export default CvImage;
