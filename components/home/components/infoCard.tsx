"use client"
import { FaHome,FaWallet, FaRegCreditCard,FaMoneyBill} from "react-icons/fa";

interface InfoProps {
    title: string,
    value: string,

}

const InfoCard = ({title, value} : InfoProps) => {
    return ( 
        <div className="w-full h-full bg-white rounded-2xl flex items-center border-2 px-5 py-4">
            {/* Card Icon */}
            <div className="w-[75px] h-[75px] bg-black rounded-full ">
                {
                    title == 'Assets'?
                    <FaMoneyBill className="w-[75px] h-[75px] text-white p-4"/>
                    :
                    title == 'Loans'?
                    <FaRegCreditCard className="w-[75px] h-[75px] text-white p-4"/>
                    :
                    title == 'Expenses'?
                    <FaWallet className="w-[75px] h-[75px] text-white p-4"/>
                    :
                    <></>
                }
            </div>
            <div className="w-full p-[5px] ml-2">
                <h5 className="text-xl">
                    {value}
                </h5>
                <h5 className="text-sm">
                    {title}
                </h5>
            </div>
        </div>
    );
}
 
export default InfoCard;