import React from "react";
import { Field, useField } from "formik";
import { TextField, Select, MenuItem, FormHelperText, FormControl, InputLabel } from "@material-ui/core";

export const CustomedSelect = ({ data, label, customError, customErrorText, formControlProps, ...props }) => {
  const [field, meta] = useField(props);
  let errorText =
    meta.error && meta.touched ? meta.error : customError && meta.value === meta.initialValue ? customErrorText : "";
  return (
    <FormControl {...formControlProps} error={!!errorText}>
      <InputLabel>{label}</InputLabel>
      <Select {...field} label={label}>
        {Object.keys(data).map((key, index) => (
          <MenuItem id={`${key}_${index}`} value={key}>
            {data[key]}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText error={!!errorText}>{errorText} </FormHelperText>
    </FormControl>
  );
};

export const CustomedTextField = ({ customError, customErrorText, placeholder, formControlProps, ...props }) => {
  const [field, meta] = useField(props);
  // Custome error message only show when the new input is similar with the last old one.
  let errorText =
    meta.error && meta.touched ? meta.error : customError && meta.value === meta.initialValue ? customErrorText : "";
  return (
    <FormControl {...formControlProps} error={!!errorText}>
      <TextField {...field} {...props} helperText={errorText} error={!!errorText} />
    </FormControl>
  );
};
