import { createSlice,nanoid} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    wishlist: [],
  },
  reducers: {
    addItem: (state, action) => {
      const itemToAdd = action.payload;
      // Check if the item already exists in the cart
      if (!state.items.some(item => item.id === itemToAdd.id)) {
        state.items.push(itemToAdd);
      }
    },
    wishItem: (state, action) => {
      const itemToAdd = action.payload;
      // Check if the item already exists in the wishlist
      if (!state.wishlist.some(item => item.id === itemToAdd.id)) {
        state.wishlist.push(itemToAdd);
      }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      },    
    removeItemWish: (state, action) => {
        state.wishlist = state.wishlist.filter(item => item.id !== action.payload);
      }      
  },
});

export const { addItem , removeItem ,wishItem , removeItemWish} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export default cartSlice.reducer;