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
  itemTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10
  },
  itemContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  itemImage: {
    width: 240,
    margin: '0 auto',
  },
  downloadLink: {
    cursor: 'pointer',
    color: 'blue',
    textAlign: 'center',
  },
}));

const Catalogs = ({ className, data, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={className} {...rest}>
      <SectionHeader title={t('CATALOGS_TITLE')} align="left" />
      <Grid container spacing={4} className={classes.contentContainer}>
        {data.map(item => (
          <Grid key={item.title} item xs={12} md={4}>
            <div className={classes.itemContainer}>
              <Typography className={classes.itemTitle}>{t(`${item.title}`)}</Typography>
              <Image src={item.icon} className={classes.itemImage} />
              <a href={item.link} download>
                <Typography className={classes.downloadLink}>Download.pdf</Typography>
              </a>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default withTranslation('mediaAssetsPage')(Catalogs);
