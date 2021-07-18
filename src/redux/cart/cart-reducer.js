const TOGGLE_CART = "TOGGLE_CART";
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const CHANGE_QUANTITY = "CHANGE_QUANTITY";

const INITIAL_STATE = {
  hiddenCart: false,
  cartItems: [],
  totalPrice: 0,
};

const addItems = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find((item) => {
    return item.id === itemToAdd.id;
  });

  if (existingItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === itemToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem;
    });
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const removeItems = (cartItems, itemToRemove) => {
  const removedItem = cartItems.find((item) => {
    return item.id === itemToRemove.id;
  });

  if (removedItem) {
    return cartItems.filter((cartItem) => {
      return !(cartItem.id === removedItem.id);
    });
  }
};

const changeQuantityItem = (cartItems, itemToChange, direction) => {
  const changeQuantityItem = cartItems.find((item) => {
    return item.id === itemToChange.id;
  });

  const directionFunc = (cartItem) => {
    if (direction === "incr") {
      return {
        ...cartItem,
        quantity: cartItem.quantity + 1,
      };
    } else if (cartItem.quantity > 1 && direction === "decr") {
      return {
        ...cartItem,
        quantity: cartItem.quantity - 1,
      };
    } else {
      return {
        ...cartItem,
        quantity: cartItem.quantity,
      };
    }
  };

  return cartItems.map((cartItem) => {
    return cartItem.id === changeQuantityItem.id
      ? directionFunc(cartItem)
      : cartItem;
  });
};

const calculatePrice = (cartItems) => {
  return cartItems
    .map((item) => {
      return item.price * item.quantity;
    })
    .reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    }, 0);
};

const cartReducer = (state = INITIAL_STATE, action) => {
  let newState;

  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        hiddenCart: !state.hiddenCart,
      };
    case ADD_ITEM:
      newState = {
        ...state,
        cartItems: addItems(state.cartItems, action.payload),
      };
      return {
        ...newState,
        totalPrice: calculatePrice(newState.cartItems),
      };
    case REMOVE_ITEM:
      newState = {
        ...state,
        cartItems: removeItems(state.cartItems, action.payload),
      };
      return {
        ...newState,
        totalPrice: calculatePrice(newState.cartItems),
      };
    case CHANGE_QUANTITY:
      newState = {
        ...state,
        cartItems: changeQuantityItem(
          state.cartItems,
          action.payload,
          action.direction
        ),
      };
      return {
        ...newState,
        totalPrice: calculatePrice(newState.cartItems),
      };
    default: {
      return state;
    }
  }
};

export default cartReducer;

//Actions

export const toggleCart = () => {
  return {
    type: TOGGLE_CART,
  };
};

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
};

export const changeQuantity = (item, direction) => {
  return {
    type: CHANGE_QUANTITY,
    payload: item,
    direction: direction,
  };
};
