import React from "react";
import { AppBar, Toolbar, IconButton, Typography, MenuItem } from "@material-ui/core";
import TranslateIcon from "@material-ui/icons/Translate";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import { availableLanguages } from "../i18n";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

/**
 * A header component of the application
 */
export const Headers = ({ changeLanguage }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  /**
   * Handle onlick of select item to change language
   */
  const onclickItem = (language) => {
    setAnchorEl(null);
    if (language) {
      changeLanguage(language);
    }
  };

  /**
   * Trigger showing menu language
   */
  const showMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.title} variant="h6">
          Lawpath
        </Typography>
        <div>
          <IconButton aria-controls="menu-appbar" aria-haspopup="true" onClick={showMenu} color="inherit">
            <TranslateIcon />
            <ArrowDropDownIcon />
          </IconButton>
          <Menu id="menu-appbar" anchorEl={anchorEl} open={open} onClose={showMenu}>
            {Object.keys(availableLanguages).map((language) => {
              return (
                <MenuItem
                  onClick={() => {
                    onclickItem(language);
                  }}
                >
                  {availableLanguages[language]}
                </MenuItem>
              );
            })}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};
Headers.prototype = {
  /**
   * Is a function to trigger changing language function from higher component.
   */
  changeLanguage: PropTypes.func.isRequired,
};
