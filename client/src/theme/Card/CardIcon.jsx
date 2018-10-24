import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for theme
import PropTypes from "prop-types";
// @material-ui/core theme
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core theme
import cardIconStyle from "../../assets/jss/material-dashboard-react/components/cardIconStyle.jsx";

function CardIcon({ ...props }) {
  const { classes, className, children, color, ...rest } = props;
  const cardIconClasses = classNames({
    [classes.cardIcon]: true,
    [classes[color + "CardHeader"]]: color,
    [className]: className !== undefined
  });
  return (
    <div className={cardIconClasses} {...rest}>
      {children}
    </div>
  );
}

CardIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose"
  ])
};

export default withStyles(cardIconStyle)(CardIcon);
