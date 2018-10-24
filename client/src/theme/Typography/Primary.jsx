import React from "react";
import PropTypes from "prop-types";
// @material-ui/core theme
import withStyles from "@material-ui/core/styles/withStyles";
// core theme
import typographyStyle from "../../assets/jss/material-dashboard-react/components/typographyStyle.jsx";

function Primary({ ...props }) {
  const { classes, children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.primaryText}>
      {children}
    </div>
  );
}

Primary.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(typographyStyle)(Primary);
