/**
 * IPromotionScope.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    'use strict';

    import IScope = angular.IScope;

    /**
     * Promotion scope.
     *
     */
    export interface IPromotionScope extends IScope {

        /**
         * Gets or sets the interval in milliseconds.
         */
        interval: number;

        /**
         * Gets or sets the no wrap slides indicator.
         */
        noWrapSlides: boolean;

        /**
         * Gets or sets the list of slides.
         */
        slides: Slide[];

    }

}