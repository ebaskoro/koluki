/**
 * ICartScope.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    "use strict";

    import IScope = angular.IScope;

    /**
     * Cart scope.
     *
     */
    export interface ICartScope extends IScope {

        /**
         * Gets or sets the shopping cart.
         *
         */
        cart: ICartRepository;

        /**
         * True when the cart is empty or false otherwise.
         *
         */
        isEmpty: boolean;

        /**
         * True when order cannot be done or false otherwise.
         *
         */
        cannotOrder: boolean;

        /**
         * Removes the item from cart.
         *
         * @param item The item to remove.
         */
        remove(item: CartItem);

    }

}