/**
 * ILoadingScope.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    "use strict";

    import IScope = angular.IScope;

    /**
     * Loading scope.
     *
     */
    export interface ILoadingScope extends IScope {

        /**
         * Gets or sets the loading indicator.
         *
         */
        isLoading: boolean;

    }

}