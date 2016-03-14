/**
 * ICategoryScope.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    "use strict";

    import IResource = angular.resource.IResource;
    import IScope = angular.IScope;

    /**
     * Category scope.
     *
     */
    export interface ICategoryScope extends IScope {

        /**
         * Gets or sets the categories.
         *
         */
        categories: IResource<Category>[];

    }

}