import React from 'react';

import clsx from 'clsx';
import List from '@material-ui/core/List';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import PaletteIcon from '@material-ui/icons/Palette';
import PersonIcon from '@material-ui/icons/Person';

function MenuList({
  open,
  handleDrawerClose,
  handleDrawerOpen,
  handleMenuItemClick,
  activeIcon,
}) {
  const handleDesignClick = () => {
    handleMenuItemClick('design');
  };
  const handleTextClick = () => {
    handleMenuItemClick('text');
  };
  const handlePreviewClick = () => {
    handleMenuItemClick('preview');
  };

  return (
    <>
      <List
        className={clsx('list', {
          'list-open': open,
          'list-close': !open,
        })}
        style={{
          margin: 10,
        }}
      >
        <ListItem button onClick={open ? handleDrawerClose : handleDrawerOpen}>
          <ListItemIcon>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </ListItemIcon>
        </ListItem>
        <ListItem button onClick={handleTextClick}>
          <ListItemIcon>
            <TextFieldsIcon
              color={activeIcon === 'text' ? 'primary' : 'action'}
            />
          </ListItemIcon>
          <ListItemText primary={'Content'} />
        </ListItem>

        <ListItem button onClick={handleDesignClick}>
          <ListItemIcon>
            <PaletteIcon
              color={activeIcon === 'design' ? 'primary' : 'action'}
            />
          </ListItemIcon>
          <ListItemText primary={'Design'} />
        </ListItem>

        <ListItem button onClick={handlePreviewClick}>
          <ListItemIcon>
            <PersonIcon
              color={activeIcon === 'preview' ? 'primary' : 'action'}
            />
          </ListItemIcon>
          <ListItemText primary={'Check'} />
        </ListItem>
      </List>
    </>
  );
}

export default MenuList;
