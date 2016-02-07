/**
 * OrderController.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    "use strict";

    /**
     * Order controller.
     *
     */
    export class OrderController {

        private _$scope: IOrderScope;

        public static $inject = [
            "$scope",
            "CartRepository"
        ];

        /**
         * Creates an instance of order controller.
         *
         * @constructor
         * @param $scope The order scope.
         * @param cartRepository The cart repository.
         */
        constructor($scope: IOrderScope, cartRepository: ICartRepository) {
            this._$scope = $scope;

            this._$scope.items = cartRepository.items;
            this._$scope.total = cartRepository.total;
        }

    }

}