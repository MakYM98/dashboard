"use client"
import TabHeader from "../headers/tabHeader";
import ExpCard from "./components/expCard";
import ExpPie from "./components/expPie";
import ExpPieTable from "./components/expPieTable";
import ExpTable from "./components/expTable";
import data from './data.json'

const Expenses = () => {
    return ( 
        <div className="h-full flex flex-col">
            <TabHeader title="Expenses"/>
            <div className="h-[95%] w-full flex gap-2">
                <div className="h-[100%] w-[50%] xl:w-[40%] pt-5 mt-2 rounded-2xl flex flex-col justify-start bg-[#2f3033] items-start">
                    <h1 className="text-xl px-3 text-white w-full pb-2 pl-4 font-bold">
                        Expenses Breakdown
                    </h1>
                    <ExpPie/>
                    <ExpPieTable/>
                </div>
                <div className="w-[50%] xl:w-[60%] h-full">
                    <div className="w-full h-[20%] grid grid-cols-3 gap-3 px-2 pt-2">
                    
                        {
                            data['exp_cards'].map(card => (
                                <div className="col-span1" key={card.name}>
                                    <ExpCard
                                        name={card.name}
                                        budget={card.budget}
                                        used={card.used}
                                        percentage={card.percentage}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className="pl-5 pr-3 pt-4">
                            <h1 className="text-xl text-white font-bold">
                                Overview
                            </h1>
                        <ExpTable/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Expenses;