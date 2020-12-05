import React, { useEffect, useState } from 'react';
import { database } from '../../libraries/firebase';
import { useAuth } from '../../services/authentication';
import { getUsersById } from '../../services/user';

import Content from './Content/Content';

import './CvBuilder.css';
import MenuList from './MenuList/MenuList';

export default function CvBuilder() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="container">
      <MenuList
        open={open}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
      />

      <div className="board">
        <Content />
      </div>
      <div
        style={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            background: 'white',
            height: '97%',
            width: '500px',
            margin: 10,
          }}
        >
          {user && user.cvImage !== null && (
            <img src={user.cvImage} alt="avatar" />
          )}
        </div>
      </div>
    </div>
  );
}
