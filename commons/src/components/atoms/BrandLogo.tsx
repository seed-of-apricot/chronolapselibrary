import React from 'react';
import { ButtonBase, createStyles, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
const logo = require('assets/images/logo/index.png');

interface LogoProps {
  size: number;
}

const useStyles = (props: LogoProps) => {
  const size = props.size;
  return makeStyles(() =>
    createStyles({
      buttonBase: {
        width: size,
        height: size,
        '& span': {
          borderRadius: size
        }
      }
    })
  )(props);
};

const Logo: React.FC<LogoProps> = (props: LogoProps) => {
  const classes = useStyles(props);
  return (
    <ButtonBase className={classes.buttonBase}>
      <img src={logo} style={{ height: 2 * props.size }} />
    </ButtonBase>
  );
};

export default Logo;
