import { DASHBOARD_CREATE, DASHBOARD_FETCH } from './actionTypes'
import axios from '../../axios/axios-api'

const URL = '/graphql';
const HEADERS = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept' : 'application/json',
        'Access-Control-Allow-Origin':'*'
    }
  };

export function createDashboard(board) {
    return async dispatch => {
        const mutation = `mutation {  
            putBoard(
                organisationId: "${board.organisationId}",
                boardId: "${board.boardId}",
                input: {name:"${board.name}"}
                ){
                    id
                    name
                    createdAt
                    updatedAt
                    tickets {
                        name
                        description
                        status
                    }
                }
            }`
            try{
                const response = await axios.post(URL, JSON.stringify({query:mutation}), HEADERS)
                const dashboard = response.data.data
                dispatch(fetchDashboardSuccess(dashboard))  
            } catch(e) {
                console.log(e)
            }
    }
}
export function getDashboard(board) {
    return async dispatch => {
        const query = `query {    
            board(
                organisationId: "${board.organisationId}",
                boardId: "${board.ticketId}"
                )
                {
                    id
                    name
                    createdAt
                    updatedAt
                    tickets{
                        id
                        name
                        description
                    }
                }
            }`
            try{
                const response = await axios.post(URL, JSON.stringify({query}), HEADERS)
                const dashboard = response.data.data
                dispatch(fetchDashboardSuccess(dashboard))
            } catch(e) {
                console.log(e)
            }
    }
}
export function fetchDashboardSuccess(dashboard){
    return {
        type: DASHBOARD_FETCH,
        dashboard,
        createdSuccess: true
    };
}

export function createDashboardSuccess(dashboard){
    return {
        type: DASHBOARD_CREATE,
        dashboard
    }
}
