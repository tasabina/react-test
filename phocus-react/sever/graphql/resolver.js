const USERS = [{
    cognitoId: "true",
    createdAt: "20-12-2021",
    email: "test@test.com",
    firstName: "Max",
    id: "e5-565-t7667584ut",
    lastName: "Pain",
    updatedAt: "20-12-2021"
},
{
    cognitoId: "true",
    createdAt: "20-12-2021",
    email: "test@test.com",
    firstName: "Max",
    id: "e7-565-t7667584ut",
    lastName: "Pain",
    updatedAt: "20-12-2021"
},
{
    cognitoId: "true",
    createdAt: "20-12-2021",
    email: "test@test.com",
    firstName: "Max",
    id: "e6-565-t7667584ut",
    lastName: "Pain",
    updatedAt: "20-12-2021"
}]

const TICKETSTATUS = {
    DONE: 'DONE',
    INPROGRESS: 'INPROGRESS',
    TODO: 'TODO'
}

const BOARD = [
    {
        createdAt: "20-12-2021",
        id: "e16-565-t7667584ut",
        name: "New dashboard",
        tickets: [],
        updatedAt: "20-21-2021"
    }
]

const TICKET = {
    board: BOARD,
    createdAt: "20-12-2021",
    description: "Short description",
    id: "e20-565-t7667584ut",
    name: "New task for developers",
    status: TICKETSTATUS.DONE,
    updatedAt: "20-12-2021",
    visible: true
}

const TICKETS = [
    {
        board: BOARD,
        createdAt: "20-12-2021",
        description: "Short description",
        id: "e201-565-t7667584ut",
        name: "New task for developers",
        status: TICKETSTATUS.TODO,
        updatedAt: "20-12-2021",
        visible: true
    },
    {
        board: BOARD,
        createdAt: "20-12-2021",
        description: "Short description",
        id: "e202-565-t7667584ut",
        name: "New task2 for developers",
        status: TICKETSTATUS.TODO,
        updatedAt: "20-12-2021",
        visible: true
    },
    {
        board: BOARD,
        createdAt: "20-12-2021",
        description: "Short description",
        id: "e203-565-t7667584ut",
        name: "New task3 for developers",
        status: TICKETSTATUS.DONE,
        updatedAt: "20-12-2021",
        visible: true
    }
]

makeId = () => {
    let ID = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for ( var i = 0; i < 12; i++ ) {
        ID += characters.charAt(Math.floor(Math.random() * 36));
    }
    return ID;
}

module.exports = {
    me() {
        return USER[0]
    },
    ticket(id) {
        let tikets = [...TICKETS]
        let tiket = {}
        tikets.forEach(
            tik => {
                if(id.ticketId == tik.id) {
                    tiket = tik
                }
            }
        )
        tiket.board = BOARD[0]
        return tiket
    }, 
    board(organisationId, ticketId) {
        let board = BOARD[0]
        board.tickets = TICKETS
        return board
    },
    deleteTicket(id) {
        let tikets = [...TICKETS]
        let tiket = {}
        TICKETS.map(
           ( tik, index )=> {
                if(id.ticketId == tik.id) {
                    tiket = tik
                    TICKETS.splice(index, 1);
                }
            }
        )
        console.log(TICKETS)
        return tiket
    },
    putBoard(organisationId, boardId, input) {

        let board = {
            createdAt: new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear(),
            id: makeId(),
            name: organisationId.input.name,
            tickets: [],
            updatedAt: new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear() 
        }
        BOARD.push(board)
        console.log(BOARD)
        return BOARD[BOARD.length - 1]
    },
    putTicket(organisationId, boardId, ticketId, input){
        let tiket = {
            board: BOARD[0],
            createdAt: new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear(),
            description: organisationId.input.description,
            id: makeId(),
            name: organisationId.input.name,
            status: organisationId.input.status,
            updatedAt: new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear(),
            visible: organisationId.input.visible
        }
        let update = false
        TICKETS.map(
            ( tik, index )=> {
                 if(organisationId.ticketId == tik.id) {
                    tiket.id = organisationId.ticketId
                    update = true
                    TICKETS[index] = tiket
                    return tiket
                 }
             }
         )
         if(!update) {
            TICKETS.push(tiket)
         }
        return TICKETS[TICKETS.length - 1]
    }
}