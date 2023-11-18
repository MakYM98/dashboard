import Assets from '@/components/asset';
import Expenses from '@/components/expense';
import Home from '@/components/home';
import Liabilities from '@/components/liabilities';
import { useSelector } from 'react-redux';

const App = () => {
    const tab = useSelector((state:any) => state.general.curTab)
    return (
        <div className='h-full'>
            {
                tab == 'Home'?
                <Home/>
                :
                tab == 'Assets'?
                <Assets/>
                :
                tab == 'Expenses'?
                <Expenses/>
                :
                tab == 'Loan'?
                <Liabilities/>
                :
                <></>
            }
        </div>
    )
}
 
export default App;