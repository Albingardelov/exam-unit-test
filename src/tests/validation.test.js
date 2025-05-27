import { isCartItem, isProduct } from "../validation.js"
// Examples of a valid product and a valid cart item. You may use these when testing below.
const exampleProduct = {
	id: 1001,
	name: 'Badanka',
	price: 500
}

const exampleCartObject = {
	id: 2001,
	amount: 1,
	item: exampleProduct
}

// Group tests using "describe"
describe('Validation', () => {

	// Använd en "test" eller "it" (de är synonymer) för varje testfall
	/* Exempel på syntax:
	test('beskriv testfallet', () => {
		// här skriver du testkoden
		// avsluta alltid med "expect"
	})
	*/


	// ---------------------------------------------
	// Följande testfall ska du implementera. Det är tillåtet att använda Joi. Gör i så fall ett schema för varje sorts objekt du vill kunna validera. Du får även ändra texten och du t.ex. vill skriva på svenska i stället för engelska.
	// (Ta bort dessa kommentarer när du är klar)

	// 1. it returns true for a valid cart object
	// 2. it returns false for invalid cart objects

	// 3. it returns true for a valid product
	// 4. it returns false for invalid cart objects

	describe('isProduct', () => {
		test('returns true for a valid product', () => {
			expect(isProduct(exampleProduct)).toBe(true)
		})

		test('returns false for invalid products', () => {
			expect(isProduct({})).toBe(false)
			expect(isProduct(null)).toBe(false)
			expect(isProduct({ id: '1', name: 'Test', price: 100 })).toBe(false)
		})
	})

	describe('isCartItem', () => {
		test('returns true for a valid cart item', () => {
			expect(isCartItem(exampleCartObject)).toBe(true)
		})

		test('returns false for invalid cart items', () => {
			expect(isCartItem({})).toBe(false)
			expect(isCartItem(null)).toBe(false)
			expect(isCartItem({ id: 1, amount: 1 })).toBe(false)  // saknar item
			expect(isCartItem({ id: 1, item: exampleProduct })).toBe(false)  // saknar amount
			expect(isCartItem({ amount: 1, item: exampleProduct })).toBe(false)  // saknar id
		})
	})
})
