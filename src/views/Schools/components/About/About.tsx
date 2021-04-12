import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section, CardBase } from 'components/organisms';
import { withTranslation } from 'i18n';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.alternate.main,
    backgroundSize: 'cover',
    padding: theme.spacing(6, 0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(12, 0),
    },
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    minHeight: 470,
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  section: {
    paddingTop: 0,
  },
  sectionHeader: {
    padding: theme.spacing(0, 2),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      maxWidth: '50%',
      width: 'calc(100vw - 625px)',
      marginBottom: 0,
    },
  },
  textWhite: {
    color: 'white',
  },
  image: {
    alignSelf: 'flex-end',
    margin: "0 auto",
    maxWidth: 625,
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: '50%',
      right: 0,
      width: 'auto',
      transform: 'translateY(-50%) !important',
    },
  },
  card: {
    borderBottom: `4px solid ${theme.palette.secondary.main}`,
    '& .MuiCardContent-root': {
      padding: 30,
    },
  },
  cardTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(2),
  },
}));

const About = ({ className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={classes.hero}>
        <Section className={classes.section} disablePadding>
          <div className={classes.sectionHeader}>
            <Typography variant="h6" gutterBottom color="textPrimary">
              {t('ABOUT_LABEL')}
            </Typography>
            <SectionHeader
              title={t('ABOUT_TITLE')}
              subtitle={t('ABOUT_SUBTITLE')}
              subtitleColor="textPrimary"
              align="left"
              data-aos="fade-up"
            />
            <CardBase withShadow liftUp align="left" className={classes.card}>
              <>
              <Typography className={classes.cardTitle} variant="h6">
                {t('ABOUT_REVIEW_CARD_TITLE')}
              </Typography>
              <List disablePadding>
                <ListItem disableGutters>
                  <ListItemAvatar>
                    <Avatar
                      src="/static/images/photos/dra_helena.jpg"
                      srcSet="/static/images/photos/dra_helena@2x.jpg"
                      alt={t('ABOUT_REVIEW_CARD_AVATAR_TITLE')}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={t('ABOUT_REVIEW_CARD_AVATAR_TITLE')}
                    secondary={t('ABOUT_REVIEW_CARD_AVATAR_SUBTITLE')}
                  />
                </ListItem>
              </List>
              </>
            </CardBase>
          </div>
        </Section>
        <Image
          src="/static/images/photos/schools_health_form_macbook.png"
          className={classes.image}
          data-aos="fade-up"
          lazy={false}
        />
      </div>
    </div>
  );
};

export default withTranslation('schoolPage')(About);
