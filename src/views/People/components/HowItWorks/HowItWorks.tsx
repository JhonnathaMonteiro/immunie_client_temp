import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { DescriptionListIcon, CardBase } from 'components/organisms';
import { withTranslation } from 'i18n';

const HowItWorks = ({ data, className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={t('HOW_IT_WORKS_TITLE')}
        subtitle={t('HOW_IT_WORKS_SUBTITLE')}
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item: any, index: number) => (
          <Grid item xs={12} md={4} key={index} data-aos="fade-up">
            <CardBase liftUp noShadow variant="outlined">
              <DescriptionListIcon
                icon={
                  <Image
                    style={{ width: 40 }}
                    src={item.icon}
                  />
                }
                title={t(item.title)}
                subtitle={t(item.subtitle)}
                align="left"
              />
            </CardBase>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default withTranslation('peoplePage')(HowItWorks);
