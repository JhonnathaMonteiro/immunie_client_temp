import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { CardJobMinimal } from 'components/organisms';
import Link from 'next/link'
import { withTranslation } from 'i18n';

const VaccinationProgram = ({ data, className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={t('VACCINATION_PROGRAM_TITLE')}
        subtitle={t('VACCINATION_PROGRAM_SUBTITLE')}
        subtitleColor="textPrimary"
        ctaGroup={[
          <Link href="/company/media-assets">
            <Button color="primary" size="large" variant="contained" >
              {t('VACCINATION_PROGRAM_BTN_TEXT')}
            </Button>
          </Link>
        ]}
        data-aos="fade-up"
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item: any, index: number) => (
          <Grid item xs={12} key={index}>
            <Link href="/company/media-assets">
              <CardJobMinimal
                title={t(item.title)}
                subtitle={`${t(item.location)} / ${t(item.type)}`}
                showArrow
                titleProps={{
                  variant: 'h6',
                }}
                subtitleProps={{
                  variant: 'subtitle1',
                }}
                />
             </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default withTranslation('peoplePage')(VaccinationProgram);
