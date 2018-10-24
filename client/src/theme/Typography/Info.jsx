import React from "react";
import PropTypes from "prop-types";
// @material-ui/core theme
import withStyles from "@material-ui/core/styles/withStyles";
// core theme
import typographyStyle from "../../assets/jss/material-dashboard-react/components/typographyStyle.jsx";

function Info({ ...props }) {
  const { classes, children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.infoText}>
      {children}
    </div>
  );
}

Info.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(typographyStyle)(Info);
