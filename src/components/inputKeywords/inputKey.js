import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import './inputKey.css'

export default function InputKey() {
	return (
		<>
		<TextField
          required
          id="sth"
          label="Keywords"
          defaultValue=""
          variant="filled"
          size="normal"
        />
        </>
	)
}