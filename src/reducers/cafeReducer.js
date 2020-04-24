const initialState={
    menu : [],
    preparedMenu:[],
    order : {
        totalQuantity : 0,
        totalPrice :0,
        items : []
    }


}

const cafeReducer = (state = initialState, action) => {
    console.log('state',state, "action",action)
    switch (action.type) {
        case 'FETCH_MENU':
            if(action.payload){
                state = {
                    ...state,
                    menu : action.payload,
                    preparedMenu: action.payload
                }
            return state
            }
            break
        case 'ADD_PRODUCT':
            if(action.payload){
                let currentOrder = initialState.order
                if(currentOrder.items.length>0){
                    currentOrder.items.map((item) => {
                        if(item.id === action.payload.id){
                            if(item.quantity){
                                item.quantity += 1
                            }
                            else
                                action.payload.quantity = 1
                        }
                        else
                            item.quantity = 1
                    })
                }
                else
                    action.payload.quantity = 1

                currentOrder.totalQuantity += 1
                currentOrder.totalPrice += action.payload.price
                currentOrder.items.push(action.payload) 
                state = {
                    ...state,
                    order : currentOrder
                }
                return state
            }
            break
        case 'ON_SEARCH':
            if(action.payload && action.payload !== ''){
                var currentMenu = state.menu.slice()
                var searchKey = action.payload
                var updatedMenu = []
                console.log("currentMenu",state.menu)
                currentMenu.map((item) => {
                    if (item.name.toLowerCase().search(searchKey.toLowerCase()) !== -1) {
                        updatedMenu.push(item);
                    }
                    return true;
                  });
                state = {
                    ...state,
                    menu: updatedMenu
                }
            }
            else{
                console.log(currentMenu)
                state = {
                    ...state,
                    menu: state.preparedMenu
                }
            }
            return state
        default : 
            return state
    }
}

export default cafeReducer;
