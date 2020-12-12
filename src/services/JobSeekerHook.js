import { useState, useEffect } from 'react';
import { database } from '../libraries/firebase';

function useUserData() {
  const [user, setUser] = useState(null);
  const [id, setId] = useState(null);

  const removeCurrentUser = () => {
    setUser(false);
  };

  const createUser = async (id, data) => {
    setId(id);
    const ref = database.ref('/users/' + id);
    return ref.set(data);
  };

  const getUsersById = async (id) => {
    setId(id);
    const ref = database.ref('/users/' + id);
    const snapshot = await ref.once('value');
    return snapshot.val();
  };

  const updateUserById = (id, data) => {
    setId(id);

    const ref = database.ref('/users/' + id);
    return ref.update(data);
  };

  useEffect(() => {
    const ref = database.ref('/users/' + id);
    ref.on('value', (snap) => {
      setUser(snap.val());
    });
    return () => {
      ref.off('value');
    };
  }, [id]);

  return {
    user,
    getUsersById,
    createUser,
    updateUserById,
    removeCurrentUser,
  };
}

export default useUserData;
