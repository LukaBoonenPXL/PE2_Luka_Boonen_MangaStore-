import { defineStore } from 'pinia';

export const useShopStore = defineStore('shop', {
    state: () => ({
        products: [],
        cart: [],
        loggedInUser: null,
        users: [
            { username: "Luka", password: "fake", address: "Belgie, Diest, stationstraat 9" },
            { username: "Nakoshi", password: "fake", address: "Hasselt, dusartplein 83b" },
        ],
    }),
    getters: {
        totalPrice(state) {
            const total = state.cart.reduce((totalPrice, item) => totalPrice + (item.quantity * item.price_with_tax), 0);
            return parseFloat(total.toFixed(2));
        },
        totaltax(state) {
            const totalVAT = state.cart.reduce((totaltax, item) => totaltax + (item.quantity * (item.price_with_tax - item.price)), 0);
            return parseFloat(totalVAT.toFixed(2));
        },
        popularProducts(state) {
            return [...state.products].sort((a, b) => b.stock - a.stock).slice(0, 3);
        },
        isLoggedIn(state) {
            return !!state.loggedInUser;
        },
    },
    actions: {
        async fetchProducts() {
            try {
                const response = await fetch('src/assets/data.json');
                const data = await response.json();
                this.setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },



        setProducts(products) {
            this.products = products;
        },
        addToCart(product) {
            const quantityString = prompt(`How many ${product.name} would you like to add to your cart?`, '1');
            const quantity = parseInt(quantityString);

            if (isNaN(quantity) || quantity <= 0) {
                alert('Please enter a valid quantity.');
                return;
            }

            const isProductInCart = this.cart.some(item => item.id === product.id);

            if (isProductInCart) {
                const existingProduct = this.cart.find(item => item.id === product.id);

                if (existingProduct.quantity + quantity > product.stock) {
                    alert(`Sorry, there are only ${product.stock} units available in stock.`);
                    return;
                }

                existingProduct.quantity += quantity;
            } else {
                if (quantity > product.stock) {
                    alert(`Sorry, there are only ${product.stock} units available in stock.`);
                    return;
                }

                this.cart.push({ ...product, quantity });
            }

            alert('Product added to cart.');
        },
        removeItemFromCart(productId) {
            const index = this.cart.findIndex(item => item.id === productId);
            if (index !== -1) {
                this.cart.splice(index, 1);
            }
        },
        incrementItemQuantity(productId) {
            const product = this.cart.find(item => item.id === productId);

            if (product) {
                if (product.quantity + 1 > product.stock) {
                    alert(`Sorry, there are only ${product.stock} units available in stock.`);
                    return;
                }
                product.quantity += 1;
            }
        },

        decrementItemQuantity(productId) {
            const product = this.cart.find(item => item.id === productId);

            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
        },
        setLoggedInUser(user) {
            this.loggedInUser = user;
        },
        checkout() {
            if (this.isLoggedIn) {
                console.log('Checkout successful!');
            } else {
                alert('Please log in to proceed with checkout.');
            }
        },
    },
});

export const useCheckoutStore = defineStore('checkout', {
    state: () => ({
        shippingAddress: '',
        useDifferentBilling: false,
    }),
    actions: {
        updateShippingAddress(address) {
            this.shippingAddress = address;
        },
    }
});
