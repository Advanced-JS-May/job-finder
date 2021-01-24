import React, { useEffect, useState } from 'react';

/* REDUX */
import { useDispatch } from 'react-redux';

/* COMPONENTS */
import Content from '../../components/CvBuilderElements/Content/Content';
import MenuList from '../../components/CvBuilderElements/MenuList/MenuList';
import Preview from '../../components/CvBuilderElements/Preview/Preview';

/* Services */
import { getJobSeekerById } from '../../services/JobSeeker.service';
import { setCurrentUser } from '../../store/features/JobSeekerDetails';
import { useAuth } from '../../services/authentication';

import './CvBuilder.css';

export default function CvBuilder() {
  const { user } = useAuth();
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (user) {
      getJobSeekerById(user.uid).then((res) => {
        dispatch(setCurrentUser(res));
      });
    }
  }, [dispatch, user]);

  return user ? (
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
        <Preview />
      </div>
    </div>
  ) : null;
}
