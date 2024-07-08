import React from 'react'
import {Link} from 'react-router-dom'
import './Analytics.css'

import ApexCharts from 'apexcharts'
import Order from '../Charts/Order'
import TotalRevenus from '../Charts/TotalRevenus'
import CompGrowth from '../Charts/CompGrowth'
import Revenue from '../Charts/Revenue'
import Profit from '../Charts/Profit'
import OrderSta from '../Charts/OrderSta'
import CustomTabPanel from '../Charts/CustomTabPanel'
import LabTabs from '../Charts/LabTabs'

import Test from '../Charts/Test'
import TesteCharts from '../Charts/TesteCharts'

export default function Analytics() {
  return (
    <div>
      <div className="box">
        {/* <div className="top">top</div> */}
        <div className="contents">
          <div className="part1">
            <div className="congrats">
              <div className="congratsText">
                <div className="congratsText1">Congratulations John!</div>
                <div className="congratsText2">You have done 72% more sales today.</div>
                <div className="congratsText2">Check your new badge in your profile.</div>
                <button className='congratsText3'>VIEW BADGES</button>
              </div>
              <div className="congratsImg"></div>
            </div>
            <div className="order">
              <div className="orderNumber">
                <div className="orderNumber1">Order</div>
                <div className="orderNumber2">276k</div>
              </div>
              <div className="orderImg">
                <Order></Order>
              </div>
            </div>
            <div className="sales">
              <div className="salesImg"></div>
              <div className="salesText1">Sales</div>
              <div className="salesText2">$4,679</div>
              <div className="salesText3">28.14%</div>
            </div>
          </div>
          <div className="part2">
            <div className="part2Left">
              <div className="totalRev">
                <div className="totalRevText">Total Revenue</div>
                <div className="totalRevChart">
                  <TotalRevenus></TotalRevenus>

                </div>
              </div>
              <div className="compGrowth">
                <div className="compGrowthTop">
                  <select name="" id="" className='compGrowthTopButton'>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                  </select>                 
                  <div className="compGrowthTopChart">
                    {/* direct input  */}
                    <CompGrowth></CompGrowth>
                  </div>
                  <div className="compGrowthTopDes">62% Company Growth</div>
                </div>
                <div className="compGrowthBottom">
                  <div className="compGrowthBottomL">
                    <div className="compGrowthBottomL1">
                      <div className="compGrowthBottomL1Img"></div>
                    </div>
                    <div className="compGrowthBottomL2">
                      <div>2024 $32.5k</div>
                    </div>
                  </div>
                  <div className="compGrowthBottomR">
                    <div className="compGrowthBottomR1">
                      <div className="compGrowthBottomR1Img"></div>
                    </div>
                    <div className="compGrowthBottomR2">
                      <div>2023 $41.2k</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="part2Right">
              <div className="part2RightTop">
                <div className="payment">
                    <div className="paymentImg"></div>
                    <div className="paymentText1">Payments</div>
                    <div className="paymentText2">$2,468</div>
                    <div className="paymentText3">14.82%</div>
                </div>
                <div className="revenue">
                  <div className="revenueNumber">
                    <div className="revenueNumber1">Revenue</div>
                    <div className="revenueNumber2">425k</div>
                  </div>
                  <div className="revenueImg">
                    <Revenue></Revenue>
                  </div>
                </div>
              </div>
              <div className="profit">
                <div className="profitL">
                  <div className="profit1">Profit Report</div>
                  <div className="profit2">YEAR 2024</div>
                  <div className="profit3">68.2%</div>
                  <div className="profit4">$84,686k</div>
                </div>
                <div className="profitR">
                  <Profit></Profit>
                </div>
              </div>
            </div>
          </div>
          <div className="part3">
            <div className="orderStatistics">
              <div className="orderStatisticsTop">
                <div className="orderStatisticsTop1">Order Statistics</div>
                <div className="orderStatisticsTop2">42.82k Total Sales</div>
              </div>
              <div className="orderStatisticsBot">
                <div className="orderStatisticsBot1">
                  <div className="orderStatisticsBot1L">
                    <div className="orderStatisticsBot1LT">8,258</div>
                    <div className="orderStatisticsBot1LB">Total Orders</div>
                  </div>
                  <div className="orderStatisticsBot1R">
                    <OrderSta></OrderSta>
                  </div>
                </div>
                <div className="orderStatisticsBot2">
                  <div className="orderStatisticsBot2L"></div>
                  <div className="orderStatisticsBot2LR">
                    <div className="orderStatisticsBot2LRText">
                      <div className="orderStatisticsBot2LRText1">Electronic</div>
                      <div className="orderStatisticsBot2LRText2">Mobile, Earbuds, TV</div>
                    </div>
                    <div className="orderStatisticsBot2LRAmt">82.5k</div>
                  </div>
                </div>
                <div className="orderStatisticsBot3">
                  <div className="orderStatisticsBot2L"></div>
                  <div className="orderStatisticsBot2LR">
                    <div className="orderStatisticsBot2LRText">
                      <div className="orderStatisticsBot2LRText1">Fashion</div>
                      <div className="orderStatisticsBot2LRText2">Tshirt, Jeans, Shoes</div>
                    </div>
                    <div className="orderStatisticsBot2LRAmt">23.8k</div>
                  </div>
                </div>
                <div className="orderStatisticsBot4">
                  <div className="orderStatisticsBot2L"></div>
                  <div className="orderStatisticsBot2LR">
                    <div className="orderStatisticsBot2LRText">
                      <div className="orderStatisticsBot2LRText1">Decor</div>
                      <div className="orderStatisticsBot2LRText2">Fine Art, Dining</div>
                    </div>
                    <div className="orderStatisticsBot2LRAmt">849</div>
                  </div>                  
                </div>
                <div className="orderStatisticsBot5">
                  <div className="orderStatisticsBot2L"></div>
                  <div className="orderStatisticsBot2LR">
                    <div className="orderStatisticsBot2LRText">
                      <div className="orderStatisticsBot2LRText1">Sports</div>
                      <div className="orderStatisticsBot2LRText2">Football, Cricket Kit</div>
                    </div>
                    <div className="orderStatisticsBot2LRAmt">99</div>
                  </div>                  
                </div>
              </div>
            </div>
            <div className="income">
              <CustomTabPanel></CustomTabPanel>
            </div>
            <div className="transaction">
              <div className="transactionT">Transactions</div>
              <div className="transactionB">
                <div className="transactionB1">
                  <div className="transactionBL"></div>
                  <div className="transactionBR">
                    <div className="transactionBRL">
                      <div className="transactionBRLT">Paypal</div>
                      <div className="transactionBRLB">Send money</div>
                    </div>
                    <div className="transactionBRR">
                      <div className="transactionBRRAmt">+82.6</div>
                      <div className="transactionBRRCurr">USD</div>
                    </div>
                  </div>
                </div>
                <div className="transactionB2">
                <div className="transactionBL"></div>
                  <div className="transactionBR">
                    <div className="transactionBRL">
                      <div className="transactionBRLT">Wallet</div>
                      <div className="transactionBRLB">Mac'D</div>
                    </div>
                    <div className="transactionBRR">
                      <div className="transactionBRRAmt">+270.69</div>
                      <div className="transactionBRRCurr">USD</div>
                    </div>
                  </div>
                </div>
                <div className="transactionB3">
                <div className="transactionBL"></div>
                  <div className="transactionBR">
                    <div className="transactionBRL">
                      <div className="transactionBRLT">Transfer</div>
                      <div className="transactionBRLB">Refund</div>
                    </div>
                    <div className="transactionBRR">
                      <div className="transactionBRRAmt">+637.91</div>
                      <div className="transactionBRRCurr">USD</div>
                    </div>
                  </div>
                </div>
                <div className="transactionB4">
                <div className="transactionBL"></div>
                  <div className="transactionBR">
                    <div className="transactionBRL">
                      <div className="transactionBRLT">Credit Card</div>
                      <div className="transactionBRLB">Ordered Food</div>
                    </div>
                    <div className="transactionBRR">
                      <div className="transactionBRRAmt">-838.71</div>
                      <div className="transactionBRRCurr">USD</div>
                    </div>
                  </div>
                </div>
                <div className="transactionB5">
                <div className="transactionBL"></div>
                  <div className="transactionBR">
                    <div className="transactionBRL">
                      <div className="transactionBRLT">Wallet</div>
                      <div className="transactionBRLB">Starbucks</div>
                    </div>
                    <div className="transactionBRR">
                      <div className="transactionBRRAmt">+203.33</div>
                      <div className="transactionBRRCurr">USD</div>
                    </div>
                  </div>
                </div>
                <div className="transactionB6">
                <div className="transactionBL"></div>
                  <div className="transactionBR">
                    <div className="transactionBRL">
                      <div className="transactionBRLT">Mastercard</div>
                      <div className="transactionBRLB">Ordered Food</div>
                    </div>
                    <div className="transactionBRR">
                      <div className="transactionBRRAmt">-92.45</div>
                      <div className="transactionBRRCurr">USD</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="part4">
            <div className="activity">
              <div className="activityT">Activity Timeline</div>
              <div className="activityB">
                <div className='activityB1'>
                    <div className="activityLine">
                      <div className="activityLineT"></div>
                      <div className="activityLineB"></div>
                    </div>
                    <div className="activityContents">
                      <div className="activityContents1">
                        <div className="activityContents1L">12 Invoices have been paid</div>
                        <div className="activityContents1R">12 mins ago</div>
                      </div>
                      <div className="activityContents2">Invoices have been paid to the company</div>
                      <div className="activityContents3">
                        <div className="activityContents3Img"></div>
                        <div className="activityContents3File">Invoices.pdf</div>
                      </div>
                    </div>
                </div>
                <div className='activityB2'>
                    <div className="activityLine">
                      <div className="activityLineT"></div>
                      <div className="activityLineB"></div>
                    </div>
                    <div className="activityContents">
                      <div className="activityContents1">
                        <div className="activityContents1L">Client Meeting</div>
                        <div className="activityContents1R">45 mins ago</div>
                      </div>
                      <div className="activityContents2">Project meeting with john @10:15pm</div>
                      <div className="activityContents3">
                        <div className="activityContents3Img"></div>
                        <div className="activityContents3File">Steven Nash (Client)</div>
                      </div>
                    </div>
                </div>
                <div className='activityB3'>
                    <div className="activityLine">
                      <div className="activityLineT3"></div>

                    </div>
                    <div className="activityContents">
                      <div className="activityContents1">
                        <div className="activityContents1L">Create a new project for client</div>
                        <div className="activityContents1R">2 days ago</div>
                      </div>
                      <div className="activityContents2">5 team members in a project</div>
                      <div className="activityContents3">
                        <div className="activityContents3Img1"></div>
                        <div className="activityContents3Img2"></div>
                        <div className="activityContents3Img3"></div>
                        <div className="activityContents3Img4"></div>
                        <div className="activityContents3Img5"></div>
                        
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="rank">
              <LabTabs></LabTabs>
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
