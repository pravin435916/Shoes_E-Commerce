import { createSlice,nanoid} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    wishlist: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    wishItem: (state, action) => {
      state.wishlist.push(action.payload);
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