import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
  },
  childrenWrapper: {
    position: 'absolute',
    width: '100%',
    margin: '0 auto',
    top: "25%",
    left: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  boxWarpper: {
    width: '320px',
    height: '320px',
    cursor: 'pointer',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    transform: 'rotateZ(30deg)',

    transition: 'all 1s ease',

    // '&:hover': {
    //   transform: 'rotateZ(180deg)',
    // },
  },
  box: {
    width: '52%',
    height: '90%',

    transition: 'all .5s ease',
    position: 'relative',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&::before, &::after': {
      content: '""',

      position: 'absolute',

      background: 'inherit',

      width: '100%',
      height: '100%',

      borderRadius: 0,

      transition: 'all .5s ease',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    '&::before': {
      transform: 'rotateZ(60deg)',
    },

    '&::after': {
      transform: 'rotateZ(-60deg)',
    },

    // '&:hover': {
    //   borderRadius: 50,
    //   '&::before, &::after': {
    //     borderRadius: 50,
    //   },
    // },
  },
}));

/**
 * Component to display a HexagonContainer
 *
 * @param {Object} props
 */
const HexagonContainer = ({ children, colorGradient, className, ...rest }: HexagonContainerProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.boxWarpper}>
        <div className={classes.box} style={{backgroundColor: "rgb(157 161 162)"}}></div>
      </div>
      <div className={classes.childrenWrapper}>{children}</div>
    </div>
  );
};

export default HexagonContainer;
