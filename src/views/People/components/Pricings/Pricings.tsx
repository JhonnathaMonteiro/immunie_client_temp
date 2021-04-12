import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button } from '@material-ui/core';
import { Icon } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardPricingStandard } from 'components/organisms';
import Link from 'next/link'
import { withTranslation } from 'i18n';

const Pricings = ({ data, className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader title={t('PRICING_TITLE')} subtitle={t('PRICING_SUBTITLE')} data-aos="fade-up" />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item: any, index: number) => (
          <Grid item xs={12} md={4} data-aos="fade-up" key={index}>
            <CardPricingStandard
              variant="outlined"
              withShadow={item.isHighlighted ? true : false}
              title={t(item.title)}
              liftUp
              subtitle={t(item.subtitle)}
              priceComponent={<></>}
              features={item.features.map(feature => t(feature))}
              featureCheckComponent={
                <Icon fontIconClass="far fa-check-circle" fontIconColor={theme.palette.primary.main} />
              }
              cta={
                <Link href="https://app.immunie.net/register">
                  <Button
                    color="primary"
                    variant={item.isHighlighted ? 'contained' : 'outlined'}
                    fullWidth
                    size="large"
                    >
                    {t('PRICING_CARDS_CTA_BTN_TEXT')}
                  </Button>
                </Link>
              }
              disclaimer={t(item.disclaimer)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default withTranslation('peoplePage')(Pricings);
