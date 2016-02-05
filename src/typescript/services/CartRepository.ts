/**
 * Cart.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    'use strict';

    /**
     * Cart repository.
     *
     */
    export class CartRepository implements ICartRepository {

        private _items: CartItem[];

        /**
         * Creates an instance of cart repository.
         *
         * @constructor
         */
        constructor() {
            this._items = [];
        }

        public get items(): CartItem[] {
            return this._items;
        }

        public get total(): number {
            var total = 0;

            for (let item of this._items) {
                total += (item.product.price * item.quantity);
            }

            return total;
        }

        public addItem(product: Product, quantity: number) {
            for (let item of this._items) {
                if (item.product.id === product.id) {
                    item.quantity += quantity;
                    return;
                }
            }

            var newItem = new CartItem(product, quantity);
            this._items.push(newItem);
        }

        public removeItem(product: Product) {
            for (var i = 0; i < this._items.length; i ++) {
                var item = this._items[i];

                if (item.product.id === product.id) {
                    this._items.splice(i, 1);
                    return;
                }
            }
        }

    }

}