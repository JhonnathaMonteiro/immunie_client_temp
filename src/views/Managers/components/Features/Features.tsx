import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Avatar } from '@material-ui/core';
import { LearnMoreLink } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { withTranslation } from 'i18n';

const useStyles = makeStyles(theme => ({
  webinarAvatar: {
    width: 200,
    height: 200,
    border: `${theme.spacing(1)}px solid ${theme.palette.background.paper}`,
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
    borderRadius: theme.spacing(2),
  },
  listGrid: {
    overflow: 'hidden',
    marginBottom: theme.spacing(3),
    '&:last-child': {
      marginBottom: theme.spacing(0),
    },
  },
}));

const Features = ({ data, className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={t('FEATURES_TITLE')}
        subtitle={t('FEATURES_SUBTITLE')}
        ctaGroup={[
          <LearnMoreLink
            title={t('FEATURES_LEARN_MORE_TITLE')}
            variant="h6"
            color="primary"
            href="mailto:contact@immunie.net"
          />
        ]}
        fadeUp
      />
      <Grid container justify="center">
        {data.map((item: any, index: number) => (
          <Grid
            key={index}
            item
            container
            data-aos={'fade-up'}
            justify="space-between"
            spacing={isMd ? 4 : 2}
            className={classes.listGrid}
            direction="row-reverse"
          >
            <Grid item xs={12} sm={12} md={8}>
              <SectionHeader
                label={t(item.authorName)}
                titleVariant="h5"
                title={t(item.title)}
                subtitle={t(item.description)}
                align={isMd ? 'left' : 'center'}
                disableGutter
              />
            </Grid>
            <Grid
              item
              container
              xs={12}
              sm={12}
              md={4}
              justify={isMd ? 'flex-end' : 'center'}
              alignItems="center"
            >
              <Avatar
                {...item.authorPhoto}
                alt={item.authorName}
                className={classes.webinarAvatar}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default withTranslation('managersPage')(Features);
