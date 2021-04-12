import React from 'react';
import clsx from 'clsx';
import { Typography, ListItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  item: {
    display: 'flex',
    textTransform: 'none',
    width: '100%'
  },
}));

interface Props {
  className?: string;
  href: string;
  title: string;
};

const NavItem = ({
  className,
  href,
  title,
  ...rest
}: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <ListItem
      className={clsx(classes.item, className)}
      button
      component={'a'}
      href={href}
      {...rest}
    >
      <Typography variant="body2">{title}</Typography>
    </ListItem>
  );
};

export default NavItem;