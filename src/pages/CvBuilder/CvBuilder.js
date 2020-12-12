import React, { useState } from 'react';
import { useAuth } from '../../services/authentication';

import Content from './Content/Content';

import './CvBuilder.css';
import MenuList from './MenuList/MenuList';

export default function CvBuilder() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [activeIcon, setActiveIcon] = useState('text');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuItemClick = (iconType) => {
    setActiveIcon(iconType);
  };

  return (
    <div className="container">
      <MenuList
        open={open}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
        handleMenuItemClick={handleMenuItemClick}
        activeIcon={activeIcon}
      />

      <div className="board">
        {activeIcon === 'design' ? (
          <div>design</div>
        ) : activeIcon === 'preview' ? (
          <div>preview</div>
        ) : (
          <Content />
        )}
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
