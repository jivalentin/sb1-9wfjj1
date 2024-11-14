export function calculateCartTotal(items) {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
}

export function generateReceipt(items, total) {
  return {
    items: items.map(item => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      subtotal: item.price * item.quantity
    })),
    total,
    date: new Date().toISOString()
  };
}

export function validateCart(items) {
  return items.every(item => 
    item.quantity > 0 && 
    item.quantity <= 5 && 
    item.price > 0
  );
}