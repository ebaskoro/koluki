/**
 * IOrderScope.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    "use strict";

    import IScope = angular.IScope;

    /**
     * Order scope.
     *
     */
    export interface IOrderScope extends IScope {

        /**
         * Gets the cart items.
         *
         * @returns The collection of cart items.
         */
        items: CartItem[];

        /**
         * Gets the total price for the whole cart items.
         *
         * @returns {number}
         */
        total: number;

    }

}