import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  colors,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { HeroShaped } from 'components/organisms';
import { withTranslation } from 'i18n';

const useStyles = makeStyles(theme => ({
  root: {
    '& .hero-shaped': {
      borderBottom: 0,
    },
  },
  sectionHeader: {
    maxWidth: '100%',
    padding: theme.spacing(0, 2),
  },
  cover: {
    position: 'relative',
    zIndex: 9,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    background:
      'url(https://assets.maccarianagency.com/the-front/illustrations/patterns-bg.svg) no-repeat left bottom',
    backgroundSize: 'contain',
  },
  image: {
    objectFit: 'contain',
    width: 'auto',
    maxWidth: '100%',
  },
  listItemAvatar: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    alignSelf: 'flex-start',
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(4),
    },
  },
  title: {
    fontWeight: 'bold',
  },
  listIcons: {
    width: 60
  }
}));

const BuildFor = ({ data, className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={t('WHY_DIGITAL_WALLET_TITLE')}
        subtitle={t('WHY_DIGITAL_WALLET_SUBTITLE')}
        className={classes.sectionHeader}
        data-aos="fade-up"
      />
      <HeroShaped
        leftSide={
          <List disablePadding>
            {data.map((item: any, index: number) => (
              <ListItem disableGutters key={index} data-aos="fade-up">
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Image
                    className={classes.listIcons}
                    src={item.icon}
                    color={colors.blue}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={t(item.title)}
                  secondary={t(item.subtitle)}
                  primaryTypographyProps={{
                    variant: 'h6',
                    className: classes.title,
                    gutterBottom: true,
                  }}
                  secondaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textPrimary',
                  }}
                />
              </ListItem>
            ))}
          </List>
        }
        rightSide={
          <div className={classes.cover}>
            <Image
              src="/static/images/photos/people_mockup.png"
              className={classes.image}
              lazy={false}
            />
          </div>
        }
      />
    </div>
  );
};

export default withTranslation("peoplePage")(BuildFor);
