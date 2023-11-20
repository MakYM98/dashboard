import data from '@/components/navbar/config.json'
import { useSelector, useDispatch } from 'react-redux'
import { updTab } from "@/redux_helper/features/general/general";
import UserSection from './userSection';
import { FaHome,FaWallet, FaRegCreditCard,FaMoneyBill} from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

const NavItems = () => {
    const tabSelected = useSelector((state:any) => state.general.curTab)
    const dispatch = useDispatch()

    return ( 
        <div className="w-[100%] h-[720px] flex flex-col mt-5 justify-between">
            <div>
                <div>
                    <UserSection/>
                </div>
                <div className='mt-5'>
                {
                    data['items'].map((item:any) => (
                        <div
                            onClick={()=>{dispatch(updTab({tab:item.nav}))}}
                            className={`
                                pt-5 text-lg text-gray-400 hover:text-[#9a9764] 
                                cursor-pointer flex items-center
                                ${tabSelected == item.nav? 'text-[#9a9764]':'text-[#525356]'}
                            `}
                        >
                            {
                                item.nav=='Home'?
                                <FaHome className={`mr-2 ${tabSelected == item.nav? 'text-[#9a9764]':''}`}/>
                                :
                                item.nav=='Assets'?
                                <FaMoneyBill className={`mr-2 ${tabSelected == item.nav? 'text-[#9a9764]':''}`}/>
                                :
                                item.nav=='Expenses'?
                                <FaWallet className={`mr-2 ${tabSelected == item.nav? 'text-[#9a9764]':''}`}/>
                                :
                                item.nav=='Loan'?
                                <FaRegCreditCard className={`mr-2 ${tabSelected == item.nav? 'text-[#9a9764]':''}`}/>
                                :
                                <></>
                            }
                            {item.nav}
                        </div>
                    ))
                }
                </div>
            </div>
            <div className='text-white text-lg flex items-center'>
                <CiLogout className="mr-2"/>
                Logout
            </div>
        </div>
    );
}
 
export default NavItems;