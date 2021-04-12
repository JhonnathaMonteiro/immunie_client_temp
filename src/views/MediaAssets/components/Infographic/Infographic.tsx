import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { withTranslation } from 'i18n';

const useStyles = makeStyles(theme => ({
  contentContainer: {
    background: theme.palette.alternate.main,
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  downloadLink: {
    cursor: 'pointer',
    color: 'blue',
    textAlign: 'center',
  },
  itemTitle: {
    fontSize: '22pt',
    fontWeight: 'bold',
  },
  mainText: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: '14pt'
  },
}));

const Infographic = ({ className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={className} {...rest}>
      <SectionHeader title={t('INFOGRAPHIC_TITLE')} align="left" />
      <Grid container spacing={6} className={classes.contentContainer}>
        <Grid item xs={12} md={6} spacing={2}>
          <Typography className={classes.itemTitle}>{t('INFOGRAPHIC_CARD_TITLE')}</Typography>
          <Typography className={classes.mainText}>{t('INFOGRAPHIC_CARD_TEXT')}</Typography>
          <Typography>{t('INFOGRAPHIC_CARD_DISCLAIMER')}</Typography>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imageContainer}>
          <Image
            src="/static/images/illustrations/isometric_immunie_blockchain_clean.jpg"
            style={{ margin: '0 auto', border: '4px solid black' }}
          />
          <a href="https://immunie-media-assets.s3.eu-central-1.amazonaws.com/infografico_immunie_blockchain_tamanho_A4.pdf" download>
            <Typography className={classes.downloadLink}>Download.pdf</Typography>
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default withTranslation('mediaAssetsPage')(Infographic);
