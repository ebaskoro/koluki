/**
 * ApplicationController.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    'use strict';

    import IScope = angular.IScope;

    /**
     * Application controller.
     *
     */
    export class ApplicationController {

        private _$scope: IScope;

        public static $inject = [
            "$scope"
        ];

        /**
         * Creates an application controller.
         *
         * @constructor
         * @param $scope The scope.
         */
        constructor($scope: IScope) {
            this._$scope = $scope;
        }

    }

}