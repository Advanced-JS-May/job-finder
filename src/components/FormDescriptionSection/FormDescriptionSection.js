import React from 'react';
import TextField from '@material-ui/core/TextField';

function FormDescriptionSection({
  headlineValue,
  handleHeadlineChange,
  summaryValue,
  handleSummaryChange,
}) {
  return (
    <div
      style={{
        width: 400,
        padding: '10px',
      }}
    >
      <TextField
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
        margin="normal"
        label="summary"
        name="summary"
        value={summaryValue}
        onChange={handleSummaryChange}
        multiline
        fullWidth
        rows={10}
        variant="outlined"
        placeholder="Dynamic and motivated professional with a proven record of generating and building relationships, managing projects from concept to completion. Skilled in building cross-functional teams, demonstrating exceptional communication skills, and making critical decisions during challenges. Adaptable and transformational leader with an ability to work independently, creating effective presentations, and developing opportunities."
        inputProps={{
          maxLength: 450,
        }}
      />
    </div>
  );
}

export default FormDescriptionSection;
