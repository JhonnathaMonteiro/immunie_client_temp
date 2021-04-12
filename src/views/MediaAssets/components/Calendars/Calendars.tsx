import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
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
    marginBottom: 10
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

const Calendars = ({ className, data, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={className} {...rest}>
      <SectionHeader title={t('CALENDARS_TITLE')} align="left" />
      
        {data.map(item => (
          <Grid key={item.title} container spacing={6} className={classes.contentContainer}>
            <Grid item xs={12} md={6} spacing={2}>
              <Typography className={classes.itemTitle}>{t(item.title)}</Typography>
              <Typography className={classes.contentMainText}>{t(item.text)}</Typography>
              <Typography>{t(item.disclaimer)}</Typography>
            </Grid>
            <Grid item xs={12} md={6} className={classes.imageContainer}>
              <Image src={item.icon} style={{ width: 300, margin: '0 auto' }} />
              <a href={item.link} download>
                <Typography className={classes.downloadLink}>Download.jpg</Typography>
              </a>
            </Grid>
          </Grid>
        ))}
    </div>
  );
};

export default withTranslation('mediaAssetsPage')(Calendars);
