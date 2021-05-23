import { DASHBOARD_CREATE, DASHBOARD_FETCH } from "../actions/actionTypes"

const initialState = {
    id: 1,
    name: "Default Dashboard",
    tikets:[],
    createdSuccess: false
}

export default function dashboardReducer(state = initialState, action) {

    switch(action.type) {
        case DASHBOARD_CREATE:
            return {
                ...state,
                createdSuccess: action.createdSuccess
            }
        case DASHBOARD_FETCH:
            return {
                ...state,
                tikets: [...action.dashboard.board.tickets]
            }
        default:
            return state
    }
} 