/* eslint-disable no-case-declarations */
import axios from 'axios';

const GOT_CANDIES = 'GOT_CANDIES';
export const DECREMENT = 'DECREMENT';
export const INCREMENT = 'INCREMENT';
const UPDATE_ENTRY = 'UPDATE_ENTRY';
const CREATE_CANDY = 'CREATE_CANDY';
const REMOVE_CANDY = 'REMOVE_CANDY';

// Action creators
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

const getCandies = candies => {
   return {
      type: GOT_CANDIES,
      candies,
   };
};

// Thunks
export const removeCandy = candy => {
   return async function(dispatch) {
      await axios.delete(`/api/candies/${candy.id}`);
      dispatch({ type: REMOVE_CANDY, candy });
   };
};

export const createCandy = candy => {
   return async function(dispatch) {
      console.log(candy);
      const { data: createdCandy } = await axios.post('/api/candies', candy);
      console.log(createCandy);
      dispatch({ type: CREATE_CANDY, candy: createdCandy });
   };
};

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
export const getCandiesFromDb = () => {
   return async function(dispatch, getState) {
      const { data } = await axios.get('/api/candies');
      dispatch(getCandies(data));
   };
};

// Initial state
const initialState = {
   candies: [],
};

const rootReducer = (state = initialState, action) => {
   switch (action.type) {
      case REMOVE_CANDY:
         return {
            ...state,
            candies: state.candies.filter(
               candy => candy.id !== action.candy.id,
            ),
         };
      case CREATE_CANDY:
         return { ...state, candies: [...state.candies, action.candy] };
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
