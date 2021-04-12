import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Image } from 'components/atoms';
import { DescriptionListIcon } from 'components/organisms';
import { withTranslation } from 'i18n';

const useStyles = makeStyles(() => ({
  icon: {
    width: 60
  },
}));

const Advantages = ({ data, className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <Grid container spacing={4}>
        {data.map((item: any, index: number) => (
          <Grid key={index} item xs={12} md={3} data-aos={'fade-up'}>
            <DescriptionListIcon
              title={t(item.title)}
              subtitle={t(item.subtitle)}
              icon={<Image className={classes.icon} src={item.icon} />}
              align="left"
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default withTranslation('managersPage')(Advantages);
