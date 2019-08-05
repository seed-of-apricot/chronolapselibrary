import React from 'react';
import { ButtonBase, createStyles, makeStyles, Fade } from '@material-ui/core';
import { Link } from 'react-router-dom';
import BrandLogo from '@src/components/atoms/BrandLogo';
import BrandTypography from '@src/components/atoms/BrandTypography';

interface BrandBarProps {
  size: number;
  showTypography: boolean;
}

const BrandBar: React.FC<BrandBarProps> = (props: BrandBarProps) => {
  return (
    <Link to={'/'}>
      <BrandLogo size={2 * props.size} />
      <Fade in={props.showTypography}>
        <BrandTypography size={props.size} />
      </Fade>
    </Link>
  );
};

export default BrandBar;
