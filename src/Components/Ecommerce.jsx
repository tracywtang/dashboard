import React from 'react'
import {Link} from 'react-router-dom'
import './Ecommerce.css'

import NewVisitors from '../Charts/NewVisitors'
import Activity from '../Charts/Activity'
import ProfitE from '../Charts/ProfitE'
import Expense from '../Charts/Expense'
import TotalIncome from '../Charts/TotalIncome'
import Performance from '../Charts/Performance'
import TotalBalance from '../Charts/TotalBalance'
import ConversionRate from '../Charts/ConversionRate'
import Expensese from '../Charts/Expensese'
import LinearProgressDeterminate1 from '../Charts/LinearProgressDeterminate1';

export default function Ecommerce() {
  return (
    <div>
      <div className="ebox">
        <div className="econtents">
          <div className="ePart1">
            <div className="ePart1L">
              <div className="ePart1L1">Congratulations Katie!</div>
              <div className="ePart1L2">Best seller of the month</div>
              <div className="ePart1L3">$48.9k</div>
              <div className="ePart1L4">78% of target</div>
              <button className='ePart1L5'>View Sales</button>
              <img src="https://greakproject.vercel.app/images/misc/trophy.png" alt="" className='ePart1L6'/>
            </div>
            <div className="ePart1R">
              <div className="ePart1RL">
                <div className="ePart1RLHeader">
                  <div className="ePart1RLHeader1">New Visitors</div>
                  <div className="ePart1RLHeader2">Last Week</div>
                </div>
                <div className="ePart1RLBody">
                  <div className="ePart1RLBodyL">
                    <div className="ePart1RLBodyL1">23%</div>
                    <div className="ePart1RLBodyL2">8.75%</div>
                  </div>
                  <div className="ePart1RLBodyR">
                    <NewVisitors></NewVisitors>
                  </div>
                </div>
              </div>
              <div className="ePart1RR">
                <div className="ePart1RRHeader">
                  <div className="ePart1RRHeader1">Activity</div>
                  <div className="ePart1RRHeader2">Last Week</div>
                </div>
                <div className="ePart1RRBody">
                  <div className="ePart1RRBodyL">
                    <div className="ePart1RRBodyL1">82%</div>
                    <div className="ePart1RRBodyL2">19.6%</div>
                  </div>
                  <div className="ePart1RRBodyR">
                    <Activity></Activity>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ePart2">
            <div className="ePart2L">
              <div className="ePart2L1">
                <div className="ePart2L1s1"></div>
                <div className="ePart2L1s2">Sales</div>
                <div className="ePart2L1s3">$4,679</div>
                <div className="ePart2L1s4">28.14%</div>
              </div>
              <div className="ePart2L2">
                <div className="ePart2L2s1">Profit</div>
                <div className="ePart2L2s2">624k</div>
                <div className="ePart2L2s3">
                  <ProfitE></ProfitE>
                </div>
              </div>
              <div className="ePart2L3">
                <div className="ePart2Rs1">Expenses</div>
                <div className="ePart2Rs2">
                  <Expense></Expense>
                </div>
                <div className="ePart2Rs3">$2k Expenses more</div>
                <div className="ePart2Rs4">than last month</div>
              </div>
              <div className="ePart2L4">
                <div className="ePart2L4s1"></div>
                <div className="ePart2L1s2">Transactions</div>
                <div className="ePart2L1s3">$14,854</div>
                <div className="ePart2L1s4">17.53%</div>  
              </div>  
            </div>
            <div className="ePart2R">
              <div className="ePart2RL">
                <div className="ePart2RL1">Total Income</div>
                <div className="ePart2RL2">Yearly report overview</div>
                <div className="ePart2RL3">
                  <TotalIncome></TotalIncome>
                </div>
              </div>
              <div className="ePart2RR">
                <div className="ePart2RRTop">
                  <div className="ePart2RRTop1">Report</div>
                  <div className="ePart2RRTop2">Monthly Avg. $45.578k</div>
                </div>
                <div className="ePart2RRBot">
                  <div className="ePart2RRBot1">
                    <div className="ePart2RRBotImg">
                      <img src="https://greakproject.vercel.app/images/cards/paypal-primary.png" alt="" />
                    </div>
                    <div className="ePart2RRBotAmt">
                      <div className="ePart2RRBotAmtL">
                        <div className="ePart2RRBotAmtL1">Income</div>
                        <div className="ePart2RRBotAmtL2">$42,845</div>
                      </div>
                      <div className="ePart2RRBotAmtR">+2.7k</div>
                    </div>
                  </div>
                  <div className="ePart2RRBot2">
                    <div className="ePart2RRBotImg">
                      <img src="https://greakproject.vercel.app/images/cards/shopping-bag.png" alt="" />
                    </div>
                    <div className="ePart2RRBotAmt">
                      <div className="ePart2RRBotAmtL">
                        <div className="ePart2RRBotAmtL1">Expense</div>
                        <div className="ePart2RRBotAmtL2">$38,658</div>
                      </div>
                      <div className="ePart2RRBotAmtR">-1.15k</div>
                    </div>
                  </div>
                  <div className="ePart2RRBot3">
                    <div className="ePart2RRBotImg">
                      <img src="https://greakproject.vercel.app/images/cards/wallet-info.png" alt="" />
                    </div>
                    <div className="ePart2RRBotAmt">
                      <div className="ePart2RRBotAmtL">
                        <div className="ePart2RRBotAmtL1">Profit</div>
                        <div className="ePart2RRBotAmtL2">$18,220</div>
                      </div>
                      <div className="ePart2RRBotAmtR">+1.34k</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ePart3">
            <div className="ePart3L">
              <div className="ePart3LT">Performance</div>
              <div className="ePart3LB">
                <div className="ePart3LBHeader">
                  <div className="ePart3LBHeader1">Earning: $846.17</div>
                  <div className="ePart3LBHeader2">Sales: 25.7M</div>
                </div>
                <div className="ePart3LBBody">
                  <Performance></Performance>
                </div>
              </div>
            </div>
            <div className="ePart3M">
              <div className="ePart3MT">
                <div className="ePart3MT1">Conversion Rate</div>
                <div className="ePart3MT2">Compared To Last Month</div>
              </div>
              <div className="ePart3MB">
                <div className="ePart3MB1">
                  <div className="ePart3MB1L">
                    <div className="ePart3MB1LAmt">8.72%</div>
                    <div className="ePart3MB1LChange">4.8%</div>
                  </div>
                  <div className="ePart3MB1R">
                    <ConversionRate></ConversionRate>
                  </div>
                </div>
                <div className="ePart3MB2">
                  <div className="ePart3MBL">
                    <div className="ePart3MBL1">Impressions</div>
                    <div className="ePart3MBL2">12.4k Visits</div>
                  </div>
                  <div className="ePart3MBR">12.8%</div>
                </div>
                <div className="ePart3MB3">
                  <div className="ePart3MBL">
                    <div className="ePart3MBL1">Added To Cart</div>
                    <div className="ePart3MBL2">32 Product in cart</div>
                  </div>
                  <div className="ePart3MBR">-8.3%</div>
                </div>
                <div className="ePart3MB4">
                  <div className="ePart3MBL">
                    <div className="ePart3MBL1">CHeckout</div>
                    <div className="ePart3MBL2">21 Product checkout</div>
                  </div>
                  <div className="ePart3MBR">9.12%</div>
                </div>
                <div className="ePart3MB5">
                  <div className="ePart3MBL">
                    <div className="ePart3MBL1">Purchased</div>
                    <div className="ePart3MBL2">12 Orders</div>
                  </div>
                  <div className="ePart3MBR">2.24%</div>
                </div>
              </div>
            </div>
            <div className="ePart3R">
              <div className="ePart3RT">
                <div className="ePart3RTL">
                  <div className="ePart3RTLs1"></div>
                  <div className="ePart2L1s2">Revenue</div>
                  <div className="ePart2L1s3">$42,389</div>
                  <div className="ePart2L1s4">52.76%</div>
                </div>
                <div className="ePart3RTR">
                  <div className="ePart3RTR1">Sales</div>
                  <div className="ePart3RTR2">482k</div>
                  <div className="ePart3RTR3">+34%</div>
                  <div className="ePart3RTR4">Sales Target</div>
                  <div className="ePart3RTR5">
                    <div className="ePart3RTR5L">
                      <LinearProgressDeterminate1></LinearProgressDeterminate1>
                    </div>
                    <div className="ePart3RTR5R">78%</div>
                  </div>
                </div>
              </div>
              <div className="ePart3RB">
                <div className="ePart3RBL">
                  <div className="ePart3RBL1">Expenses</div>
                  <div className="ePart3RBL2">
                    <div className="ePart3RBL2T">$84.7k</div>
                    <div className="ePart3RBL2B">8.2%</div>
                  </div>
                  <div className="ePart3RBL3">JULY 2024</div>
                </div>
                <div className="ePart3RBR">
                  <Expensese></Expensese>
                </div>
              </div>
            </div>
          </div>
          <div className="ePart4">
            <div className="ePart4L">
              <div className="ePart4LH">
                <div className="ePart4LHProd">Product</div>
                <div className="ePart4LHCat">category</div>
                <div className="ePart4LHPay">payment</div>
                <div className="ePart4LHOrd">order status</div>
                <div className="ePart4LHAct">actions</div>
              </div>
              <div className="ePart4LB">
                <div className="ePart4LB1">
                  <div className="ePart4LBProd">
                    <div className="ePart4LBProdL"></div>
                    <div className="ePart4LBProdR">
                      <div className="ePart4LBProdR1">OnePlus 7Pro</div>
                      <div className="ePart4LBProdR2">OnePlus</div>
                    </div>
                  </div>
                  <div className="ePart4LBCat">
                    <div className="ePart4LBCatL">
                      <div className="ePart4LBCatLImg"></div>
                    </div>
                    <div className="ePart4LBCatR">Smart Phone</div>
                  </div>
                  <div className="ePart4LBPay">
                    <div className="ePart4LBPayT">
                      <div className="ePart4LBPayT1">$120</div>
                      <div className="ePart4LBPayT2">/$499</div>
                    </div>
                    <div className="ePart4LBPayB">Partially Paid</div>
                  </div>
                  <div className="ePart4LBOrd">
                    <span>confirmed</span>
                  </div>
                  <div className="ePart4LBAct">
                    <div className="ePart4LBActImg"></div>
                  </div>
                </div>
                <div className="ePart4LB2">
                  <div className="ePart4LBProd">
                    <div className="ePart4LBProdL"></div>
                    <div className="ePart4LBProdR">
                      <div className="ePart4LBProdR1">Magic Mouse</div>
                      <div className="ePart4LBProdR2">Apple</div>
                    </div>
                  </div>
                  <div className="ePart4LBCat">
                    <div className="ePart4LBCatL">
                      <div className="ePart4LBCatLImg"></div>
                    </div>
                    <div className="ePart4LBCatR">Mouse</div>
                  </div>
                  <div className="ePart4LBPay">
                    <div className="ePart4LBPayT">
                      <div className="ePart4LBPayT1">$149</div>
                      <div className="ePart4LBPayT2"></div>
                    </div>
                    <div className="ePart4LBPayB">Fully Paid</div>
                  </div>
                  <div className="ePart4LBOrd">
                    <span>completed</span>
                  </div>
                  <div className="ePart4LBAct">
                    <div className="ePart4LBActImg"></div>
                  </div>
                </div>
                <div className="ePart4LB3">
                  <div className="ePart4LBProd">
                    <div className="ePart4LBProdL"></div>
                    <div className="ePart4LBProdR">
                      <div className="ePart4LBProdR1">iMac Pro</div>
                      <div className="ePart4LBProdR2">Apple</div>
                    </div>
                  </div>
                  <div className="ePart4LBCat">
                    <div className="ePart4LBCatL">
                      <div className="ePart4LBCatLImg"></div>
                    </div>
                    <div className="ePart4LBCatR">Computer</div>
                  </div>
                  <div className="ePart4LBPay">
                    <div className="ePart4LBPayT">
                      <div className="ePart4LBPayT1">$0</div>
                      <div className="ePart4LBPayT2">/$899</div>
                    </div>
                    <div className="ePart4LBPayB">Unpaid</div>
                  </div>
                  <div className="ePart4LBOrd">
                    <span>cancelled</span>
                  </div>
                  <div className="ePart4LBAct">
                    <div className="ePart4LBActImg"></div>
                  </div>
                </div>
                <div className="ePart4LB4">
                  <div className="ePart4LBProd">
                    <div className="ePart4LBProdL"></div>
                    <div className="ePart4LBProdR">
                      <div className="ePart4LBProdR1">Note 10</div>
                      <div className="ePart4LBProdR2">Samsung</div>
                    </div>
                  </div>
                  <div className="ePart4LBCat">
                    <div className="ePart4LBCatL">
                      <div className="ePart4LBCatLImg"></div>
                    </div>
                    <div className="ePart4LBCatR">Smart Phone</div>
                  </div>
                  <div className="ePart4LBPay">
                    <div className="ePart4LBPayT">
                      <div className="ePart4LBPayT1">$169</div>
                      <div className="ePart4LBPayT2"></div>
                    </div>
                    <div className="ePart4LBPayB">Fully Paid</div>
                  </div>
                  <div className="ePart4LBOrd">
                    <span>conpleted</span>
                  </div>
                  <div className="ePart4LBAct">
                    <div className="ePart4LBActImg"></div>
                  </div>
                </div>
                <div className="ePart4LB5">
                 <div className="ePart4LBProd">
                    <div className="ePart4LBProdL"></div>
                    <div className="ePart4LBProdR">
                      <div className="ePart4LBProdR1">iPhone 11 Pro</div>
                      <div className="ePart4LBProdR2">Apple</div>
                    </div>
                  </div>
                  <div className="ePart4LBCat">
                    <div className="ePart4LBCatL">
                      <div className="ePart4LBCatLImg"></div>
                    </div>
                    <div className="ePart4LBCatR">Smart Phone</div>
                  </div>
                  <div className="ePart4LBPay">
                    <div className="ePart4LBPayT">
                      <div className="ePart4LBPayT1">$399</div>
                      <div className="ePart4LBPayT2"></div>
                    </div>
                    <div className="ePart4LBPayB">Fully Paid</div>
                  </div>
                  <div className="ePart4LBOrd">
                    <span>completed</span>
                  </div>
                  <div className="ePart4LBAct">
                    <div className="ePart4LBActImg"></div>
                  </div>
                </div>
                <div className="ePart4LB6">
                  <div className="ePart4LBProd">
                    <div className="ePart4LBProdL"></div>
                    <div className="ePart4LBProdR">
                      <div className="ePart4LBProdR1">Mi Led TV 4X</div>
                      <div className="ePart4LBProdR2">Xiaomi</div>
                    </div>
                  </div>
                  <div className="ePart4LBCat">
                    <div className="ePart4LBCatL">
                      <div className="ePart4LBCatLImg"></div>
                    </div>
                    <div className="ePart4LBCatR">Smart TV</div>
                  </div>
                  <div className="ePart4LBPay">
                    <div className="ePart4LBPayT">
                      <div className="ePart4LBPayT1">$349</div>
                      <div className="ePart4LBPayT2">/$2599</div>
                    </div>
                    <div className="ePart4LBPayB">Partially Paid</div>
                  </div>
                  <div className="ePart4LBOrd">
                    <span>confirmed</span>
                  </div>
                  <div className="ePart4LBAct">
                    <div className="ePart4LBActImg"></div>
                  </div>
                </div>
                <div className="ePart4LB7">
                  <div className="ePart4LBProd">
                    <div className="ePart4LBProdL"></div>
                    <div className="ePart4LBProdR">
                      <div className="ePart4LBProdR1">Logitech MX</div>
                      <div className="ePart4LBProdR2">Logitech</div>
                    </div>
                  </div>
                  <div className="ePart4LBCat">
                    <div className="ePart4LBCatL">
                      <div className="ePart4LBCatLImg"></div>
                    </div>
                    <div className="ePart4LBCatR">Mouse</div>
                  </div>
                  <div className="ePart4LBPay">
                    <div className="ePart4LBPayT">
                      <div className="ePart4LBPayT1">$89</div>
                      <div className="ePart4LBPayT2"></div>
                    </div>
                    <div className="ePart4LBPayB">Fully Paid</div>
                  </div>
                  <div className="ePart4LBOrd">
                    <span>completed</span>
                  </div>
                  <div className="ePart4LBAct">
                    <div className="ePart4LBActImg"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ePart4R">
              <div className="ePart4RHeader">Total Balance</div>
              <div className="ePart4RBody">
                <div className="ePart4RBody1">
                  <div className="ePart4RBody1L">
                    <div className="ePart4RBody1Img">
                      <div className="ePart4RBody1ImgSou"></div>
                    </div>
                    <div className="ePart4RBody1Amt">
                      <div className="ePart4RBody1AmtT">$2.54k</div>
                      <div className="ePart4RBody1AmtB">Wallet</div>
                    </div>
                  </div>
                  <div className="ePart4RBody1R">
                    <div className="ePart4RBody1Img">
                      <div className="ePart4RBody1ImgSou"></div>
                    </div>
                    <div className="ePart4RBody1Amt">
                      <div className="ePart4RBody1AmtT">$4.21k</div>
                      <div className="ePart4RBody1AmtB">Paypal</div>
                    </div>
                  </div>
                </div>
                <div className="ePart4RBody2">
                  <TotalBalance></TotalBalance>
                </div>
                <div className="ePart4RBody3"></div>
                <div className="ePart4RBody4">
                  <div className="ePart4RBody4L">
                    <div className="ePart4RBody4L1">You have done 57.6% more sales.</div>
                    <div className="ePart4RBody4L2">Check your new badge in your profile.</div>
                  </div>
                  <div className="ePart4RBody4R"></div>
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
