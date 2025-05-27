/*
Din uppgift:
- skriv testfall för alla funktionerna nedan i cart.test.js (RED)
- skriv kod här för att implementera funktionerna (GREEN)

Tips:
- börja med att identifiera VAD som ska testas.
- om du testar t.ex. removeFromCart får du använda addToCart i början av testet. Den kommer nämligen ha sina egna tester

*/
// function getCartItemCount()
// function getItem(index)
// function getTotalCartValue()
// function addToCart(newItem)
// function removeFromCart(itemId)
// function editCart(itemId, newValues)
// function clearCart()
// -------------------------------------------------- //

import { isCartItem, isProduct } from "./validation.js"

let cart = []
let idCounter = 2002
// -------------------------------------------------- //


// Din kod börjar här
// Du får en funktion att börja med

function getCartItemCount() {
	return cart.length
}

function getTotalCartValue() {
	return cart.reduce((sum, cartItem) => sum + (cartItem.item.price * (cartItem.amount || 1)), 0)
}

function addToCart(newItem) {
	if( !isProduct(newItem) ) {
		return false
	}

	const cartItem = { id: idCounter, amount: 1, item: newItem }
	idCounter++
	cart.push(cartItem)
}

function clearCart() {
	cart = []
	idCounter = 2002
}

function removeFromCart(itemId) {
	cart = cart.filter(cartItem => cartItem.id !== itemId)
}

function editCart(itemId, newValues) {
	const cartItem = cart.find(item => item.id === itemId)
	if (cartItem) {
		Object.assign(cartItem, newValues)
	}
}

function getCart() {
	return cart
}

function getItem(index) {
	return cart[index]
}

export { getCartItemCount, addToCart, clearCart, getTotalCartValue, removeFromCart, editCart, getCart, getItem }
