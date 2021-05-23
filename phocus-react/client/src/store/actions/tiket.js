import axios from '../../axios/axios-api'
import { 
    TIKET_CREATE,
    TIKET_FETCH,
    TIKET_UPDATE,
    TIKET_DELETE
 } from './actionTypes'

const URL = '/graphql';
const HEADERS = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept' : 'application/json',
        'Access-Control-Allow-Origin':'*'
    }
  };

export function createTiket(tiket) {
    console.log(tiket)
    return async dispatch => {
        const mutation = `mutation {    
            putTicket(
                organisationId: "${tiket.organisationId}",
                boardId: "${tiket.boardId}",
                ticketId: "${tiket.id}",
                input: {
                    name: "${tiket.name}",
                    description: "${tiket.description}",
                    status: ${tiket.status},
                    visible: ${tiket.visible},
                    }
                )
            {   
                id
                name
                description
                status
                visible 
            }
          }`
        try{
            const response = await axios.post(URL, JSON.stringify({query: mutation}), HEADERS)
            const tiket = response.data.data.ticket
            dispatch(createTiketsSuccess(tiket))
        } catch(e) {
            console.log(e)
        }
    }
}

export function fetchTiket(organisationId,ticketId) {
    return async dispatch => {
        const query = `query {    
            ticket(organisationId: "${organisationId}", ticketId: "${ticketId}")
            { id name visible board {name} description createdAt updatedAt status }
          }`
        try{
            const response = await axios.post(URL, JSON.stringify({query}), HEADERS)
            const tiket = response.data.data.ticket
            dispatch(fetchTiketsSuccess(tiket))
        } catch(e) {
            console.log(e)
        }
    }
}



export function updateTiket(tiket) {
    console.log(tiket)
    return async dispatch => {
        const mutation = `mutation {    
            putTicket(
                organisationId: "${tiket.organisationId}",
                boardId: "${tiket.boardId}",
                ticketId: "${tiket.id}",
                input: {
                    name: "${tiket.name}",
                    description: "${tiket.description}",
                    status: ${tiket.status},
                    visible: ${tiket.visible},
                    }
                )
            {   
                id
                name
                description
                status
                visible 
            }
          }`
        try{
            const response = await axios.post(URL, JSON.stringify({query: mutation}), HEADERS)
            const tiket = response.data.data.putTicket
            dispatch(updateTiketsSuccess(tiket))
        } catch(e) {
            console.log(e)
        }
    }
}

export function deleteTiket(organisationId, ticketId) {

    return async dispatch => {
        const mutation = `mutation {    
            deleteTicket(
                organisationId: "${organisationId}",
                ticketId: "${ticketId}",
                )
            {   
                id
                name
                description
                status
                visible 
            }
          }`
        try{
            const response = await axios.post(URL, JSON.stringify({query: mutation}), HEADERS)
            dispatch(deleteTiketsSuccess(response.data.data))
        } catch(e) {
            console.log(e)
        }
    }
}

export  function fetchTiketsSuccess(tiket){
    return {
        type: TIKET_FETCH,
        tiket,
        updateSuccess: true
    };
}

export  function createTiketsSuccess(tiket){
    return {
        type: TIKET_CREATE,
        tiket,
        updateSuccess: true
    }
}

export  function updateTiketsSuccess(tiket){
    return {
        type: TIKET_UPDATE,
        tiket,
        updateSuccess: true
    }
}

export  function deleteTiketsSuccess(response){
    return {
        type: TIKET_DELETE,
        response,
        deleteSuccess: true
    }
}
