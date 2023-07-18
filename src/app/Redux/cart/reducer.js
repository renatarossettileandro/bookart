const initialState = {
    products: [],
    totalprice: 0,
};

export const cartReducer = (state=initialState, action) => {
        switch (action.type){
            case 'add':{
                return {
                    ...state, 
                    products: [...state.products, action.payload],
                }
            }

            case 'delete':{
                return {
                    ...state,
                    products: state.products.filter(item => item.id !== action.payload),
                }
            }

        default: return state
   
    }
};