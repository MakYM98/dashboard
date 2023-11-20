"use client"
import { FaHome,FaWallet, FaRegCreditCard,FaMoneyBill} from "react-icons/fa";
import { PiContactlessPayment } from "react-icons/pi";

interface InfoProps {
    title: string,
    value: string,

}

const InfoCard = ({title, value} : InfoProps) => {
    return ( 
        <div className="w-full max-h-[200px] bg-[#2f3033] rounded-2xl px-5 py-4">
            {/* Card Icon */}
            <div className="w-[75px] h-[75px] text-white rounded-full ">
                {
                    title == 'Assets'?
                    <FaMoneyBill className="w-[75px] h-[75px] p-3"/>
                    :
                    title == 'Loans'?
                    <FaRegCreditCard className="w-[75px] h-[75px] p-4"/>
                    :
                    title == 'Expenses'?
                    <FaWallet className="w-[75px] h-[75px] p-4"/>
                    :
                    title == 'Upcoming Payment'?
                    <PiContactlessPayment className="w-[75px] h-[75px] p-3"/>
                    :
                    <></>
                }
            </div>
            <div className="w-full p-[5px] ml-2 flex">
                <div className="w-[100%]">
                    <h5 className="text-sm text-gray-400 mb-2">
                        {title}
                    </h5>
                    <h5 className="text-2xl text-white">
                        {value}
                    </h5>
                </div>
            </div>
        </div>
    );
}
 
export default InfoCard;