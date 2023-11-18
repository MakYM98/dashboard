"use client"
import TabHeader from "../headers/tabHeader";
import CreditSection from "./components/ccSection";
import InfoCard from "./components/infoCard";
import TrendGraph from "./components/trendGraph";
import data from './data.json'

const Home = () => {
    return ( 
        <div className="h-full">
            <TabHeader title="Dashboard"/>
            <div className="grid grid-cols-3 gap-1 h-full pt-5 max-h-full">
                <div className="col-span-2 flex flex-col">
                    {/* Card Section to show High Level Info */}
                    <div className="w-full grid grid-cols-3 gap-2 ">
                        {
                            data['card_data'].map(x => (
                                <div className="col-span-1">
                                    <InfoCard
                                        title={x.name}
                                        value={x.amount}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    {/* Graph Section to show Assets/Liabilities Trend */}
                    <div className=" border-2 rounded-2xl mt-2 flex-auto">
                        <div className="h-full w-full flex items-center">
                            <TrendGraph/>
                        </div>
                    </div>
                </div>
                {/* To show CC Details & Past Transactions */}
                <div className="col-span-1 border-2 rounded-2xl p-2 ">
                        <CreditSection/>
                </div>
            </div>
        </div>
    );
}
 
export default Home;

// Expense Page
// Pie chart with Category Breakdown
// Cards to show Budgets
// Table to show Expenses

// Liabilities Page
// Line Chart to show total expenses
// Table to show liabilities

