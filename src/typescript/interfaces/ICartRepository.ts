/**
 * ICartRepository.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    'use strict';

    /**
     * Cart repository.
     *
     */
    export interface ICartRepository {

        /**
         * Gets all items in the cart.
         *
         * @return The collection of items.
         */
        items: CartItem[];

        /**
         * Gets the total price for the whole items.
         *
         * @returns {number}
         */
        total: number;

        /**
         * Adds a product to the cart.
         *
         * @param product The product to add.
         * @param quantity The quantity.
         */
        addItem(product: Product, quantity: number);

        /**
         * Removes a product from the cart.
         *
         * @param product The product to remove.
         */
        removeItem(product: Product);

    }

}