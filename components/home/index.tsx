"use client"
import TabHeader from "../headers/tabHeader";
import CreditSection from "./components/ccSection";
import InfoCard from "./components/infoCard";
import RecentTable from "./components/recentTable";
import TrendGraph from "./components/trendGraph";
import data from './data.json'

const Home = () => {
    return ( 
        <div className="h-full">
            <TabHeader title="Dashboard"/>
            <div className="gap-1 h-full pt-5 max-h-full">
                <div className="flex flex-col">
                    {/* Card Section to show High Level Info */}
                    <div className="w-full grid grid-cols-4 gap-2 ">
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
                    <div className="flex-auto w-full mt-10">
                        <div className="flex w-full h-full">
                            <div className="h-full w-[30%] flex items-start">
                                <RecentTable/>
                            </div>
                            <div className="min-h-full w-[70%] flex flex-col justify-start">
                                <h1 className="text-xl px-1 text-[#2f335b] mb-5">
                                    Expenses
                                </h1>
                                <TrendGraph/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Home;

