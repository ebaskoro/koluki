/**
 * ApplicationController.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    "use strict";

    import ILocationService = angular.ILocationService;
    import IScope = angular.IScope;
    import IWindowService = angular.IWindowService;

    /**
     * Application controller.
     *
     */
    export class ApplicationController {

        public static $inject = [
            "$scope",
            "$window",
            "$location"
        ];

        /**
         * Creates an application controller.
         *
         * @constructs
         * @param $scope Application scope.
         * @param {IWindowService} $window Window service.
         * @param {ILocationService} $location Location service.
         */
        constructor($scope: any, $window: IWindowService, $location: ILocationService) {
            var navigated = false;

            $scope.$root.$on('$routeChangeSuccess', (event, current, previous) => {
                if (!previous) {
                    navigated = true;
                }
            });

            $scope.back = () => {
                if (navigated) {
                    $window.history.back();
                }
                else {
                    $location.path("/");
                }
            }
        }

    }

}