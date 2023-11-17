import { FcSimCardChip } from "react-icons/fc";
import { BiLogoVisa } from "react-icons/bi";

const CreditCard = () => {
    return ( 
        <div className="w-full bg-black h-full mt-2 rounded-2xl">
            <div className="flex justify-between px-6 pt-5 items-center">
                <FcSimCardChip size={60}/>
                <BiLogoVisa color={"white"} size={60}/>
            </div>
            <div className="text-white text-xl px-5 pt-16 tracking-[0.2em]">
                **** **** *** 1234
            </div>
            <div className="flex justify-between px-6 pt-4 pb-4">
                <div className="text-white">
                    <p className="text-gray-400">
                        Cardholder Name
                    </p>
                    <p>Yeong Meng</p>
                </div>
                <div className="text-white">
                    <p className="text-gray-400">
                        Expiry
                    </p>
                    <p>01/24</p>
                </div>
            </div>
        </div>
    );
}
 
export default CreditCard;