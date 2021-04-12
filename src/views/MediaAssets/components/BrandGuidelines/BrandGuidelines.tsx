import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  Typography, Grid } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { withTranslation } from 'i18n';

const useStyles = makeStyles(theme => ({
  articleDate: {
    margin: theme.spacing(2, 0),
    cursor: 'pointer',
  },
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
  contentMainText: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: '14pt',
  },
}));

const BrandGuidelines = ({ className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={className} {...rest}>
      <SectionHeader label={t('BRAND_GUIDELINES_TITLE')} title={t('BRAND_GUIDELINES_SUB_TITLE')} align="left" />
      <Grid container spacing={6} className={classes.contentContainer}>
        
        <Grid item xs={12} md={6} spacing={2}>
          <Typography className={classes.itemTitle}>{t('BRAND_GUIDELINES_ITEM_1_TITLE')}</Typography>
          <Typography className={classes.contentMainText}>{t('BRAND_GUIDELINES_ITEM_1_TEXT')}</Typography>
          <Typography>{t('BRAND_GUIDELINES_ITEM_1_DISCLAIMER')}</Typography>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imageContainer}>
          <Image src="/static/images/logos/brand_with_name.svg" style={{ width: 300, margin: '0 auto' }} />
          <a href="/static/images/logos/brand_with_name.svg" download>
            <Typography className={classes.downloadLink}>Download.svg</Typography>
          </a>
        </Grid>
        
        <Grid item xs={12} md={6} spacing={2}>
          <Typography className={classes.itemTitle}>{t('BRAND_GUIDELINES_ITEM_2_TITLE')}</Typography>
          <Typography className={classes.contentMainText}>{t('BRAND_GUIDELINES_ITEM_2_TEXT')}</Typography>
          <Typography>{t('BRAND_GUIDELINES_ITEM_2_DISCLAIMER')}</Typography>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imageContainer}>
          <Image
            src="/static/images/illustrations/brand_guidelines_thumb.png"
            style={{ width: 300, margin: '0 auto', border: '4px solid black' }}
          />
          <a
            href="https://immunie-media-assets.s3.eu-central-1.amazonaws.com/Brand_Guidelines_Immunie_2021.pdf"
            download
          >
            <Typography className={classes.downloadLink}>Download.pdf</Typography>
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default withTranslation('mediaAssetsPage')(BrandGuidelines);
