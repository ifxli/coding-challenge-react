import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './App.css';

import TabPanel from './components/TabPanel';
import MockTable from './components/MockTable';
import GraphQLTable from './components/GraphQLTable';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Mock Data" {...a11yProps(0)} />
          <Tab label="GraphQL Data" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <MockTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <GraphQLTable />
      </TabPanel>
    </div>
  );
}

export default App;
