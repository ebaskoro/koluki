/**
 * CartItem.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    'use strict';

    /**
     * Cart item.
     *
     */
    export class CartItem {

        private _product: Product;
        private _quantity: number;

        /**
         * Creates an instance of cart item.
         *
         * @constructor
         * @param product The product.
         * @param quantity The quantity of the products.
         */
        constructor(product: Product, quantity: number) {
            this._product = product;
            this._quantity = quantity;
        }

        /**
         * Gets the product.
         *
         * @returns {Product} The product.
         */
        public get product(): Product {
            return this._product;
        }

        /**
         * Gets the quantity.
         *
         * @returns {number} The quantity.
         */
        public get quantity(): number {
            return this._quantity;
        }

        /**
         * Sets the quantity.
         *
         * @param newQuantity The new quantity.
         */
        public set quantity(newQuantity: number) {
            this._quantity = newQuantity;
        }

    }

}