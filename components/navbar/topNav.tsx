import { MdOutlineMessage, MdOutlineCreditCard,MdNotifications } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const TopNav = () => {
    return ( 
        <div className="flex mt-5">
            <div className="h-full w-full flex items-center">
                <h1 className="text-2xl text-white w-[230px] text-left pl-4">
                    FinDash
                </h1>
                <div className="w-[50%] pl-4">
                    <form>   
                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-white border border-[rgb(107 114 128)] rounded-lg bg-[#0c0d10] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
                        </div>
                    </form>
                </div>
                <div className="w-[50%] flex items-center justify-end mr-5">
                    <div className="bg-[#3c3d3f] text-white p-2 rounded-2xl mr-3">
                        <MdOutlineCreditCard size={25}/>
                    </div>
                    <div className="bg-[#3c3d3f] text-white p-2 rounded-2xl mr-3">
                    <MdOutlineMessage size={25}/>
                    </div>
                    <div className="bg-[#3c3d3f] text-white p-2 rounded-2xl mr-3">
                    <MdNotifications size={25}/>
                    </div>
                    <div className="bg-[#3c3d3f] text-white p-2 rounded-2xl mr-3">
                    <FaUser size={25}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default TopNav;