import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { useQuery } from '@apollo/client';
import getData from '../graphql/queries/getData'

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'title',
    headerName: 'Title',
    width: 250,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 500
  },
  {
    field: 'applyUrl',
    headerName: 'Apply Here',
    width: 400
  },
  {
    field: 'userEmail',
    headerName: 'User Email',
    width: 250
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

function GraphQLTable() {
  const classes = useStyles();
  const { data } = useQuery(getData, {
    fetchPolicy: 'cache-and-network'
  })

  if (data) {
    console.log('data', data.jobs)
  }

  return (
    <>
      <Toolbar className={classes.header}>
        <Typography variant="h6" component="div">
          Github Jobs
        </Typography>
      </Toolbar>
      {
        !data ? <div>loading...</div> : <DataGrid rows={data.jobs} columns={columns} pageSize={10} checkboxSelection />
      }
    </>
  );
}

export default GraphQLTable;
