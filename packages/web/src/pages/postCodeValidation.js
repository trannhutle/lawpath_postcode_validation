import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Button, Card, CardContent, Typography, Grid, CircularProgress } from "@material-ui/core";
import * as validationActions from "../action/validationAction";
import { useDispatch, useSelector } from "react-redux";
import { STATES } from "../utils/statics";
import { getPostcostValidationSchema } from "@lawpath/common";
import { useTranslation } from "react-i18next";
import { SetLocalisation } from "../utils/utils";
import { CustomSelect, CustomTextField } from "../components/forms";

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
  /* Reset localisation message */
  SetLocalisation();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  /* Subscribe to redux storage to listen to changes */
  const { errors, details, loading } = useSelector((state) => ({
    errors: state.postcode.errors,
    details: state.postcode.details,
    loading: state.postcode.loading,
  }));
  const [formData, setFormData] = useState(details);

  /**
   * Trigger validation process by sending request to back-end to get informtion about input location
   * @param {Object} data validated input form data
   */
  const onValidateFrom = (data) => {
    setFormData(data);
    dispatch(validationActions.resetErrors());
    dispatch(validationActions.validateLocationPostcode(data));
  };

  return (
    <Formik
      initialValues={formData}
      onSubmit={(data) => {
        onValidateFrom(data);
      }}
      validationSchema={getPostcostValidationSchema({
        location: t("postcode.fields.location"),
        state: t("postcode.fields.state"),
        postcode: t("postcode.fields.postcode"),
      })}
    >
      {({ isSubmitting, isValid, dirty, success }) => (
        <Form>
          <CustomTextField
            name="location"
            label={t("postcode.fields.location")}
            inputProps={{
              "data-testid": "location",
            }}
            customError={errors.location}
            customErrorText={t("postcode.errorMsgs.location", { location: formData.location || "" })}
            formControlProps={style.formControl}
            {...style.textField}
          />
          <CustomTextField
            name="postcode"
            label={t("postcode.fields.postcode")}
            customError={errors.postcode}
            customErrorText={t("postcode.errorMsgs.postcode", {
              location: formData.location || "",
              postcode: formData.postcode || "",
            })}
            inputProps={{
              "data-testid": "postcode",
            }}
            formControlProps={style.formControl}
            {...style.textField}
          />
          <CustomSelect
            name="state"
            label={t("postcode.fields.state")}
            data={STATES}
            customError={errors.state}
            customErrorText={t("postcode.errorMsgs.state", {
              location: formData.location || "",
              state: STATES[formData.state] || "",
            })}
            inputProps={{
              "data-testid": "state",
            }}
            formControlProps={style.formControlSelect}
          ></CustomSelect>

          <Grid container justify="center" style={{ height: "50px" }}>
            {Object.values(errors).every((error) => error === false) && isSubmitting && !loading && !dirty ? (
              <Typography color="primary">{t("postcode.successMsg")}</Typography>
            ) : null}
            {loading ? <CircularProgress color="secondary" /> : null}
          </Grid>

          <Grid container justify="center">
            <Button
              alt="submitPostcodeFormBtn"
              disabled={!isValid || (!isValid && errors.submitFailed)}
              variant="outlined"
              color="primary"
              type="submit"
            >
              {t("postcode.find")}
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

const PostCodeValidation = () => {
  const { t } = useTranslation();
  return (
    <Grid container justify="center">
      <Card style={{ minWidth: "100%" }}>
        <CardContent>
          <Typography variant="h4" component="h4" align="center" className="text-upper">
            {t("postcode.title")}
          </Typography>
          <PostCodeValidationForm />
        </CardContent>
      </Card>
    </Grid>
  );
};
export default PostCodeValidation;
