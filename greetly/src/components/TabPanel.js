import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './TabPanel.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className="tabPanel">
          {children}
        </div>
      )}
    </div>
  );
}

export default TabPanel
