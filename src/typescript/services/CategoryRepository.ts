/**
 * CategoryRepository.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    "use strict";

    import IResource = angular.resource.IResource;
    import IResourceArray = angular.resource.IResourceArray;

    /**
     * Category repository.
     *
     */
    export class CategoryRepository implements ICategoryRepository {

        private _categoryResource: ICategoryResource;

        public static $inject = [
            "CategoryResource"
        ];

        /**
         * Creates an instance of category repository.
         *
         * @constructor
         * @param categoryResource The category resource.
         */
        constructor(categoryResource: ICategoryResource) {
            this._categoryResource = categoryResource;
        }

        public getAllCategories() {
            return this._categoryResource.query();
        }

        public getCategoryById(id: number) {
            return this._categoryResource.get({
                id: id
            });
        }

    }

}