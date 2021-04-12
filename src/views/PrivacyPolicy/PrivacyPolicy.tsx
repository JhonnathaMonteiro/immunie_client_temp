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

const PrivacyPolicy = ({ className, t, ...rest }: PrivacyPolicyPageProps): JSX.Element => {
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
            title={t('PRIVACY_POLICY_PAGE_HEADER_1')}
            subtitle={t('PRIVACY_POLICY_PAGE_TXT_1')}
            primaryCta={<></>}
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
                title={t('PRIVACY_POLICY_PAGE_HEADER_2')}
                subtitle={t('PRIVACY_POLICY_PAGE_TXT_2')}
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
                title={t('PRIVACY_POLICY_PAGE_HEADER_3')}
                subtitle={t('PRIVACY_POLICY_PAGE_TXT_3')}
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
                title={t('PRIVACY_POLICY_PAGE_HEADER_4')}
                subtitle={t('PRIVACY_POLICY_PAGE_TXT_4')}
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
                title={t('PRIVACY_POLICY_PAGE_HEADER_5')}
                subtitle={t('PRIVACY_POLICY_PAGE_TXT_5')}
                align="left"
                titleProps={{
                  className: classes.fontWeightBold,
                  variant: "h6",
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
                title={t('PRIVACY_POLICY_PAGE_HEADER_6')}
                subtitle={t('PRIVACY_POLICY_PAGE_TXT_6')}
                align="left"
                titleProps={{
                  className: classes.fontWeightBold,
                  variant: "h6",
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
                title={t('PRIVACY_POLICY_PAGE_HEADER_7')}
                subtitle={t('PRIVACY_POLICY_PAGE_TXT_7')}
                align="left"
                titleProps={{
                  variant: "h6",
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
                title={t('PRIVACY_POLICY_PAGE_HEADER_8')}
                subtitle={t('PRIVACY_POLICY_PAGE_TXT_8')}
                align="left"
                titleProps={{
                  variant: "h6",
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
                title={t('PRIVACY_POLICY_PAGE_HEADER_9')}
                subtitle={t('PRIVACY_POLICY_PAGE_TXT_9')}
                align="left"
                titleProps={{
                  variant: "h6",
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
                title={t('PRIVACY_POLICY_PAGE_HEADER_10')}
                subtitle={t('PRIVACY_POLICY_PAGE_TXT_10')}
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
                title={t('PRIVACY_POLICY_PAGE_HEADER_11')}
                subtitle={t('PRIVACY_POLICY_PAGE_TXT_11')}
                align="left"
                titleProps={{
                  variant: "h6",
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
                title={t('PRIVACY_POLICY_PAGE_HEADER_12')}
                subtitle={t('PRIVACY_POLICY_PAGE_TXT_12')}
                align="left"
                titleProps={{
                  variant: "h6",
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
                title={t('PRIVACY_POLICY_PAGE_HEADER_13')}
                subtitle={t('PRIVACY_POLICY_PAGE_TXT_13')}
                align="left"
                titleProps={{
                  variant: "h6",
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
                title={t('PRIVACY_POLICY_PAGE_HEADER_14')}
                subtitle={t('PRIVACY_POLICY_PAGE_TXT_14')}
                align="left"
                titleProps={{
                  variant: "h6",
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
                title={t('PRIVACY_POLICY_PAGE_HEADER_15')}
                subtitle={t('PRIVACY_POLICY_PAGE_TXT_15')}
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
                title={t('PRIVACY_POLICY_PAGE_HEADER_16')}
                subtitle={t('PRIVACY_POLICY_PAGE_TXT_16')}
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
                title={t('PRIVACY_POLICY_PAGE_HEADER_17')}
                subtitle={t('PRIVACY_POLICY_PAGE_TXT_17')}
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
                title={t('PRIVACY_POLICY_PAGE_HEADER_18')}
                subtitle={t('PRIVACY_POLICY_PAGE_TXT_18')}
                align="left"
                titleProps={{
                  variant: "h6",
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
                title={t('PRIVACY_POLICY_PAGE_HEADER_19')}
                subtitle={t('PRIVACY_POLICY_PAGE_TXT_19')}
                align="left"
                titleProps={{
                  variant: "h6",
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
                title={t('PRIVACY_POLICY_PAGE_HEADER_20')}
                subtitle={t('PRIVACY_POLICY_PAGE_TXT_20')}
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
                title={t('PRIVACY_POLICY_PAGE_HEADER_21')}
                subtitle={t('PRIVACY_POLICY_PAGE_TXT_21')}
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
                title={t('PRIVACY_POLICY_PAGE_HEADER_22')}
                subtitle={t('PRIVACY_POLICY_PAGE_TXT_22')}
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

export default withTranslation('privacyPolicyPage')(PrivacyPolicy);
