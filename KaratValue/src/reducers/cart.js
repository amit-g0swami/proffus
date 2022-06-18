import {
  ADD_CART,
  REMOVE_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../actions/types";

const initialState = {
  addedItems: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        addedItems: action.payload,
      };

    case INCREASE_QUANTITY:
      action.payload.quantity += 1;
      action.payload.cartTotal =
        action.payload.cartTotal + action.payload.after_sale_price;
      return {
        ...state,
      };

    case DECREASE_QUANTITY:
      if (action.payload.quantity > 1) {
        action.payload.quantity -= 1;
        action.payload.cartTotal =
          action.payload.cartTotal - action.payload.after_sale_price;
        return {
          ...state,
        };
      } else {
        return {
          ...state,
        };
      }

    case REMOVE_CART:
      return {
        ...state,
        addedItems: state.addedItems.filter(
          (item) => item.pid !== action.payload.pid
        ),
      };

    default:
      return state;
  }
}
