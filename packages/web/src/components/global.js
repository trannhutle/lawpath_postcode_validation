import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { triggerNofification } from "../action/globalAction";
import { useTranslation } from "react-i18next";

const Alert = (props) => {
  return <MuiAlert elevation={3} variant="filled" {...props} />;
};

/**
 * PopupErrorMessage is used to display error message of at the bottom the the screen
 * It is subsribed to the redux storage to listen to changes to trigger showing/hiding error message
 */
export const PopupErrorMessage = () => {
  const { apiErrorMsg } = useSelector((state) => ({ apiErrorMsg: state.global.apiErrorMsg }));
  const dispatch = useDispatch();
  const { t } = useTranslation();

  /**
   * Handle close popup
   */
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(triggerNofification(false));
  };

  return (
    <div>
      <Snackbar open={apiErrorMsg.isShow} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {t(apiErrorMsg.message, "")}
        </Alert>
      </Snackbar>
    </div>
  );
};
