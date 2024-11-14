import { createContext, useContext, useReducer } from 'react';

const PurchaseContext = createContext();

const initialState = {
  history: [],
  lastOrderId: 0
};

function purchaseReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_HISTORY':
      const newOrderId = state.lastOrderId + 1;
      const newOrder = {
        id: newOrderId,
        items: action.payload.items,
        total: action.payload.total,
        date: new Date().toISOString(),
      };
      
      return {
        history: [...state.history, newOrder],
        lastOrderId: newOrderId
      };

    default:
      return state;
  }
}

export function PurchaseProvider({ children }) {
  const [state, dispatch] = useReducer(purchaseReducer, initialState);

  const addToHistory = (items, total) => {
    dispatch({ 
      type: 'ADD_TO_HISTORY', 
      payload: { items, total }
    });
  };

  const getHistory = () => state.history;

  return (
    <PurchaseContext.Provider value={{ history: state.history, addToHistory, getHistory }}>
      {children}
    </PurchaseContext.Provider>
  );
}

export function usePurchase() {
  const context = useContext(PurchaseContext);
  if (!context) {
    throw new Error('usePurchase must be used within a PurchaseProvider');
  }
  return context;
}