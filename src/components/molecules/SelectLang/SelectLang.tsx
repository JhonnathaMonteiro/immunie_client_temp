import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { FormControl, InputLabel, makeStyles } from '@material-ui/core';
import { Language } from '@material-ui/icons';
import { AVAILABLE_LANGUAGES } from 'config'

import { i18n } from 'i18n';

const useStyles = makeStyles(theme => ({
  container: {
    zIndex: 3,
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    position: 'relative',
    paddingTop: '16px',
  },
  select: {
    marginTop: '0 !important',
  },
  countryFlag: {
    marginRight: 10,
  },
}));

/**
 * Component to display a language selector
 *
 * @param {Object} props
 */
const SelectLang = ({ className, ...rest }: SelectLanguageProps): JSX.Element => {
  const classes = useStyles();

  return (
    <FormControl className={classes.container}>
      <InputLabel id="language-select-label" className={classes.label}>
        <Language />
      </InputLabel>
      <Select
        className={classes.select}
        labelId="language-select-label"
        id="language-select-id"
        value={i18n.language}
        onChange={event => {
          i18n.changeLanguage(event.target.value as string);
        }}
      >
        {AVAILABLE_LANGUAGES.map(lang => (
          <MenuItem key={lang} value={lang}>
            {lang.toUpperCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectLang;
