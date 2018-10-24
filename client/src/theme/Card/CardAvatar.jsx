import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for theme
import PropTypes from "prop-types";
// @material-ui/core theme
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core theme

import cardAvatarStyle from "../../assets/jss/material-dashboard-react/components/cardAvatarStyle.jsx";

function CardAvatar({ ...props }) {
  const { classes, children, className, plain, profile, ...rest } = props;
  const cardAvatarClasses = classNames({
    [classes.cardAvatar]: true,
    [classes.cardAvatarProfile]: profile,
    [classes.cardAvatarPlain]: plain,
    [className]: className !== undefined
  });
  return (
    <div className={cardAvatarClasses} {...rest}>
      {children}
    </div>
  );
}

CardAvatar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  profile: PropTypes.bool,
  plain: PropTypes.bool
};

export default withStyles(cardAvatarStyle)(CardAvatar);
