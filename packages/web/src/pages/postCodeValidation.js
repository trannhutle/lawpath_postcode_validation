import React, { useState } from "react";
import { Formik, Field, Form, useField, FieldArray } from "formik";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormHelperText,
  FormControl,
  Box,
  Paper,
  Card,
  CardContent,
  Typography,
  Grid,
  InputLabel,
  CircularProgress,
} from "@material-ui/core";
import * as yup from "yup";
import * as validationActions from "../action/validationAction";
import { useDispatch, useSelector } from "react-redux";
import { STATES } from "../utils/statics";

const CustomedTextField = ({ customError, customErrorText, placeholder, formControlProps, ...props }) => {
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

const CustomedSelect = ({ data, label, customError, customErrorText, formControlProps, ...props }) => {
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

const validationSchema = yup.object({
  location: yup.string().label("Surburb").required().max(35),
  postcode: yup.number().label("Postcode").required().positive().typeError("Postcode must be number"),
  state: yup.string().label("State").required(),
});

const style = {
  textField: {
    variant: "outlined",
  },
  formControl: {
    fullWidth: true,
    margin: "dense",
    variant: "outlined",
  },
  formControlSelect: {
    fullWidth: true,
    margin: "normal",
    variant: "outlined",
  },
};

const PostCodeValidationForm = () => {
  const { errors, details, loading } = useSelector((state) => ({
    errors: state.postcode.errors,
    details: state.postcode.details,
    loading: state.postcode.loading,
  }));
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(details);

  const onValidateFrom = (data) => {
    setFormData(data);
    dispatch(validationActions.resetErrors());
    dispatch(validationActions.validateLocationPostcode(data));
  };

  return (
    <Formik
      initialValues={formData}
      onSubmit={(data, { setSubmiting, resetForm }) => {
        onValidateFrom(data);
      }}
      validationSchema={validationSchema}
    >
      {/* {(props, { isSubmitting }) => ( */}
      {({ values, err, isSubmitting, isValid, dirty, success }) => (
        <Form>
          <CustomedTextField
            label="Surburb"
            name="location"
            type="input"
            as={TextField}
            customError={errors.location}
            customErrorText={`The ${formData.location} surburb is not found`}
            formControlProps={style.formControl}
            {...style.textField}
          />
          <CustomedTextField
            label="Postcode"
            name="postcode"
            type="input"
            as={TextField}
            customError={errors.postcode}
            customErrorText={`The postcode ${formData.postcode} does not match the surburb ${formData.location}`}
            formControlProps={style.formControl}
            {...style.textField}
          />
          <CustomedSelect
            name="state"
            label="State"
            data={STATES}
            customError={errors.state}
            customErrorText={`The surburb ${formData.location} does not exist in the state ${STATES[formData.state]}`}
            formControlProps={style.formControlSelect}
          ></CustomedSelect>

          <Grid container justify="center" style={{ height: "50px" }}>
            {Object.values(errors).every((error) => error === false) && isSubmitting && !loading && !dirty ? (
              <Typography color="primary">The postcode, suburb and state entered are valid</Typography>
            ) : null}
            {loading ? <CircularProgress color="secondary" /> : null}
          </Grid>
          <Grid container justify="center">
            <Button disabled={!dirty || !isValid} variant="outlined" color="primary" type="submit">
              Find
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

function PostCodeValidation() {
  return (
    <Grid container justify="center">
      <Card style={{ minWidth: "100%" }}>
        <CardContent>
          <Typography variant="h4" component="h4" align="center" className="text-upper">
            Search postcode
          </Typography>
          <PostCodeValidationForm />
        </CardContent>
      </Card>
    </Grid>
  );
}
export default PostCodeValidation;
