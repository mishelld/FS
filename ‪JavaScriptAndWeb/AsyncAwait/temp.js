async function processOrder(orderId) {
  const response = await fetch(`/api/orders/${orderId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch order");
  }
  const order = await response.json();
  response = await fetch(`/api/inventory/${order.productId}`);
  const inventory = await response.json();
  if (inventory.stock > 0) {
    return { success: true, message: "Order processed" };
  } else {
    return { success: false, message: "Out of stock" };
  }
}
