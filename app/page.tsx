"use client"
import store from '@/redux_helper/store'
import { Provider } from 'react-redux'
import App from './app';

export default function Page() {

  return (
    <Provider store={store}>
      <div className="
        bg-white w-[calc(100%-230px)] h-[95%] float-right p-10 mt-5 mr-5
        rounded-xl
      ">
        <App/>
      </div>
    </Provider>
  )
}
