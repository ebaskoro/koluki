/**
 * ShopHomeController.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    "use strict";

    /**
     * Shop/Home controller.
     *
     */
    export class ShopHomeController {

        private _loading: boolean;
        private _categories: any;

        public static $inject = [
            "CategoryRepository"
        ];

        /**
         * Creates a Shop/Home controller.
         *
         * @constructor
         * @param {ICategoryRepository} repository Category repository to use.
         */
        constructor(repository: ICategoryRepository) {
            this._loading = true;

            repository.getAllCategories().$promise
                .then((categories) => {
                    this._categories = categories;
                })
                .catch(() => {
                    this._categories = [];
                })
                .finally(() => {
                    this._loading = false;
                })
            ;
        }

        /**
         * Checks whether the categories are loading or not.
         *
         * @returns {boolean} True when they are loading or false when finished loading.
         */
        public get isLoading(): boolean {
            return this._loading;
        }

        /**
         * Gets the categories.
         *
         * @returns {any} Collection of categories.
         */
        public get categories(): any {
            return this._categories;
        }

    }

}