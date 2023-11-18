import Assets from '@/components/asset';
import Home from '@/components/home';
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
                <></>
            }
        </div>
    )
}
 
export default App;