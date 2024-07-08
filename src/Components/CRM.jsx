import React from 'react'
import {Link} from 'react-router-dom'

import './CRM.css'
import SalesAnalytics from '../Charts/SalesAnalytics'
import CustomRating from '../Charts/CustomRating'
import OverviewSales from '../Charts/OverviewSales'
import Session from '../Charts/Session'
import EarningReport from '../Charts/EarningReport'
import GeneratedLead from '../Charts/GeneratedLead'
import SalesStat from '../Charts/SalesStat'
import OrangeRing from '../Charts/OrangeRing'
import RedRing from '../Charts/RedRing'


export default function CRM() {
  return (
    <div>
      <div className="cbox">
        <div className="ccontents">
          <div className="cpart1">
            <div className="ccustomRating">
              <div className="ccustomRatingT">Customer Ratings</div>
              <div className="ccustomRatingM">
                <div className="ccustomRatingM1">
                  <div className="ccustomRatingM1No">4.0</div>
                  <div className="ccustomRatingM1Star">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <s></s>
                  </div>
                </div>
                <div className="ccustomRatingM2">
                  <div className="ccustomRatingM2No">+5.0</div>
                  <div className="ccustomRatingM2Text">Points from last month</div>
                </div>
              </div>
              <div className="ccustomRatingB">
                <CustomRating></CustomRating>
              </div>
            </div>
            <div className="coverview">
              <div className="coverviewTop">
                <div className="coverviewTop1">Overview & Sales Activity</div>
                <div className="coverviewTop2">Check out each column for more details</div>
              </div>
              <div className="coverviewBot">
                <OverviewSales></OverviewSales>
              </div>
            </div>
            <div className="cpart1Right">
              <div className="cpart1RightT">
                <div className="csession">
                    <div className="csessionNumber">
                      <div className="csessionNumber1">Sessions</div>
                      <div className="csessionNumber2">2845</div>
                    </div>
                    <div className="csessionImg">
                      <Session></Session>
                    </div>
                </div>
                <div className="corders">
                  <div className="cordersImg"></div>
                  <div className="cordersText1">Order</div>
                  <div className="cordersText2">$1,286</div>
                  <div className="cordersText3">13.24%</div>
                </div>
              </div>
              <div className="cpart1RightB">
                <div className="cpart1RightBL">
                  <div className="cpart1RightBLT">
                    <div className="cpart1RightBLT1">Generated Leads</div>
                    <div className="cpart1RightBLT2">Monthly Report</div>
                  </div>
                  <div className="cpart1RightBLB">
                    <div className="cpart1RightBLB1">4,234</div>
                    <div className="cpart1RightBLB2">12.8%</div>
                  </div>
                </div>
                <div className="cpart1RightBR">
                  <GeneratedLead></GeneratedLead>
                </div>
              </div>
            </div>
          </div>
          <div className="cpart2">
            <div className="cpart2L">
              <div className="prodSales">
                <div className="prodSalesT">
                  <div className="prodSalesTL">Top Products by</div>
                  <div className="prodSalesTR">Sales</div>
                </div>
                <div className="prodSalesB">
                  <div className="prodSalesBBox1">
                    <div className="prodSalesBBoxL"></div>
                    <div className="prodSalesBBoxR">
                      <div className="prodSalesBBoxR1">
                        <div className="prodSalesBBoxR1T">Oneplus Nord</div>
                        <div className="prodSalesBBoxR1B">OnePlus</div>
                      </div>
                      <div className="prodSalesBBoxR2">$98,348</div>
                    </div>
                  </div>
                  <div className="prodSalesBBox2">
                    <div className="prodSalesBBoxL"></div>
                    <div className="prodSalesBBoxR">
                      <div className="prodSalesBBoxR1">
                        <div className="prodSalesBBoxR1T">Smart Band 4</div>
                        <div className="prodSalesBBoxR1B">Xiaomi</div>
                      </div>
                      <div className="prodSalesBBoxR2">$15,459</div>
                    </div>
                  </div>
                  <div className="prodSalesBBox3">
                    <div className="prodSalesBBoxL"></div>
                    <div className="prodSalesBBoxR">
                      <div className="prodSalesBBoxR1">
                        <div className="prodSalesBBoxR1T">Surface Pro X</div>
                        <div className="prodSalesBBoxR1B">Microsofe</div>
                      </div>
                      <div className="prodSalesBBoxR2">$4,589</div>
                    </div>
                  </div>
                  <div className="prodSalesBBox4">
                    <div className="prodSalesBBoxL"></div>
                    <div className="prodSalesBBoxR">
                      <div className="prodSalesBBoxR1">
                        <div className="prodSalesBBoxR1T">iPhone 13</div>
                        <div className="prodSalesBBoxR1B">Apple</div>
                      </div>
                      <div className="prodSalesBBoxR2">$84,345</div>
                    </div>
                  </div>
                  <div className="prodSalesBBox5">
                    <div className="prodSalesBBoxL"></div>
                    <div className="prodSalesBBoxR">
                      <div className="prodSalesBBoxR1">
                        <div className="prodSalesBBoxR1T">Bluetooth Earphone</div>
                        <div className="prodSalesBBoxR1B">Beats</div>
                      </div>
                      <div className="prodSalesBBoxR2">$10,374</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="prodVolume">
                <div className="prodSalesT">
                  <div className="prodSalesTL">Top Products by</div>
                  <div className="prodSalesTR">Volume</div>
                </div>
                <div className="prodSalesB">
                  <div className="prodVolumeBBox1">
                    <div className="prodSalesBBoxL"></div>
                    <div className="prodSalesBBoxR">
                      <div className="prodSalesBBoxR1">
                        <div className="prodSalesBBoxR1T">ENVY Laptop</div>
                        <div className="prodSalesBBoxR1B">HP</div>
                      </div>
                      <div className="prodVolumeBBoxR2">
                        <div className="prodVolumeBBoxR2L">12.4k</div>
                        <div className="prodVolumeBBoxR2R">+12.4%</div>
                      </div>
                    </div>
                  </div>
                  <div className="prodVolumeBBox2">
                    <div className="prodSalesBBoxL"></div>
                    <div className="prodSalesBBoxR">
                      <div className="prodSalesBBoxR1">
                        <div className="prodSalesBBoxR1T">Apple</div>
                        <div className="prodSalesBBoxR1B">iMac Pro</div>
                      </div>
                      <div className="prodVolumeBBoxR2">
                        <div className="prodVolumeBBoxR2L">74.9k</div>
                        <div className="prodVolumeBBoxR2RRed">-8.5%</div>
                      </div>
                    </div>
                  </div>
                  <div className="prodVolumeBBox3">
                    <div className="prodSalesBBoxL"></div>
                    <div className="prodSalesBBoxR">
                      <div className="prodSalesBBoxR1">
                        <div className="prodSalesBBoxR1T">Smart Watch</div>
                        <div className="prodSalesBBoxR1B">Fitbit</div>
                      </div>
                      <div className="prodVolumeBBoxR2">
                        <div className="prodVolumeBBoxR2L">4.4k</div>
                        <div className="prodVolumeBBoxR2R">+17.6%</div>
                      </div>
                    </div>
                  </div>
                  <div className="prodVolumeBBox4">
                    <div className="prodSalesBBoxL"></div>
                    <div className="prodSalesBBoxR">
                      <div className="prodSalesBBoxR1">
                        <div className="prodSalesBBoxR1T">Oneplus Nord</div>
                        <div className="prodSalesBBoxR1B">Oneplus</div>
                      </div>
                      <div className="prodVolumeBBoxR2">
                        <div className="prodVolumeBBoxR2L">12.34k</div>
                        <div className="prodVolumeBBoxR2R">+13.9%</div>
                      </div>
                    </div>
                  </div>
                  <div className="prodVolumeBBox5">
                    <div className="prodSalesBBoxL"></div>
                    <div className="prodSalesBBoxR">
                      <div className="prodSalesBBoxR1">
                        <div className="prodSalesBBoxR1T">Pixel 4a</div>
                        <div className="prodSalesBBoxR1B">Google</div>
                      </div>
                      <div className="prodVolumeBBoxR2">
                        <div className="prodVolumeBBoxR2L">8.65k</div>
                        <div className="prodVolumeBBoxR2RRed">-11.8%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cpart2R">
              <div className="cpart2RT">
                <div className="cpart2RT1">Earning Report</div>
                <div className="cpart2RT2">Weekly Earnings Overview</div>
              </div>
              <div className="cpart2RM">
                <div className="cpart2RM1">
                    <div className="cpart2RML"></div>
                    <div className="cpart2RMR">
                      <div className="cpart2RMR1">
                        <div className="cpart2RMR1T">Net Profit</div>
                        <div className="cpart2RMR1B">12.4k Sales</div>
                      </div>
                      <div className="cpart2RMR2">
                        <div className="cpart2RMR2L">$1,619</div>
                        <div className="cpart2RMR2R">18.6%</div>
                      </div>
                    </div>
                </div>
                <div className="cpart2RM2">
                    <div className="cpart2RML"></div>
                    <div className="cpart2RMR">
                      <div className="cpart2RMR1">
                        <div className="cpart2RMR1T">Total Income</div>
                        <div className="cpart2RMR1B">Sales, Affiliation</div>
                      </div>
                      <div className="cpart2RMR2">
                        <div className="cpart2RMR2L">$3,571</div>
                        <div className="cpart2RMR2R">39.6%</div>
                      </div>
                    </div>
                </div>
                <div className="cpart2RM3">
                    <div className="cpart2RML"></div>
                    <div className="cpart2RMR">
                      <div className="cpart2RMR1">
                        <div className="cpart2RMR1T">Total Expenses</div>
                        <div className="cpart2RMR1B">ADVT, Marketing</div>
                      </div>
                      <div className="cpart2RMR2">
                        <div className="cpart2RMR2L">$430</div>
                        <div className="cpart2RMR2R">52.8%</div>
                      </div>
                    </div>
                </div>
                <div className="cpart2RM4">
                    <EarningReport></EarningReport>
                </div>
              </div>
            </div>
          </div>
          <div className="cpart3">
            <div className="cpart3L">
              <div className="cpart3LT">
                <div className="cpart3LTL">
                  <div className="cpart3LTLT">Sales Analytics</div>
                  <div className="cpart3LTLB">
                    <div className="cpart3LTLB1">+42.6%</div>
                    <div className="cpart3LTLB2">Than last year</div>
                  </div>
                </div>
                <select name="" id="" className="cpart3LTR">
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                </select>
              </div>
              <div className="cpart3LB">
                  <SalesAnalytics></SalesAnalytics>
              </div>
            </div>
            <div className="cpart3M">
              <div className="cpart3MT">
                <div className="cpart3MT1">Sales by Countries</div>
                <div className="cpart3MT2">Monthly Sales Overview</div>
              </div>
              <div className="cpart3MB">
                <div className="cpart3MB1">
                  <div className="cpart3MBL"></div>
                  <div className="cpart3MBR">
                    <div className="cpart3MBRL">
                      <div className="cpart3MBRLT">
                        <div className="cpart3MBRLT1">$8,656k</div>
                        <div className="cpart3MBRLTGreen"></div>
                        <div className="cpart3MBRLT2">25.8%</div>
                      </div>
                      <div className="cpart3MBRLB">United States of America</div>
                    </div>
                    <div className="cpart3MBRR">894k</div>
                  </div>
                </div>
                <div className="cpart3MB2">
                  <div className="cpart3MBL"></div>
                  <div className="cpart3MBR">
                    <div className="cpart3MBRL">
                      <div className="cpart3MBRLT">
                        <div className="cpart3MBRLT1">$2,415</div>
                        <div className="cpart3MBRLTRed"></div>
                        <div className="cpart3MBRLT2">6.2%</div>
                      </div>
                      <div className="cpart3MBRLB">Brazil</div>
                    </div>
                    <div className="cpart3MBRR">645k</div>
                  </div>
                </div>
                <div className="cpart3MB3">
                  <div className="cpart3MBL"></div>
                  <div className="cpart3MBR">
                    <div className="cpart3MBRL">
                      <div className="cpart3MBRLT">
                        <div className="cpart3MBRLT1">$865k</div>
                        <div className="cpart3MBRLTGreen"></div>
                        <div className="cpart3MBRLT2">12.4%</div>
                      </div>
                      <div className="cpart3MBRLB">India</div>
                    </div>
                    <div className="cpart3MBRR">148k</div>
                  </div>
                </div>
                <div className="cpart3MB4">
                  <div className="cpart3MBL"></div>
                  <div className="cpart3MBR">
                    <div className="cpart3MBRL">
                      <div className="cpart3MBRLT">
                        <div className="cpart3MBRLT1">$745k</div>
                        <div className="cpart3MBRLTRed"></div>
                        <div className="cpart3MBRLT2">11.9%</div>
                      </div>
                      <div className="cpart3MBRLB">Australia</div>
                    </div>
                    <div className="cpart3MBRR">86k</div>
                  </div>
                </div>
                <div className="cpart3MB5">
                  <div className="cpart3MBL"></div>
                  <div className="cpart3MBR">
                    <div className="cpart3MBRL">
                      <div className="cpart3MBRLT">
                        <div className="cpart3MBRLT1">$45k</div>
                        <div className="cpart3MBRLTGreen"></div>
                        <div className="cpart3MBRLT2">16.2%</div>
                      </div>
                      <div className="cpart3MBRLB">Belgium</div>
                    </div>
                    <div className="cpart3MBRR">42k</div>
                  </div>
                </div>
                <div className="cpart3MB6">
                  <div className="cpart3MBL"></div>
                  <div className="cpart3MBR">
                    <div className="cpart3MBRL">
                      <div className="cpart3MBRLT">
                        <div className="cpart3MBRLT1">$12k</div>
                        <div className="cpart3MBRLTGreen"></div>
                        <div className="cpart3MBRLT2">14.8%</div>
                      </div>
                      <div className="cpart3MBRLB">China</div>
                    </div>
                    <div className="cpart3MBRR">8k</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cpart3R">
              <div className="cpart3RT">Sales Stats</div>
              <div className="cpart3RM">
                <SalesStat></SalesStat>
              </div>
              <div className="cpart3RB">
                <div className="cpart3RBLBefore"></div>
                <div className="cpart3RBL">Conversion Ratio</div>
                <div className="cpart3RBRBefore"></div>
                <div className="cpart3RBR">Total requirements</div>
              </div>
            </div>
          </div>
          <div className="cpart4">
            <div className="cpart4L">
              <div className="cpart4LHeader">Team Members</div>
              <div className="cpart4LBox">
                <div className="cpart4LBoxH">
                  <div className="cpart4LBoxH1">NAME</div>
                  <div className="cpart4LBoxH2">PROJECT</div>
                  <div className="cpart4LBoxH3">TASKS</div>
                  <div className="cpart4LBoxH4">PROGRESS</div>
                </div>
                <div className="cpart4LBoxBody">
                  <div className="cpart4LBoxBody1">
                    <div className="cpart4LBoxBodyName">
                      <div className="cpart4LBoxBodyNameL"></div>
                      <div className="cpart4LBoxBodyNameR">
                        <div className="cpart4LBoxBodyNameFull">Nathan Wagner</div>
                        <div className="cpart4LBoxBodyNameTitle">iOS Developer</div>
                      </div>
                    </div>
                    <div className="cpart4LBoxBodyProj">
                      <span>ZIPCAR</span>
                    </div>
                    <div className="cpart4LBoxBodyTask">87/135</div>
                    <div className="cpart4LBoxBodyProg">
                      <OrangeRing></OrangeRing>
                     
                    </div>
                  </div>
                  <div className="cpart4LBoxBody2">
                      <div className="cpart4LBoxBodyName">
                      <div className="cpart4LBoxBodyNameL"></div>
                      <div className="cpart4LBoxBodyNameR">
                        <div className="cpart4LBoxBodyNameFull">Emma Bowen</div>
                        <div className="cpart4LBoxBodyNameTitle">UI/UX Designer</div>
                      </div>
                    </div>
                    <div className="cpart4LBoxBodyProj">
                      <span>BITBANK</span>
                    </div>
                    <div className="cpart4LBoxBodyTask">340/420</div>
                    <div className="cpart4LBoxBodyProg">
                      {/* <RedRing></RedRing> */}
                    </div>
                  </div>
                  <div className="cpart4LBoxBody3">
                    <div className="cpart4LBoxBodyName">
                      <div className="cpart4LBoxBodyNameL">AM</div>
                      <div className="cpart4LBoxBodyNameR">
                        <div className="cpart4LBoxBodyNameFull">Adrian McGuire</div>
                        <div className="cpart4LBoxBodyNameTitle">React developer</div>
                      </div>
                    </div>
                    <div className="cpart4LBoxBodyProj">
                      <span>PAYERS</span>
                    </div>
                    <div className="cpart4LBoxBodyTask">50/82</div>
                    <div className="cpart4LBoxBodyProg">
                      {/* <OrangeRing></OrangeRing> */}
                    </div>
                  </div>
                  <div className="cpart4LBoxBody4">
                    <div className="cpart4LBoxBodyName">
                      <div className="cpart4LBoxBodyNameL"></div>
                      <div className="cpart4LBoxBodyNameR">
                        <div className="cpart4LBoxBodyNameFull">Alma Gonzalez</div>
                        <div className="cpart4LBoxBodyNameTitle">Product Manager</div>
                      </div>
                    </div>
                    <div className="cpart4LBoxBodyProj">
                      <span>BRANDI</span>
                    </div>
                    <div className="cpart4LBoxBodyTask">98/260</div>
                    <div className="cpart4LBoxBodyProg"></div>
                  </div>
                  <div className="cpart4LBoxBody5">
                    <div className="cpart4LBoxBodyName">
                      <div className="cpart4LBoxBodyNameL"></div>
                      <div className="cpart4LBoxBodyNameR">
                        <div className="cpart4LBoxBodyNameFull">Travis Collins</div>
                        <div className="cpart4LBoxBodyNameTitle">VueJs developer</div>
                      </div>
                    </div>
                    <div className="cpart4LBoxBodyProj">
                      <span>AVIATO</span>
                    </div>
                    <div className="cpart4LBoxBodyTask">12/25</div>
                    <div className="cpart4LBoxBodyProg"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cpart4R">
              <div className="cpart4RHeader">
                <div className="cpart4RHeaderCus">CUSTOMER</div>
                <div className="cpart4RHeaderAmt">AMOUNT</div>
                <div className="cpart4RHeaderSta">STATUS</div>
                <div className="cpart4RHeaderPai">PAID BY</div>
                <div className="cpart4RHeaderAct">ACTIONS</div>
              </div>
              <div className="cpart4RBody">
                <div className="cpart4RBody1">
                  <div className="cpart4RBodyCus">
                    <div className="cpart4RBodyCusL"></div>
                    <div className="cpart4RBodyCusR">
                      <div className="cpart4RBodyCusRT">Henry Barnes</div>
                      <div className="cpart4RBodyCusRB">jok@puc.co.uk</div>
                    </div>
                  </div>
                  <div className="cpart4RBodyAmt">$459.65</div>
                  <div className="cpart4RBodySta">
                    <span>PAID</span>
                  </div>
                  <div className="cpart4RBodyPai">
                    <img src="https://greakproject.vercel.app/images/cards/mastercard-light.png" alt="" />
                  </div>
                  <div className="cpart4RBodyAct">
                    <button></button>
                  </div>
                </div>
                <div className="cpart4RBody2">
                  <div className="cpart4RBodyCus">
                    <div className="cpart4RBodyCusL"></div>
                    <div className="cpart4RBodyCusR">
                      <div className="cpart4RBodyCusRT">Herman Holland</div>
                      <div className="cpart4RBodyCusRB">sami@lelo.com</div>
                    </div>
                  </div>
                  <div className="cpart4RBodyAmt">$93.81</div>
                  <div className="cpart4RBodySta">
                    <span>PENDING</span>
                  </div>
                  <div className="cpart4RBodyPai">
                    <img src="https://greakproject.vercel.app/images/cards/visa-light.png" alt="" />
                  </div>
                  <div className="cpart4RBodyAct">
                    <button></button>
                  </div>
                </div>
                <div className="cpart4RBody3">
                  <div className="cpart4RBodyCus">
                    <div className="cpart4RBodyCusL"></div>
                    <div className="cpart4RBodyCusR">
                      <div className="cpart4RBodyCusRT">Hallie Warner</div>
                      <div className="cpart4RBodyCusRB">initus@odemi.com</div>
                    </div>
                  </div>
                  <div className="cpart4RBodyAmt">$934.34</div>
                  <div className="cpart4RBodySta">
                    <span>PENDING</span>
                  </div>
                  <div className="cpart4RBodyPai">
                    <img src="https://greakproject.vercel.app/images/cards/visa-light.png" alt="" />
                  </div>
                  <div className="cpart4RBodyAct">
                    <button></button>
                  </div>
                </div>
                <div className="cpart4RBody4">
                  <div className="cpart4RBodyCus">
                    <div className="cpart4RBodyCusL"></div>
                    <div className="cpart4RBodyCusR">
                      <div className="cpart4RBodyCusRT">John Davidson</div>
                      <div className="cpart4RBodyCusRB">tum@upkesja.gov</div>
                    </div>
                  </div>
                  <div className="cpart4RBodyAmt">$794.97</div>
                  <div className="cpart4RBodySta">
                    <span>PAID</span>
                  </div>
                  <div className="cpart4RBodyPai">
                    <img src="https://greakproject.vercel.app/images/cards/paypal-light.png" alt="" />
                  </div>
                  <div className="cpart4RBodyAct">
                    <button></button>
                  </div>
                </div>
                <div className="cpart4RBody5">
                  <div className="cpart4RBodyCus">
                    <div className="cpart4RBodyCusL"></div>
                    <div className="cpart4RBodyCusR">
                      <div className="cpart4RBodyCusRT">Cora Schmidt</div>
                      <div className="cpart4RBodyCusRB">wipare@tin.com</div>
                    </div>
                  </div>
                  <div className="cpart4RBodyAmt">$19.49</div>
                  <div className="cpart4RBodySta">
                    <span>PAID</span>
                  </div>
                  <div className="cpart4RBodyPai">
                    <img src="https://greakproject.vercel.app/images/cards/mastercard-light.png" alt="" />
                  </div>
                  <div className="cpart4RBodyAct">
                    <button></button>
                  </div>
                </div>
                <div className="cpart4RBody6">
                  <div className="cpart4RBodyCus">
                    <div className="cpart4RBodyCusL"></div>
                    <div className="cpart4RBodyCusR">
                      <div className="cpart4RBodyCusRT">Betty Ross</div>
                      <div className="cpart4RBodyCusRB">nur@kaomor.edu</div>
                    </div>
                  </div>
                  <div className="cpart4RBodyAmt">$636.27</div>
                  <div className="cpart4RBodySta">
                    <span>FAILED</span>
                  </div>
                  <div className="cpart4RBodyPai">
                    <img src="https://greakproject.vercel.app/images/cards/paypal-light.png" alt="" />
                  </div>
                  <div className="cpart4RBodyAct">
                    <button></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                <div className="footer">
          <div className="footerL">
            © 2024, Made with 
            ❤️
            by 
            ThemeSelection
          </div>
          <div className="footerR">
            <div className="footerR1">License</div>
            <div className="footerR2">More Themes</div>
            <div className="footerR3">Documentation</div>
            <div className="footerR4">Support</div>
          </div>
        </div>
      </div>
    </div>
  )
}
