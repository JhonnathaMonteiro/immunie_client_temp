import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { withTranslation } from 'i18n'

const WhoWeAre = ({ className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <SectionHeader
            title={t('WHO_WE_ARE_TITLE_1')}
            subtitle={t('WHO_WE_ARE_SUBTITLE_1')}
            disableGutter
            align="left"
            subtitleProps={{
              variant: 'body1',
              color: 'textPrimary',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <SectionHeader
            title={t('WHO_WE_ARE_TITLE_2')}
            subtitle={t('WHO_WE_ARE_SUBTITLE_2')}
            disableGutter
            align="left"
            subtitleProps={{
              variant: 'body1',
              color: 'textPrimary',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default withTranslation('aboutPage')(WhoWeAre);
