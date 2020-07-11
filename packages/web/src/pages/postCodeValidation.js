import React, { useState } from "react";
import { Formik, Field, Form, useField, FieldArray } from "formik";
import { TextField, Button, Select, MenuItem, FormHelperText, FormControl } from "@material-ui/core";
import * as yup from "yup";
import { connect } from "react-redux";
import * as validationActions from "../action/validationAction";
import { useDispatch, useSelector } from "react-redux";

const STATES = [
  {
    name: "Austrlian Capital Territory",
    code: "ACT",
  },
  {
    name: "New South Wales",
    code: "NSW",
  },
  {
    name: "Northern Territory",
    code: "NT",
  },
  {
    name: "Queensland",
    code: "Qld",
  },
  {
    name: "South Australia",
    code: "ST",
  },
  {
    name: "Victoria",
    code: "VIC",
  },
  {
    name: "Tasmania",
    code: "TAS",
  },
  {
    name: "Western Australia",
    code: "WT",
  },
];

const CustomedTextField = ({ label, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return <TextField placeholder={placeholder} helperText={errorText} {...field} error={!!errorText} />;
};
const CustomedSelect = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <FormControl>
      <Select helperText={errorText} {...field}>
        {children}
      </Select>
      <FormHelperText error={!!errorText}>{errorText}</FormHelperText>
    </FormControl>
  );
};

const validationSchema = yup.object({
  surburb: yup.string().label("Surburb").required().max(35),
  postcode: yup.number().label("Post Code").required().positive().typeError("Postcode must be number"),
  state: yup.string().label("State").required(),
});

function PostCodeValidation() {
  const [formData, setFormData] = useState({ surburb: "", postcode: undefined, state: "" });
  const count = useSelector((state) => state.formData);
  const dispatch = useDispatch();

  const onValidateFrom = (formData) => {
    dispatch(validationActions.submitRequest(formData));
  };

  return (
    <Formik
      initialValues={formData}
      onSubmit={(data, { setSubmiting, resetForm }) => {
        // setSubmiting(true);
        onValidateFrom(data);
        // setSubmiting(false);
      }}
      validationSchema={validationSchema}
    >
      {({ values, errors, isSubmitting }) => (
        <Form>
          <div>
            <CustomedTextField placeholder="Surburb" name="surburb" type="input" as={TextField} />
          </div>
          <div>
            <CustomedTextField placeholder="Post code" name="postcode" type="input" as={TextField} />
          </div>
          <div>
            <CustomedSelect name="state">
              {STATES.map((state, index) => {
                return (
                  <MenuItem id={`${state}_${index}`} value={state.code}>
                    {state.name}
                  </MenuItem>
                );
              })}
            </CustomedSelect>
          </div>
          <div>
            <Button disable={isSubmitting} type="submit">
              Submit
            </Button>
          </div>
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
}
export default PostCodeValidation;
