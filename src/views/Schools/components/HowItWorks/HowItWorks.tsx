import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Button, useMediaQuery, colors } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { CardBase, DescriptionListIcon } from 'components/organisms';
import { Image } from 'components/atoms';
import { withTranslation } from 'i18n';

const useStyles = makeStyles(theme => ({
  iconCover: {
    width: 60,
    height: 60,
    background: 'url(https://assets.maccarianagency.com/the-front/illustrations/bgicon.svg) no-repeat center center',
    backgroundSize: 'contain',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.yellow[700],
    fontSize: 35,
    [theme.breakpoints.up('md')]: {
      width: 80,
      height: 80,
      fontSize: 40,
    },
  },
  icon: {
    width: 60,
    height: 60
  },
  cta: {
    marginTop: theme.spacing(3),
  },
}));

const HowItWorks = ({ data, className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <CardBase withShadow>
        <>
        <SectionHeader label={t('HOW_IT_WORKS_LABEL')} title={t('HOW_IT_WORKS_TITLE')} />
        <Grid container spacing={isMd ? 4 : 2}>
          {data.map((item: any, index: number) => (
            <Grid item xs={12} md={4} key={index} data-aos="fade-up">
              <DescriptionListIcon
                icon={
                  <div className={classes.iconCover}>
                    <Image className={classes.icon} src={item.icon}/>
                  </div>
                }
                title={t(item.title)}
                subtitle={t(item.subtitle)}
              />
            </Grid>
          ))}
        </Grid>
        <Button
          href="mailto:contact@immunie.net"
          color="primary"
          variant="contained"
          size="large"
          className={classes.cta}
        >
          {t('HOW_IT_WORKS_BTN_TEXT')}
        </Button>
        </>
      </CardBase>
    </div>
  );
};

export default withTranslation('schoolPage')(HowItWorks);
