import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Divider } from '@material-ui/core';
import { SectionHeader, DescriptionCta } from 'components/molecules';
import { Section } from 'components/organisms';
import { withTranslation } from 'i18n';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    '& .description-cta__button-group': {
      flexWrap: 'nowrap',
    },
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  divider: {
    margin: theme.spacing(3, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(5, 0),
    },
  },
}));

const TOC = ({ className, t, ...rest }: TOCPageProps): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
        <>
          <DescriptionCta
            title={t('FRONT_END_TERMS_AND_CONDITIONS_PAGE_TITLE')}
            subtitle="Updated on 04.08.2020"
            primaryCta={
              <></>
            }
            align={'left'}
            titleProps={{
              className: classes.fontWeightBold,
              color: 'textPrimary',
            }}
            subtitleProps={{
              color: 'textSecondary',
            }}
          />
          <Divider className={classes.divider} />
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12}>
              <SectionHeader
                title={t('FRONT_END_TERMS_AND_CONDITIONS_PAGE_HEADER_1')}
                subtitle={t('FRONT_END_TERMS_AND_CONDITIONS_PAGE_TXT_1')}
                align="left"
                titleProps={{
                  className: classes.fontWeightBold,
                  color: 'textPrimary',
                }}
                subtitleProps={{
                  variant: 'body1',
                  color: 'textPrimary',
                }}
              />
              <SectionHeader
                title={t('FRONT_END_TERMS_AND_CONDITIONS_PAGE_HEADER_2')}
                subtitle={t('FRONT_END_TERMS_AND_CONDITIONS_PAGE_TXT_2')}
                align="left"
                titleProps={{
                  className: classes.fontWeightBold,
                  color: 'textPrimary',
                }}
                subtitleProps={{
                  variant: 'body1',
                  color: 'textPrimary',
                }}
                disableGutter
              />
              <SectionHeader
                className={classes.pagePaddingTop}
                title={t('FRONT_END_TERMS_AND_CONDITIONS_PAGE_HEADER_3')}
                subtitle={t('FRONT_END_TERMS_AND_CONDITIONS_PAGE_TXT_3')}
                align="left"
                titleProps={{
                  className: classes.fontWeightBold,
                  color: 'textPrimary',
                }}
                subtitleProps={{
                  variant: 'body1',
                  color: 'textPrimary',
                }}
                disableGutter
              />
              <SectionHeader
                className={classes.pagePaddingTop}
                title={t('FRONT_END_TERMS_AND_CONDITIONS_PAGE_HEADER_4')}
                subtitle={t('FRONT_END_TERMS_AND_CONDITIONS_PAGE_TXT_4')}
                align="left"
                titleProps={{
                  className: classes.fontWeightBold,
                  color: 'textPrimary',
                }}
                subtitleProps={{
                  variant: 'body1',
                  color: 'textPrimary',
                }}
                disableGutter
              />
              <SectionHeader
                className={classes.pagePaddingTop}
                title={t('FRONT_END_TERMS_AND_CONDITIONS_PAGE_HEADER_5')}
                subtitle={t('FRONT_END_TERMS_AND_CONDITIONS_PAGE_TXT_5')}
                align="left"
                titleProps={{
                  className: classes.fontWeightBold,
                  color: 'textPrimary',
                }}
                subtitleProps={{
                  variant: 'body1',
                  color: 'textPrimary',
                }}
                disableGutter
              />
              <SectionHeader
                className={classes.pagePaddingTop}
                title={t('FRONT_END_TERMS_AND_CONDITIONS_PAGE_HEADER_6')}
                subtitle={t('FRONT_END_TERMS_AND_CONDITIONS_PAGE_TXT_6')}
                align="left"
                titleProps={{
                  className: classes.fontWeightBold,
                  color: 'textPrimary',
                }}
                subtitleProps={{
                  variant: 'body1',
                  color: 'textPrimary',
                }}
                disableGutter
              />
              <SectionHeader
                className={classes.pagePaddingTop}
                title={t('FRONT_END_TERMS_AND_CONDITIONS_PAGE_HEADER_7')}
                subtitle={t('FRONT_END_TERMS_AND_CONDITIONS_PAGE_TXT_7')}
                align="left"
                titleProps={{
                  className: classes.fontWeightBold,
                  color: 'textPrimary',
                }}
                subtitleProps={{
                  variant: 'body1',
                  color: 'textPrimary',
                }}
                disableGutter
              />
              <SectionHeader
                className={classes.pagePaddingTop}
                title={t('FRONT_END_TERMS_AND_CONDITIONS_PAGE_HEADER_8')}
                subtitle={t('FRONT_END_TERMS_AND_CONDITIONS_PAGE_TXT_8')}
                align="left"
                titleProps={{
                  className: classes.fontWeightBold,
                  color: 'textPrimary',
                }}
                subtitleProps={{
                  variant: 'body1',
                  color: 'textPrimary',
                }}
                disableGutter
              />
              <SectionHeader
                className={classes.pagePaddingTop}
                title={t('FRONT_END_TERMS_AND_CONDITIONS_PAGE_HEADER_9')}
                subtitle={t('FRONT_END_TERMS_AND_CONDITIONS_PAGE_TXT_9')}
                align="left"
                titleProps={{
                  className: classes.fontWeightBold,
                  color: 'textPrimary',
                }}
                subtitleProps={{
                  variant: 'body1',
                  color: 'textPrimary',
                }}
                disableGutter
              />
              <SectionHeader
                className={classes.pagePaddingTop}
                title={t('FRONT_END_TERMS_AND_CONDITIONS_PAGE_HEADER_10')}
                subtitle={t('FRONT_END_TERMS_AND_CONDITIONS_PAGE_TXT_10')}
                align="left"
                titleProps={{
                  className: classes.fontWeightBold,
                  color: 'textPrimary',
                }}
                subtitleProps={{
                  variant: 'body1',
                  color: 'textPrimary',
                }}
                disableGutter
              />
            </Grid>
          </Grid>
        </>
      </Section>
    </div>
  );
};

export default withTranslation('tocPage')(TOC);
