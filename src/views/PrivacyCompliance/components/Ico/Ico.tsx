import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { CurveSvgCut } from 'components/atoms';
import { withTranslation } from 'i18n';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    backgroundColor: '#8D8D8D',
    minHeight: 400,
    padding: 60,
  },
  mainTitle: {
    fontSize: 28,
    textAlign: 'center',
    color: 'white',
    fontWeight: 600,
    fontStyle: 'italic',
  },
  gridContainer: {
    marginTop: 40,
  },
  normalText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    margin: 10,
    fontWeight: 'bold'
  },
  divider: {
    border: 'none',
    borderTop: '1px dotted #8D8D8D',
    color: '#fff',
    backgroundColor: '#fff',
    height: '1px',
    width: '100%',
  },
  topTextCotnainer: {
    minHeight: 80,
  },
}));

const Ico = ({ className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root} {...rest}>
      <CurveSvgCut position="topLeft" color="white" />
      <Typography variant="h1" className={classes.mainTitle}>
        {t('PRIVACY_COMPLIANCE_ICO')}
      </Typography>
      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item container sm={3} xs={6} data-aos="fade-up" alignItems="center" justify="center">
          <div>
            <div className={classes.topTextCotnainer}>
              <Typography className={classes.normalText}>{t('PRIVACY_COMPLIANCE_TEXT_GROUP_11')}</Typography>
            </div>
            <hr className={classes.divider} />
            <Typography className={classes.normalText}>{t('PRIVACY_COMPLIANCE_TEXT_GROUP_12')}</Typography>
          </div>
        </Grid>
        <Grid item container sm={3} xs={6} data-aos="fade-up" alignItems="center" justify="center">
          <div>
            <div className={classes.topTextCotnainer}>
              <Typography className={classes.normalText}>{t('PRIVACY_COMPLIANCE_TEXT_GROUP_21')}</Typography>
            </div>
            <hr className={classes.divider} />
            <Typography className={classes.normalText}>{t('PRIVACY_COMPLIANCE_TEXT_GROUP_22')}</Typography>
          </div>
        </Grid>
        <Grid item container sm={3} xs={6} data-aos="fade-up" alignItems="center" justify="center">
          <div>
            <div className={classes.topTextCotnainer}>
              <Typography className={classes.normalText}>{t('PRIVACY_COMPLIANCE_TEXT_GROUP_31')}</Typography>
            </div>
            <hr className={classes.divider} />
            <Typography className={classes.normalText}>{t('PRIVACY_COMPLIANCE_TEXT_GROUP_32')}</Typography>
          </div>
        </Grid>
        <Grid item container sm={3} xs={6} data-aos="fade-up" alignItems="center" justify="center">
          <div>
            <div className={classes.topTextCotnainer}>
              <Typography className={classes.normalText}>{t('PRIVACY_COMPLIANCE_TEXT_GROUP_41')}</Typography>
            </div>
            <hr className={classes.divider} />
            <Typography className={classes.normalText}>{t('PRIVACY_COMPLIANCE_TEXT_GROUP_42')}</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default withTranslation('privacyCompliance')(Ico);
