"use client"
import TabHeader from "../headers/tabHeader";
import AssetTrend from "./components/assetLine";
import AssetPie from "./components/assetPie";
import AssetTable from "./components/assetTable";

const Assets = () => {
    return ( 
        <div className="h-full">
            <TabHeader title="Assets"/>
            <div className="h-[40%] mt-5 border-2 rounded-2xl flex justify-center items-center">
                <AssetTrend/>
            </div>
            <div className="flex gap-2 pt-2">
                <div className="w-[60%]">
                    <AssetTable/>
                </div>
                <div className="w-[40%] border-2 rounded-2xl">
                    <AssetPie/>
                </div>

            </div>
        </div>
    );
}
 
export default Assets;