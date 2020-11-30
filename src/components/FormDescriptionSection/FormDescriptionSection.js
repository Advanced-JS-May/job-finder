import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormSection from '../FormElements/FormSection/FormSection';

const useStyles = makeStyles({
  root: {
    display: 'block',
    margin: '20px 0',
    background: 'white',
  },
  summary: {
    display: 'block',
    margin: '20px 0',
    background: 'white',
    '& .MuiInputBase-root': {
      background: 'white',
    },
  },
});

function FormDescriptionSection({
  headlineValue,
  summaryValue,
  handleHeadlineChange,
  handleSummaryChange,
}) {
  const classes = useStyles();
  return (
    <FormSection>
      <TextField
        className={classes.root}
        name="headline"
        value={headlineValue}
        onChange={handleHeadlineChange}
        label="Headline"
        fullWidth
        multiline
        variant="outlined"
        margin="normal"
        placeholder="Marketing Professional | Medical Educator | Nutritional Advocate"
        inputProps={{
          maxLength: 70,
        }}
      />
      <TextField
        className={classes.summary}
        margin="normal"
        label="summary"
        name="summary"
        value={summaryValue}
        onChange={handleSummaryChange}
        multiline
        fullWidth
        rows={10}
        placeholder="Dynamic and motivated professional with a proven record of generating and building relationships, managing projects from concept to completion. Skilled in building cross-functional teams, demonstrating exceptional communication skills, and making critical decisions during challenges. Adaptable and transformational leader with an ability to work independently, creating effective presentations, and developing opportunities."
        variant="outlined"
        inputProps={{
          maxLength: 450,
        }}
      />
    </FormSection>
  );
}

export default FormDescriptionSection;
