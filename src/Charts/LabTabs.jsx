import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tabs from '@mui/material/Tabs';

import './LabTabs.css'
import LinearProgressDeterminate1 from './LinearProgressDeterminate1';
import LinearProgressDeterminate2 from './LinearProgressDeterminate2';
import LinearProgressDeterminate3 from './LinearProgressDeterminate3';


export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="BROWSER" value="1" />
            <Tab label="OPERATING SYSTEM" value="2" />
            <Tab label="COUNTRY" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <div className="rankWrapper">
                <div className="rankHeader">
                    <div className="rankHeader1">NO.</div>
                    <div className="rankHeader2">BROWSER</div>
                    <div className="rankHeader3">VISITS</div>
                    <div className="rankHeader4">DATA IN PERCENTAGE</div>
                </div>
                <div className="rankBody">
                    <div className="rankBody1">
                        <div className="rankBodyNo">1</div>
                        <div className="rankBodyName">
                            <div className="rankBodyNameImg"></div>
                            <div className="rankBodyNameText">Chrome</div>
                        </div>
                        <div className="rankBodyVisit">8.92k</div>
                        <div className="rankBodyData">
                            <div className="rankBodyData1">
                                <LinearProgressDeterminate1></LinearProgressDeterminate1>
                            </div>
                            <div className="rankBodyData2">64.91%</div>
                        </div>
                    </div>
                    <div className="rankBody2">
                    <div className="rankBodyNo">2</div>
                        <div className="rankBodyName">
                            <div className="rankBodyNameImg"></div>
                            <div className="rankBodyNameText">Safari</div>
                        </div>
                        <div className="rankBodyVisit">1.29k</div>
                        <div className="rankBodyData">
                            <div className="rankBodyData1">
                                <LinearProgressDeterminate2></LinearProgressDeterminate2>
                            </div>
                            <div className="rankBodyData2">19.03%</div>
                        </div>
                    </div>
                    <div className="rankBody3">
                    <div className="rankBodyNo">3</div>
                        <div className="rankBodyName">
                            <div className="rankBodyNameImg"></div>
                            <div className="rankBodyNameText">Firefox</div>
                        </div>
                        <div className="rankBodyVisit">328</div>
                        <div className="rankBodyData">
                            <div className="rankBodyData1">
                                <LinearProgressDeterminate3></LinearProgressDeterminate3>
                            </div>
                            <div className="rankBodyData2">3.26%</div>
                        </div>
                    </div>
                    <div className="rankBody4">
                    <div className="rankBodyNo">4</div>
                        <div className="rankBodyName">
                            <div className="rankBodyNameImg"></div>
                            <div className="rankBodyNameText">Edge</div>
                        </div>
                        <div className="rankBodyVisit">142</div>
                        <div className="rankBodyData">
                            <div className="rankBodyData1">
                                <LinearProgressDeterminate2></LinearProgressDeterminate2>
                            </div>
                            <div className="rankBodyData2">3.99%</div>
                        </div>
                    </div>
                    <div className="rankBody5">
                    <div className="rankBodyNo">5</div>
                        <div className="rankBodyName">
                            <div className="rankBodyNameImg"></div>
                            <div className="rankBodyNameText">Opera</div>
                        </div>
                        <div className="rankBodyVisit">85</div>
                        <div className="rankBodyData">
                            <div className="rankBodyData1">
                                <LinearProgressDeterminate1></LinearProgressDeterminate1>
                            </div>
                            <div className="rankBodyData2">2.12%</div>
                        </div>
                    </div>
                    <div className="rankBody6">
                    <div className="rankBodyNo">6</div>
                        <div className="rankBodyName">
                            <div className="rankBodyNameImg"></div>
                            <div className="rankBodyNameText">Brave</div>
                        </div>
                        <div className="rankBodyVisit">36</div>
                        <div className="rankBodyData">
                            <div className="rankBodyData1">
                                <LinearProgressDeterminate3></LinearProgressDeterminate3>
                            </div>
                            <div className="rankBodyData2">1.06%</div>
                        </div>
                    </div>
                </div>
            </div>
        </TabPanel>
        <TabPanel value="2">
        <div className="rankWrapper2">
                <div className="rankHeader">
                    <div className="rankHeader1">NO.</div>
                    <div className="rankHeader2">SYSTEM</div>
                    <div className="rankHeader3">VISITS</div>
                    <div className="rankHeader4">DATA IN PERCENTAGE</div>
                </div>
                <div className="rankBody">
                    <div className="rankBody1">
                        <div className="rankBodyNo">1</div>
                        <div className="rankBodyName">
                            <div className="rankBodyNameImg"></div>
                            <div className="rankBodyNameText">Windows</div>
                        </div>
                        <div className="rankBodyVisit">475.26k</div>
                        <div className="rankBodyData">
                            <div className="rankBodyData1">
                                <LinearProgressDeterminate1></LinearProgressDeterminate1>
                            </div>
                            <div className="rankBodyData2">61.5%</div>
                        </div>
                    </div>
                    <div className="rankBody2">
                    <div className="rankBodyNo">2</div>
                        <div className="rankBodyName">
                            <div className="rankBodyNameImg"></div>
                            <div className="rankBodyNameText">Mac</div>
                        </div>
                        <div className="rankBodyVisit">89.12k</div>
                        <div className="rankBodyData">
                            <div className="rankBodyData1">
                                <LinearProgressDeterminate2></LinearProgressDeterminate2>
                            </div>
                            <div className="rankBodyData2">15.67%</div>
                        </div>
                    </div>
                    <div className="rankBody3">
                    <div className="rankBodyNo">3</div>
                        <div className="rankBodyName">
                            <div className="rankBodyNameImg"></div>
                            <div className="rankBodyNameText">Ubuntu</div>
                        </div>
                        <div className="rankBodyVisit">38.68k</div>
                        <div className="rankBodyData">
                            <div className="rankBodyData1">
                                <LinearProgressDeterminate3></LinearProgressDeterminate3>
                            </div>
                            <div className="rankBodyData2">5.82%</div>
                        </div>
                    </div>
                    <div className="rankBody4">
                    <div className="rankBodyNo">4</div>
                        <div className="rankBodyName">
                            <div className="rankBodyNameImg"></div>
                            <div className="rankBodyNameText">Linux</div>
                        </div>
                        <div className="rankBodyVisit">30.27k</div>
                        <div className="rankBodyData">
                            <div className="rankBodyData1">
                                <LinearProgressDeterminate2></LinearProgressDeterminate2>
                            </div>
                            <div className="rankBodyData2">5.03%</div>
                        </div>
                    </div>
                    <div className="rankBody5">
                    <div className="rankBodyNo">5</div>
                        <div className="rankBodyName">
                            <div className="rankBodyNameImg"></div>
                            <div className="rankBodyNameText">Chrome</div>
                        </div>
                        <div className="rankBodyVisit">8.34k</div>
                        <div className="rankBodyData">
                            <div className="rankBodyData1">
                                <LinearProgressDeterminate1></LinearProgressDeterminate1>
                            </div>
                            <div className="rankBodyData2">3.25%</div>
                        </div>
                    </div>
                    <div className="rankBody6">
                    <div className="rankBodyNo">6</div>
                        <div className="rankBodyName">
                            <div className="rankBodyNameImg"></div>
                            <div className="rankBodyNameText">Cent</div>
                        </div>
                        <div className="rankBodyVisit">2.25k</div>
                        <div className="rankBodyData">
                            <div className="rankBodyData1">
                                <LinearProgressDeterminate3></LinearProgressDeterminate3>
                            </div>
                            <div className="rankBodyData2">1.76%</div>
                        </div>
                    </div>
                </div>
            </div>
        </TabPanel>
        <TabPanel value="3">
        <div className="rankWrapper3">
                <div className="rankHeader">
                    <div className="rankHeader1">NO.</div>
                    <div className="rankHeader2">COUNTRY</div>
                    <div className="rankHeader3">VISITS</div>
                    <div className="rankHeader4">DATA IN PERCENTAGE</div>
                </div>
                <div className="rankBody">
                    <div className="rankBody1">
                        <div className="rankBodyNo">1</div>
                        <div className="rankBodyName">
                            <div className="rankBodyNameImg"></div>
                            <div className="rankBodyNameText">USA</div>
                        </div>
                        <div className="rankBodyVisit">87.24k</div>
                        <div className="rankBodyData">
                            <div className="rankBodyData1">
                                <LinearProgressDeterminate1></LinearProgressDeterminate1>
                            </div>
                            <div className="rankBodyData2">38.12%</div>
                        </div>
                    </div>
                    <div className="rankBody2">
                    <div className="rankBodyNo">2</div>
                        <div className="rankBodyName">
                            <div className="rankBodyNameImg"></div>
                            <div className="rankBodyNameText">Brazil</div>
                        </div>
                        <div className="rankBodyVisit">42.69k</div>
                        <div className="rankBodyData">
                            <div className="rankBodyData1">
                                <LinearProgressDeterminate2></LinearProgressDeterminate2>
                            </div>
                            <div className="rankBodyData2">28.23%</div>
                        </div>
                    </div>
                    <div className="rankBody3">
                    <div className="rankBodyNo">3</div>
                        <div className="rankBodyName">
                            <div className="rankBodyNameImg"></div>
                            <div className="rankBodyNameText">India</div>
                        </div>
                        <div className="rankBodyVisit">12.58k</div>
                        <div className="rankBodyData">
                            <div className="rankBodyData1">
                                <LinearProgressDeterminate3></LinearProgressDeterminate3>
                            </div>
                            <div className="rankBodyData2">13.82%</div>
                        </div>
                    </div>
                    <div className="rankBody4">
                    <div className="rankBodyNo">4</div>
                        <div className="rankBodyName">
                            <div className="rankBodyNameImg"></div>
                            <div className="rankBodyNameText">Australia</div>
                        </div>
                        <div className="rankBodyVisit">4.13k</div>
                        <div className="rankBodyData">
                            <div className="rankBodyData1">
                                <LinearProgressDeterminate2></LinearProgressDeterminate2>
                            </div>
                            <div className="rankBodyData2">12.72%</div>
                        </div>
                    </div>
                    <div className="rankBody5">
                    <div className="rankBodyNo">5</div>
                        <div className="rankBodyName">
                            <div className="rankBodyNameImg"></div>
                            <div className="rankBodyNameText">China</div>
                        </div>
                        <div className="rankBodyVisit">2.21k</div>
                        <div className="rankBodyData">
                            <div className="rankBodyData1">
                                <LinearProgressDeterminate1></LinearProgressDeterminate1>
                            </div>
                            <div className="rankBodyData2">7.11%</div>
                        </div>
                    </div>
                    <div className="rankBody6">
                    <div className="rankBodyNo">6</div>
                        <div className="rankBodyName">
                            <div className="rankBodyNameImg"></div>
                            <div className="rankBodyNameText">France</div>
                        </div>
                        <div className="rankBodyVisit">1.56k</div>
                        <div className="rankBodyData">
                            <div className="rankBodyData1">
                                <LinearProgressDeterminate3></LinearProgressDeterminate3>
                            </div>
                            <div className="rankBodyData2">6.59%</div>
                        </div>
                    </div>
                </div>
            </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
