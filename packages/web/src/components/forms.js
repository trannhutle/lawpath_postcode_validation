import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";
import { TextField, Select, MenuItem, FormHelperText, FormControl, InputLabel } from "@material-ui/core";

/**
 * Custom select using material-ui by getting an object to generate
 * a list of option which has key is a value and value is a text of a element.
 *
 * By defalt this component is validated by Formik and applying rules by yup schema
 * customError is customed validation defined by user
 */
export const CustomSelect = ({ data, label, customError, customErrorText, formControlProps, ...props }) => {
  const [field, meta] = useField(props);
  let errorText =
    meta.error && meta.touched ? meta.error : customError && meta.value === meta.initialValue ? customErrorText : "";
  return (
    <FormControl {...formControlProps} error={!!errorText}>
      <InputLabel>{label}</InputLabel>
      <Select {...field} {...props} label={label}>
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
CustomSelect.propTypes = {
  /**
   * Data of select, it has to be an object with attributes.
   * The select items will be generated by value is a key and name is value of the key.
   */
  data: PropTypes.object.isRequired,

  /**
   * Label of select
   */
  label: PropTypes.string.isRequired,

  /**
   * Boolean value to show/hide custom error
   */
  customError: PropTypes.bool,

  /**
   * Text for error message
   */
  customErrorText: PropTypes.string,

  /**
   * Styling object of the wrapper form control for styling
   */
  formControlProps: PropTypes.object,
};

/**
 * Custom input fiel using material-ui
 * By defalt this component is validated by Formik and applying rules by yup schema
 * customError is customed validation defined by user
 */
export const CustomTextField = ({ placeholder, customError, customErrorText, formControlProps, ...props }) => {
  const [field, meta] = useField(props);

  /* Formik error message will be showed first, custom error message only show when the new input is similar with the last old one.*/
  let errorText =
    meta.error && meta.touched ? meta.error : customError && meta.value === meta.initialValue ? customErrorText : "";
  return (
    <FormControl {...formControlProps} error={!!errorText}>
      <TextField {...field} helperText={errorText} error={!!errorText} {...props} />
    </FormControl>
  );
};
CustomTextField.propTypes = {
  /**
   * Placeholder of the input text
   */
  placeholder: PropTypes.string.isRequired,

  /**
   * Boolean value to show/hide custom error
   */
  customError: PropTypes.bool,

  /**
   * Text for error message
   */
  customErrorText: PropTypes.string,

  /**
   * Styling object of the wrapper form control for styling
   */
  formControlProps: PropTypes.object,
};
