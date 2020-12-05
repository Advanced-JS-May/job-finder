import { useState, useEffect } from 'react';

import { storage } from '../libraries/firebase';

export const deleteImage = (path, file) => {
  const ref = storage.ref(`${path}/${file.name}`);
  ref
    .delete()
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
};

export const addImage = async (path, file) => {
  return storage
    .ref(`${path}/${file.name}`)
    .put(file)
    .on(
      'state_changed',
      () => {},
      () => {},
      async () => {
        const downloadUrl = await storage
          .ref(`${path}/${file.name}`)
          .getDownloadURL();
        return downloadUrl;
      }
    );
};
