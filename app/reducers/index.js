/* eslint-disable no-case-declarations */
import axios from 'axios';

const GOT_CANDIES = 'GOT_CANDIES';
export const DECREMENT = 'DECREMENT';
export const INCREMENT = 'INCREMENT';
const UPDATE_ENTRY = 'UPDATE_ENTRY';

export const updateDb = (candy, type) => {
   return async function(dispatch, getState) {
      try {
         if (type === INCREMENT) {
            await axios.put(`/api/candies/${candy.id}`, {
               quantity: candy.quantity + 1,
            });
         } else if (type === DECREMENT) {
            await axios.put(`/api/candies/${candy.id}`, {
               quantity: candy.quantity - 1,
            });
         }
         const { data } = await axios.get('/api/candies');
         dispatch({ type: UPDATE_ENTRY, payload: data });
      } catch (error) {
         console.log(error);
      }
   };
};
export const increment = id => {
   return {
      type: INCREMENT,
      id,
   };
};
export const decrement = id => {
   return {
      type: DECREMENT,
      id,
   };
};

const initialState = {
   candies: [],
};
const getCandies = candies => {
   return {
      type: GOT_CANDIES,
      candies,
   };
};
export const getCandiesFromDb = () => {
   return async function(dispatch, getState) {
      const { data } = await axios.get('/api/candies');
      dispatch(getCandies(data));
   };
};

const rootReducer = (state = initialState, action) => {
   switch (action.type) {
      case UPDATE_ENTRY: {
         return {
            ...state,
            candies: action.payload,
         };
      }
      case GOT_CANDIES:
         return { ...state, candies: action.candies };

      default:
         return state;
   }
};

export default rootReducer;
