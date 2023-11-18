"use client"
import TabHeader from "../headers/tabHeader";
import ExpCard from "./components/expCard";
import ExpPie from "./components/expPie";
import ExpTable from "./components/expTable";
import data from './data.json'

const Expenses = () => {
    return ( 
        <div className="h-full">
            <TabHeader title="Expenses"/>
            <div className="h-full w-full flex gap-2">
                <div className="h-full w-[30%] mt-5 border-2 rounded-2xl flex justify-center items-center">
                    <ExpPie/>
                </div>
                <div className="w-[70%] h-full mt-5">
                    <div className="w-full h-[20%] grid grid-cols-3 gap-1 px-2 pt-2">
                    
                        {
                            data['exp_cards'].map(card => (
                                <div className="col-span1">
                                    <ExpCard
                                        name={card.name}
                                        budget={card.budget}
                                        used={card.used}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className="px-2 mt-2">
                        <ExpTable/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Expenses;