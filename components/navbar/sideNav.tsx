"use client"
import NavItems from "@/components/navbar/navItems";
import store from '@/redux_helper/store'
import { Provider } from 'react-redux'

const SideNav = () => {
    return ( 
        <Provider store={store}>
            <nav className="w-[200px] h-[100%] pt-8 pb-6 pl-4 float-left">
                <div className="h-[40px]">
                    <h1 className="text-2xl text-[#2f335b]">
                        FinDash
                    </h1>
                </div>
                <NavItems/>
            </nav>
        </Provider>
    );
}
 
export default SideNav;