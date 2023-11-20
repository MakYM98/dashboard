"use client"
import TabHeader from "../headers/tabHeader";
import InfoCard from "./components/infoCard";
import RecentTable from "./components/recentTable";
import TrendGraph from "./components/trendGraph";
import data from './data.json'

const Home = () => {
    return ( 
        <div className="h-full flex flex-col">
            <TabHeader title="Dashboard"/>
            <div className="gap-1 pt-5 flex-grow h-full">
                <div className="flex flex-col">
                    {/* Card Section to show High Level Info */}
                    <div className="w-full grid grid-cols-4 gap-2 h-full">
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
                    <div className="w-full h-full pt-5">
                        <div className="flex w-full max-h-full gap-5">
                            <div className="max-h-full w-[25%] flex items-start flex-col">                   
                                <h1 className="text-xl px-3 text-[#2f335b]">
                                    Recent Activity
                                </h1>
                                <RecentTable/>
                            </div>
                            <div className="min-h-full w-[75%] flex flex-col justify-start">
                                <h1 className="text-xl px-3 text-[#2f335b] mb-5">
                                    Overview
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

