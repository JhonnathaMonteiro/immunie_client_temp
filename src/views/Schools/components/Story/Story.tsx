import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Button, useMediaQuery } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { DescriptionListIcon } from 'components/organisms';
import { withTranslation } from 'i18n';
import Link from 'next/link';

const Story = ({ className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader title={t('STORY_TITLE')} label={t('STORY_LABEL')} data-aos="fade-up" />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={6} data-aos={'fade-up'}>
          <DescriptionListIcon
            title={t('STORY_GRID_1_TITLE')}
            subtitle={t('STORY_GRID_1_SUBTITLE')}
            icon={<Image style={{ width: 40 }} src="/static/images/icons/c-info.svg" />}
            align="left"
          />
        </Grid>
        <Grid item xs={12} sm={6} data-aos={'fade-up'}>
          <DescriptionListIcon
            title={t('STORY_GRID_2_TITLE')}
            subtitle={t('STORY_GRID_2_SUBTITLE')}
            icon={<Image style={{ width: 40 }} src="/static/images/icons/c-question.svg" />}
            align="left"
          />
        </Grid>
        <Grid item container justify="center" xs={12} data-aos={'fade-up'}>
          <Link href="/company/about">
            <Button variant="outlined" color="primary">
              {t('STORY_BTN_TXT')}
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default withTranslation('schoolPage')(Story);
