import {
    ADD_CATEGORY,
    ADD_PRODUCT,
    ADD_WISHLIST,
    REMOVE_WISHLIST,
    ADD_LATEST_PRODUCT,
    ADD_FILTER_PRODUCTS,
    SHOW_SEARCH_BAR,
    WISHLIST_CHANGED,
} from "../actions/types";

const initialState = {
    categories: [],
    products: [],
    wishlist: [],
    latest: [],
    filteredProducts: [],
    showSearchBar: false,
    wishlistchanged: 12,
};
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_CATEGORY:
            return {
                ...state,
                categories: action.payload,
            };
        case ADD_PRODUCT:
            return {
                ...state,
                products: action.payload,
            };

        case ADD_LATEST_PRODUCT:
            return {
                ...state,
                latest: [...state.latest, action.payload],
            };

        case ADD_WISHLIST:
            action.payload.Wishlist = true;
            return {
                ...state,
                wishlist: action.payload,
            };

        case REMOVE_WISHLIST:
            action.payload.Wishlist = false;
            return {
                ...state,
                wishlist: state.wishlist.filter(
                    (product) => product.pid !== action.payload.pid
                ),
            };

        case ADD_FILTER_PRODUCTS:
            if (action.payload) {
                return {
                    ...state,
                    filteredProducts: state.products.filter((product) =>
                        product.name.toLowerCase().includes(action.payload.toLowerCase())
                    ),
                };
            } else {
                return {
                    ...state,
                    filteredProducts: [],
                };
            }

        case SHOW_SEARCH_BAR:
            return {
                ...state,
                showSearchBar: action.payload,
            };

        case WISHLIST_CHANGED:
            return {
                ...state,
                wishlistchanged: action.payload,
            };

        default:
            return state;
    }
}
