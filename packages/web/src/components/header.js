import React from "react";
import { AppBar, Toolbar, IconButton, Typography, MenuItem } from "@material-ui/core";
import TranslateIcon from "@material-ui/icons/Translate";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import { availableLanguages } from "../i18n";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

export const Headers = ({ changeLanguage }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const onclickItem = (language) => {
    setAnchorEl(null);
    if (language) {
      changeLanguage(language);
    }
  };

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
