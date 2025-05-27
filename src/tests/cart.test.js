// importera här
import { addToCart, getCartItemCount, clearCart, getTotalCartValue, removeFromCart, editCart, getCart, getItem } from "../cart"


describe('Cart', () => {
	beforeEach(() => {
		// Denna kod körs före varje test. Det är för att rensa kundvagnen, så inte saker ligger kvar från föregående test.
		clearCart()
	})


	// -------------------------------------------------- //
	// Skriv dina testfall här

	// Du får ett test att börja med
	test('addToCart lägger till en ny produkt i kundvagnen', () => {
		const itemCountBefore = getCartItemCount()
		const input = { id: 1002, name: 'Vattenpistol', price: 40 }

		// addToCart returnerar inget - den påverkar kundvagnen
		// vi behöver använda getCartItemCount för att se om det har lagts till en ny produkt i kundvagnen
		addToCart(input)
		const itemCountAfter = getCartItemCount()

		expect(itemCountAfter).toBe(itemCountBefore + 1)
	})

	test('getTotalCartValue returnerar summan av alla produkter i kundvagnen', () => {
		const produkt1 = { id: 1, name: 'Boll', price: 40 }
		const produkt2 = { id: 2, name: 'Hatt', price: 100 }

		addToCart(produkt1) // amount = 1
		addToCart(produkt2) // amount = 1
		addToCart(produkt2) // amount = 1 (andra hatt)

		// Förväntat värde: 40*1 + 100*1 + 100*1 = 240
		expect(getTotalCartValue()).toBe(40 + 100 + 100)
	})

	test('removeFromCart tar bort en produkt från kundvagnen med id', () => {
		const produkt1 = { id: 1, name: 'Boll', price: 40 }
		const produkt2 = { id: 2, name: 'Hatt', price: 100 }

		addToCart(produkt1)
		addToCart(produkt2)

		// Vi vet att produkt1 får id 2002 och produkt2 får id 2003
		removeFromCart(2002)

		// Nu ska bara produkt2 finnas kvar
		expect(getCartItemCount()).toBe(1)
	})

	test('editCart uppdaterar en produkt i kundvagnen', () => {
		const produkt = { id: 1, name: 'Boll', price: 40 }
		addToCart(produkt)

		// Vi vet att produkten får id 2002
		editCart(2002, { amount: 2 })

		// Kontrollera att amount har uppdaterats
		const cartItem = getCart().find(item => item.id === 2002)
		expect(cartItem.amount).toBe(2)
	})

	test('getItem returnerar rätt produkt från kundvagnen baserat på index', () => {
		const produkt1 = { id: 1, name: 'Boll', price: 40 }
		const produkt2 = { id: 2, name: 'Hatt', price: 100 }

		addToCart(produkt1)
		addToCart(produkt2)

		const item0 = getItem(0)
		const item1 = getItem(1)

		expect(item0.item.name).toBe('Boll')
		expect(item1.item.name).toBe('Hatt')
	})

	// -------------------------------------------------- //
})
