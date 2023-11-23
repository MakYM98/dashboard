"use client"
import TabHeader from "../headers/tabHeader";
import AssetTrend from "./components/assetLine";
import AssetPie from "./components/assetPie";
import AssetTable from "./components/assetTable";

const Assets = () => {
    return ( 
        <div className="h-full flex flex-col">
            <TabHeader title="Assets"/>
            <div className="flex w-full h-[95%] gap-2">
                <div className="w-[60%] h-full">
                    <AssetTable/>
                </div>
                <div className="w-[40%] h-full">
                    <div className="h-[48%] rounded-2xl p-5 bg-[#2f3033]">
                        <h1 className="text-xl px-3 text-white pb-5 pl-4 font-bold">
                            Asset Growth
                        </h1>
                        <AssetTrend/>
                    </div>
                    <div className="h-[48%] rounded-2xl mt-5 bg-[#2f3033] p-5">
                        <h1 className="text-xl px-3 text-white pb-2 pl-4 font-bold">
                            Asset Breakdown
                        </h1>
                        <AssetPie/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Assets;