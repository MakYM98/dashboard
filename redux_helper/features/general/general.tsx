import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'

interface General {
    curTab: string,
}

const initialState:General = {
    curTab : 'Home'
}

const generalSlice = createSlice({
    name:'general',
    initialState,
    reducers:{
        updTab(state, action) {
            return {
                ...state,
                curTab: action.payload.tab
            }
        }
    }
})

export const { 
    updTab,
} = generalSlice.actions

export default generalSlice.reducer