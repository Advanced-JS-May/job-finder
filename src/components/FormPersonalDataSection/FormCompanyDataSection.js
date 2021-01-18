import React from "react";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import CITIES from "../../constants/armenianCities";
import FormSection from "../FormElements/FormSection/FormSection";
import { makeStyles } from "@material-ui/core/styles";
import FormField from "../FormElements/FormField/FormField";

function FormPersonalDataSection({
  //values
  nameValue,
  fieldValue,
  establishmentValue,
  taxIdValue,
  cityValue,
  employeeValue,
  //event handlers
  handleNameChange,
  handleFieldChnage,
  handleEstablishmentChange,
  handleTaxIdChange,
  handleCityChange,
  handleEmployeeChange,
  //blurs
  handleNameBlur,
  handleFieldBlur,
  handleEstablishmentBlur,
  handleTaxIdBlur,
  handleCityBlur,
  handleEmployeeBlur,
  //errrors
  nameError,
  fieldError,
  establishestablishmentError,
  taxIdError,
  cityError,
  employeeError,
}) {
  return (
    <FormSection>
      <FormField
        label="Company Name"
        name="name"
        value={nameValue}
        onChange={handleNameChange}
        onBlur={handleNameBlur}
        error={nameError}
        InputProps={{ style: { padding: 5 } }}
      />
      <FormField
        label="Field"
        name="field"
        value={fieldValue}
        onChange={handleFieldChnage}
        onBlur={handleFieldBlur}
        error={fieldError}
        variant="outlined"
        InputProps={{ style: { padding: 5 } }}
      />
      <FormField
        type="number"
        label="Establishment"
        value={establishmentValue}
        onChange={handleEstablishmentChange}
        onBlur={handleEstablishmentBlur}
        error={establishestablishmentError}
        name="establishment"
        variant="outlined"
        fullWidth
        InputProps={{ style: { padding: 5 } }}
      />
      <FormField
        type="number"
        label="TaxID"
        value={taxIdValue}
        onChange={handleTaxIdChange}
        onBlur={handleTaxIdBlur}
        error={taxIdError}
        name="taxId"
        variant="outlined"
        fullWidth
        InputProps={{ style: { padding: 5 } }}
      />
      <FormField
        select
        label="City"
        name="city"
        value={cityValue}
        onChange={handleCityChange}
        onBlur={handleCityBlur}
        error={cityError}
        fullWidth
        InputProps={{ style: { padding: 0 } }}
      >
        {CITIES.map((option) => {
          if (option === "All") {
            return (
              <MenuItem disabled key={option} value={option}>
                {option}
              </MenuItem>
            );
          }
          return (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          );
        })}
      </FormField>

      <FormField
        type="number"
        label="Number of Employees"
        value={employeeValue}
        onChange={handleEmployeeChange}
        onBlur={handleEmployeeBlur}
        error={employeeError}
        name="taxId"
        variant="outlined"
        fullWidth
        InputProps={{ style: { padding: 5 } }}
      />
    </FormSection>
  );
}

export default FormPersonalDataSection;
