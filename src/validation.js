// Remember to use RED, GREEN, REFACTOR
// 1. pick one test case in validation.test.js
// 2. write the code, verify that the test is RED
// 3. write code in this file so that the test case becomes GREEN
// 4. refactor as neccessary before you move on to the next
// 5. repeat

function isCartItem(maybeCartItem) {
    if (!maybeCartItem || typeof maybeCartItem !== 'object') {
        return false
    }

    const { id, amount, item } = maybeCartItem

    return (
        typeof id === 'number' &&
        typeof amount === 'number' &&
        isProduct(item)
    )
}

function isProduct(maybeProduct) {
    if (!maybeProduct || typeof maybeProduct !== 'object') {
        return false
    }

    const { id, name, price } = maybeProduct

    return (
        typeof id === 'number' &&
        typeof name === 'string' &&
        typeof price === 'number'
    )
}

export { isCartItem, isProduct }
