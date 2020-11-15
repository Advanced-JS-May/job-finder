import React from 'react';

import styles from './FormContainer.module.css';

function FormContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default FormContainer;
