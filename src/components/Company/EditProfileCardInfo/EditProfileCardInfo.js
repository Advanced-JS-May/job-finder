import React, { useState } from "react";
//UI

import TextField from '@material-ui/core/TextField';

export default const EditProfileCardInfo = (props) => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

 
  return (
    <div>
      {!edit ? (
        <>
           <Card >
             <CardContent className={classes.root}>
          <Fab className={classes.edit}>
           <EditIcon className={classes.edit} />
          </Fab>
          <h3>Contacts</h3>
          <div className={classes.element}>
            <LocationCityIcon />State:{props.country} City:{props.city}
          </div>
          <div className={classes.element}>
            <BusinessIcon />Address:{props.address}
          </div>
          <div className={classes.element}>
            <PhoneIcon />Tel:{props.tel}
          </div>
          <div className={classes.element}>
            <MailIcon />Mail:{props.mail}
          </div>
          <div className={classes.element}>
            <LanguageIcon /> Website:{props.website}
          </div>
          </CardContent>
        </Card>
          <span>{todoItem.task}</span>
          <button onClick={handleEdit} disabled={todoItem.completed}>
            Edit
          </button>
        </>
      ) : (
        <>
       <input
            type="text"
            value={todo}
            name="todo"
        />
          <button onClick={handleEdit}>Cancel</button>
          <button type="submit">
            Save
          </button>
        </>
      )}
    </div>
  );
};