import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './CustomTabPanel.css'

import IncomeChart from './IncomeChart';
import IncomeSmall from './IncomeSmall'


function CustomTabPanel(props) {
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Box sx={{ width: '100%' }}>
      <div className="incomeT">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="INCOME" {...a11yProps(0)} />
            <Tab label="EXPENSES" {...a11yProps(1)} />
            <Tab label="PROFIT" {...a11yProps(2)} />
            </Tabs>
        </Box>
      </div>
    <div className="incomeL">
        <CustomTabPanel value={value} index={0}>
            <div className="income2">
                <div className="income2LIncome">
                </div>
                <div className="income2R">
                    <div className="income2RT">Total Income</div>
                    <div className="income2RB">
                        <div className="income2RBL">$459.1k</div>
                        <div className="income2RBM">
                        </div>
                        <div className="income2RBR">42.9%</div>
                    </div>
                </div>
            </div>
            <div className="income3">
                <IncomeChart></IncomeChart>
            </div>
            <div className="income4">
                <div className="income4L">
                    <IncomeSmall></IncomeSmall>
                </div>
                <div className="income4R">
                    <div className="income4RT">Income this week</div>
                    <div className="income4RB">$39k less than last week</div>
                </div>
            </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        <div className="income2">
                <div className="income2LExpense">
                </div>
                <div className="income2R">
                    <div className="income2RT">Total Expenses</div>
                    <div className="income2RB">
                        <div className="income2RBL">$316.5k</div>
                        <div className="income2RBM">
                        </div>
                        <div className="income2RBR">27.8%</div>
                    </div>
                </div>
            </div>
            <div className="income3">
                <IncomeChart></IncomeChart>
            </div>
            <div className="income4">
                <div className="income4L">
                    <IncomeSmall></IncomeSmall>
                </div>
                <div className="income4R">
                    <div className="income4RT">Expenses this week</div>
                    <div className="income4RB">$16k less than last week</div>
                </div>
            </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
        <div className="income2">
                <div className="income2LProfit">
                </div>
                <div className="income2R">
                    <div className="income2RT">Total Profit</div>
                    <div className="income2RB">
                        <div className="income2RBL">$147.9k</div>
                        <div className="income2RBM">
                        </div>
                        <div className="income2RBR">35.1%</div>
                    </div>
                </div>
            </div>
            <div className="income3">
                <IncomeChart></IncomeChart>
            </div>
            <div className="income4">
                <div className="income4L">
                    <IncomeSmall></IncomeSmall>
                </div>
                <div className="income4R">
                    <div className="income4RT">Profit this week</div>
                    <div className="income4RB">$28k less than last week</div>
                </div>
            </div>
        </CustomTabPanel>
    </div>

    </Box>
  );
}
