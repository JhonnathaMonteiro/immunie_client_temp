import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Avatar } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { DescriptionListIcon } from 'components/organisms';
import { withTranslation } from 'i18n';

const useStyles = makeStyles(theme => ({
  textWhite: {
    color: 'white',
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 0,
    background: 'transparent',
  },
  descriptionListIcon: {
    '& .description-list-icon__title, & .description-list-icon__subtitle': {
      color: 'white',
    },
  },
}));

const Integrations = ({ data, className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={
          <span className={classes.textWhite}>
            {t('INTEGRATION_TITLE')}
          </span>
        }
        subtitle={
          <span className={classes.textWhite}>
            {t('INTEGRATION_SUBTITLE')}
          </span>
        }
        data-aos="fade-up"
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item: any, index: number) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={4}
            md={4}
            data-aos={'fade-up'}
          >
            <DescriptionListIcon
              icon={
                <Avatar className={classes.avatar}>
                  <Image src={item.logo} alt={t(item.name)} />
                </Avatar>
              }
              title={t(item.name)}
              subtitle={t(item.title)}
              className={classes.descriptionListIcon}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default withTranslation('travelPage')(Integrations);
