import data from '@/components/navbar/config.json'
import { useSelector, useDispatch } from 'react-redux'
import { updTab } from "@/redux_helper/features/general/general";
import UserSection from './userSection';

const NavItems = () => {
    const tabSelected = useSelector((state:any) => state.general.curTab)
    const dispatch = useDispatch()

    return ( 
        <div className="w-[100%] h-[calc(100%-50px)] flex flex-col justify-between">
            <div>
            {
                data['items'].map((item:any) => (
                    <div
                        onClick={()=>{dispatch(updTab({tab:item.nav}))}}
                        className={`
                            pt-5 text-lg text-gray-500 hover:text-white 
                            cursor-pointer 
                            ${tabSelected == item.nav? 'text-white':''}
                        `}
                    >
                        {item.nav}
                    </div>
                ))
            }
            </div>
            <div>
                <UserSection/>
            </div>
        </div>
    );
}
 
export default NavItems;