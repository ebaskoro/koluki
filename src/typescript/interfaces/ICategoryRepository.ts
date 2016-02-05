/**
 * ICategoryRepository.ts
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
    export interface ICategoryRepository {

        /**
         * Gets all categories.
         *
         * @returns {}
         */
        getAllCategories(): IResourceArray<IResource<Category>>;

        /**
         * Gets a category based on its ID.
         *
         * @param id The category ID.
         * @returns {}
         */
        getCategoryById(id: number): IResource<Category>;

    }

}