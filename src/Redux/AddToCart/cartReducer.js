import { ADD_TO_CART, CLEAR_CART, DEL_FROM_CART } from "./actions";

const init = {
   data: [],
};

export const cartReducer = (store = init, action) => {
   switch (action.type) {
      case ADD_TO_CART:
         return { ...store, data: [...store.data, action.payload] };
      case DEL_FROM_CART:
         return {
            ...store,
            data: [
               ...store.data.filter((e) => {
                  return e.id !== action.payload.id;
               }),
            ],
         };
         case CLEAR_CART:{
            return {
               ...store,
               data:[]
            }
         }
      default:
         return store;
   }
};
