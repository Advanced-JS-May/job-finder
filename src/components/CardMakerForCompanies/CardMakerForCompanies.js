import React, { useState, useEffect } from 'react';
import { getAllCompanies } from '../../services/company';
import CompanyMiniInfo from '../companyMiniInfo/CompanyMiniInfo';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'; //forSaerch
import Button from '@material-ui/core/Button'; //forSaerch
import Select from '../Select/Select.js'; //forSaerch
import { useLocation, generatePath, useHistory } from 'react-router-dom'; //forSaerch
import fields from '../../constants/jobField.js'; //forSaerch
import _ from 'lodash';
import { Pagination } from '@material-ui/lab';
import usePagination from '../../Utils/paginationHelper';

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
let tmpComps = []; //forSaerch
let constComps = []; //forSaerch

export default function CardMakerForCompanies() {
  const [companies, setCompanies] = useState(['']);
  const [search, setSearch] = useState(''); //forSaerch
  const [fieldValue, setFieldValue] = useState('All'); //forSaerch
  const [page, setPage] = useState(1); //pagination

  const classes = useStyles();
  const location = useLocation(); //forSaerch
  let history = useHistory(); //forSaerch
  const perPage = 3;
  const count = Math.ceil(companies.length / perPage);
  const data = usePagination(companies, perPage);

  useEffect(() => {
    getAllCompanies()
      .then((response) => {
        constComps = Object.values(response);
        setCompanies(constComps);
      })
      .then(() => {
        searchSet(); //forSaerch
      });
  }, []);

  useEffect(() => {
    //forSaerch
    Search();
  }, [search, fieldValue]);

  const handleChange = (event, page) => {
    //pagination
    setPage(page);
    data.jump(page);
  };

  const mapForComps = data.currentData().map((e) => (
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
    //forSaerch
    let lastPartPath = ''; //forSaerch CHANGE VARS
    if (location.pathname !== '/companies') {
      lastPartPath = location.pathname.substring(
        location.pathname.lastIndexOf('/') + 1,
        location.pathname.lastIndexOf('_'),
      );
      if (lastPartPath !== 'companies') {
        console.log(lastPartPath);
        setSearch(lastPartPath);
      }
    } else {
      setSearch('');
    }

    let lastPartField = decodeURI(
      location.pathname.substring(location.pathname.lastIndexOf('_') + 1),
    );
    if (lastPartField !== '/companies') {
      await setFieldValue(lastPartField);
    } else {
      setFieldValue('All');
    }
    return lastPartPath, lastPartField;
  }

  function Search() {
    //forSaerch
    tmpComps = constComps; //forSaerch CHANGE VASR
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
        {' '}
        //forSaerch
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
        </form>
        <div className="containerCompaniesMinia">{mapForComps}</div>
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </div>
    );
  }
  return allComps();
}
