/**
 * CartController.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    "use strict";

    /**
     * Cart controller.
     *
     */
    export class CartController {

        private _$scope: ICartScope;
        private _cartRepository: ICartRepository;

        public static $inject = [
            "$scope",
            "CartRepository"
        ];

        /**
         * Creates an instance of cart controller.
         *
         * @constructor
         * @param $scope The cart scope.
         * @param cartRepository The cart repository.
         */
        constructor($scope: ICartScope, cartRepository: ICartRepository) {
            this._$scope = $scope;
            this._cartRepository = cartRepository;

            this._$scope.cart = this._cartRepository;
            this._$scope.isEmpty = (this._cartRepository.items.length === 0);
            this._$scope.remove = (item) => {
                this._cartRepository.removeItem(item.product);
            };

            this._$scope.$watch(() => this._cartRepository.items.length,
                (newValue, oldValue) => this._$scope.isEmpty = (newValue === 0));
        }

    }

}