import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    let itemExistIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    let itemExist = state.items[itemExistIndex];

    let updatedItems;

    if (itemExist) {
      const updateItem = {
        ...itemExist,
        amount: itemExist.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[itemExistIndex] = updateItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  // remove item logic
  if (action.type === "REMOVE") {
    let exitingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    let existingItem = state.items[exitingItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    console.log(updatedTotalAmount);

    let updateItems;
    if (existingItem.amount === 1) {
      updateItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updateItem = { ...existingItem, amount: existingItem.amount - 1 };
      updateItems = [...state.items];
      updateItems[exitingItemIndex] = updateItem;
    }
    return {
      items: updateItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
