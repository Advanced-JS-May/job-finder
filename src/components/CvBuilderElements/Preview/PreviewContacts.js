import React from 'react';
import PreviewContactDetails from './PreviewContactDetails';
import RoomIcon from '@material-ui/icons/Room';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import { useSelector } from 'react-redux';

const PreviewContacts = () => {
  const { email, phone, city } = useSelector((state) => state.jobSeeker);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: '0.5rem',
      }}
    >
      {city && (
        <PreviewContactDetails
          icon={<RoomIcon style={{ fontSize: '0.8rem' }} />}
          text={`${city}, Armenia`}
        />
      )}
      {email && (
        <PreviewContactDetails
          icon={<EmailIcon style={{ fontSize: '0.8rem' }} />}
          text={email}
        />
      )}
      {phone && (
        <PreviewContactDetails
          icon={<PhoneIcon style={{ fontSize: '0.8rem' }} />}
          text={phone}
        />
      )}
    </div>
  );
};

export default PreviewContacts;
