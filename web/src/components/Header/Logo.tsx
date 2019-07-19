import React from 'react';
import { ButtonBase, createStyles, makeStyles } from '@material-ui/core';
import logo from 'assets/image/logo/1x/index.png';
import Text from './Text';
import { Link } from 'react-router-dom';

interface IProps {
  size: number;
  hideTypography: boolean;
}

const useStyles = (props: IProps) => {
  const size = props.size;
  return makeStyles(() =>
    createStyles({
      root: {
        width: 2 * size,
        height: 2 * size,
        float: 'left',
        '& span': {
          borderRadius: 2 * size
        }
      }
    })
  )(props);
};

const Logo: React.FC<IProps> = (props: IProps) => {
  const classes = useStyles(props);
  return (
    <React.Fragment>
      <ButtonBase className={classes.root} component={Link} to={'/'}>
        <img src={logo} style={{ height: 2 * props.size }} />
      </ButtonBase>
      <Text size={props.size} hideTypography={props.hideTypography} />
    </React.Fragment>
  );
};

export default Logo;
