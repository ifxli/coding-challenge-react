import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './App.css';

import peopleData from './MOCK_DATA.json';
const sections = [...new Set(peopleData.map(({ section }) => section))];

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'fullName',
    headerName: 'Full Name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('first_name') || ''} ${params.getValue('last_name') || ''}`,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 250,
  },
  {
    field: 'job_title',
    headerName: 'Job Title',
    width: 200
  },
  {
    field: 'section',
    headerName: 'Section',
    width: 100
  } 
];

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#f8bdbd'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

function App() {
  const classes = useStyles();
  const [section, setSection] = useState('');
  const [people, setPeople] = useState(peopleData);

  const handleSectionSelect = (e) => {
    const selectedValue = e.target.value;
    setSection(selectedValue);
    if (selectedValue !== '') {
      setPeople(peopleData.filter(({ section }) => section === selectedValue));
    } else {
      setPeople(peopleData);
    }
  };

  return (
    <div className="App">
      <Toolbar className={classes.header}>
        <Typography variant="h6" component="div">
          People Data
        </Typography>

        <Tooltip title="Filter by section">
          <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Section</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={section}
              onChange={handleSectionSelect}
              label="Section"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {
                sections.map((section, index) => <MenuItem value={section} key={index}>{section}</MenuItem>)
              }
            </Select>
          </FormControl>
        </Tooltip>
      </Toolbar>
      <DataGrid rows={people} columns={columns} pageSize={10} checkboxSelection />
    </div>
  );
}

export default App;
