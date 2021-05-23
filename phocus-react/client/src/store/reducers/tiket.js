import { 
    TIKET_CREATE,
    TIKET_FETCH,
    TIKET_UPDATE,
    TIKET_DELETE
} from '../actions/actionTypes'

const STATUS = {
    DONE: 'DONE',
    INPROGRESS: 'INPROGRESS',
    TODO: 'TODO'
}
const initialState = {
    tiket:{
        id: "",
        organisationId: "806fb7b1-64fb-4ec1-853b-f4ac7554cc64",
        name: "",
        description: "",
        status: STATUS.TODO,
        visible: true,
        createdAt: "",
        updatedAt: "",
        board: {
          name: ""
        }
    },
    updateSuccess: false
}

export default function tiketReducer(state = initialState, action) {
    switch (action.type) {
        case TIKET_CREATE:
            return {
                ...state,
                tiket: action.tiket
            }
        case TIKET_FETCH:
            console.log()
            return {
                ...state,
                tiket: action.tiket
            }
        case TIKET_UPDATE:
            console.log(action)
            return {
                ...state,
                tiket: action.tiket,
            }
        case TIKET_DELETE:
            return {
                ...state,
                deleteSuccess: action.deleteSuccess
            }
        default:
            return state
    }
}