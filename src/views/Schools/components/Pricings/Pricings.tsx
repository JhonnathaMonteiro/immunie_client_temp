import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Button, useMediaQuery, colors } from '@material-ui/core';
import { Icon } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardPricingStandard } from 'components/organisms';
import { withTranslation } from 'i18n';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
  cardSmall: {
    height: 'auto',
    '& .MuiCardContent-root': {
      padding: theme.spacing(2),
    },
  },
  textCenter: {
    textAlign: 'center',
  },
  fontWeight900: {
    fontWeight: 900,
  },
}));

const Pricings = ({ data, className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader title={t('PRICING_TITLE')} label={t('PRICING_LABEL')} data-aos="fade-up" />
      <Grid container spacing={isMd ? 0 : 2}>
        {data.map((item: any, index: number) => (
          <Grid item container alignItems="center" xs={12} md={6} data-aos="fade-up" key={index}>
            <CardPricingStandard
              variant="outlined"
              withShadow={item.isHighlighted ? true : false}
              title={t(item.title)}
              liftUp
              priceComponent={<></>}
              features={item.features.map(feature => t(feature))}
              featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.green[500]} />}
              cta={
                <Link href="/terms-of-use/faqs">
                  <Button color={item.isHighlighted ? 'default' : 'primary'} variant="contained" fullWidth size="large">
                    {t('PRICING_CARD_BTN_TEXT')}
                  </Button>
                </Link>
              }
              disclaimer={t(item.disclaimer)}
              className={!item.isHighlighted ? classes.cardSmall : ''}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default withTranslation('schoolPage')(Pricings);
