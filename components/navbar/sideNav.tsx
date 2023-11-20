"use client"
import NavItems from "@/components/navbar/navItems";
import store from '@/redux_helper/store'
import { Provider } from 'react-redux'

const SideNav = () => {
    return ( 
        <Provider store={store}>
            <nav className="w-[200px] h-[100%] pt-8 pb-6 pl-4 float-left">
                <NavItems/>
            </nav>
        </Provider>
    );
}
 
export default SideNav;