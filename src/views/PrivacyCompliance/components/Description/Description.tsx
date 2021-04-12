import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  Typography } from '@material-ui/core';
import { withTranslation } from 'i18n';
import { CurveSvgCut } from 'components/atoms'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundImage: "url(/static/images/backgrounds/save.svg)",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    minHeight: 400,
    width:" 100%",
    marginRight: 0,
    alignItems: 'center',
    position: 'relative'
  },
  title: {
    color: "#526164",
    fontSize: 42,
    marginBottom: 20,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  normalText: {
    fontSize: 22,
  },
  descriptionTextContainer: {
    maxWidth: 700,
    marginLeft: 60,
  },

}));

const Description = ({ className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root} {...rest}>
      <div className={classes.descriptionTextContainer}>
        <Typography variant="h1" className={classes.title}>
          {t('PRIVACY_COMPLIANCE')}
        </Typography>
        <Typography className={classes.normalText}>
          {t('PRIVACY_COMPLIANCE_DESCRIPTION')}
        </Typography>

      </div>
      <CurveSvgCut position="bottomRight" /> 
    </div>
  );
};

export default withTranslation('privacyCompliance')(Description);
