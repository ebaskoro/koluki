/**
 * PromotionController.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    'use strict';

    /**
     * Promotion controller.
     *
     */
    export class PromotionController {

        private _$scope: IPromotionScope;

        public static $inject = [
            "$scope"
        ];

        /**
         * Creates a promotion controller.
         *
         * @constructor
         * @param $scope The promotion scope.
         */
        constructor($scope: IPromotionScope) {
            this._$scope = $scope;

            this._$scope.interval = 5000;
            this._$scope.noWrapSlides = false;
            this._$scope.slides = [
                {
                    imageUrl: "http://placehold.it/600x400",
                    title: "Bakso",
                    description: "Bakso special"
                },
                {
                    imageUrl: "http://placehold.it/600x400",
                    title: "Kerupuk Singkong",
                    description: "Kerupuk singkong nikmat"
                }
            ];
        }

    }

}