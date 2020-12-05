import React, { useState, useEffect } from 'react';
import { getAllCompanies } from '../../services/company.js';
import CompanyMiniInfo from '../companyMiniInfo/CompanyMiniInfo';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '../Select/Select.js';
import { useLocation, generatePath, useHistory } from 'react-router-dom';
import fields from '../../constants/jobField.js';
import _ from 'lodash';

let tmpComps = [];
let constComps = [];

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    marginTop: '-5px',
    padding: '14px 15px',
    span: {
      padding: '5px 15px',
    },
  },
  searchPart: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function CardMakerForCompanies() {
  const [companies, setCompanies] = useState(['']);
  const [search, setSearch] = useState('');
  const [fieldValue, setFieldValue] = useState('All');
  const classes = useStyles();
  const location = useLocation();
  let history = useHistory();

  const mapForComps = companies.map((e) => (
    <CompanyMiniInfo
      key={_.uniqueId('cmii_')}
      companyName={e.companyName ? e.companyName : 'No name'}
      companyDesc={e.bio ? e.bio.description : 'No description'}
      companyImg={e.image}
      companyId={e.id}
      buttonFunction={() => {
        history.push(generatePath('/companies/:id', { id: e.id }));
      }}
    />
  ));

  async function searchSet() {
    let lastPartPath = '';
    if (location.pathname !== '/companies') {
      lastPartPath = location.pathname.substring(
        location.pathname.lastIndexOf('/') + 1,
        location.pathname.lastIndexOf('_')
      );
      if (lastPartPath !== 'companies') {
        console.log(lastPartPath);
        setSearch(lastPartPath);
      }
    } else {
      setSearch('');
    }

    let lastPartField = decodeURI(
      location.pathname.substring(location.pathname.lastIndexOf('_') + 1)
    );
    if (lastPartField !== '/companies') {
      await setFieldValue(lastPartField);
    } else {
      setFieldValue('All');
    }
    return lastPartPath, lastPartField;
  }

  useEffect(() => {
    getAllCompanies()
      .then((response) => {
        constComps = Object.values(response);
        setCompanies(constComps);
      })
      .then(() => {
        searchSet();
      });
    console.log(1);
  }, []);

  useEffect(() => {
    Search();
  }, [search, fieldValue]);

  function Search() {
    tmpComps = constComps;
    console.log(search, 5);
    if (search === '' && fieldValue === 'All') {
      setCompanies(constComps);
      return true;
    } else if (fieldValue === 'All') {
      const filterComps = tmpComps.filter((e) => {
        if (
          e.companyName &&
          e.companyName.toLowerCase().includes(search.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });

      setCompanies(filterComps);
    } else if (search === '') {
      const filterComps = tmpComps.filter((e) => {
        if (e.field === fieldValue) {
          return true;
        }
        return false;
      });
      setCompanies(filterComps);
    }
  }

  function allComps() {
    return (
      <div>
        <form
          className={(classes.root, classes.searchPart)}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            helperText="Write the keywords"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              console.log(search);
            }}
          />
          <Select
            valueq={fieldValue}
            givenArray={fields}
            givenFunction={(e) => {
              setFieldValue(e.target.value);
            }}
          />
          <Button
            className={classes.button}
            size="small"
            variant="contained"
            color="primary"
            onClick={() => {
              Search();
            }}
          >
            Search
          </Button>
        </form>
        <div className="containerCompaniesMinia">{mapForComps}</div>
      </div>
    );
  }
  return allComps();
}
