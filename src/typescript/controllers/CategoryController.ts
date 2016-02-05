/**
 * CategoryController.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    "use strict";

    /**
     * Category controller.
     *
     */
    export class CategoryController {

        private _$scope: ICategoryScope;
        private _categoryRepository: ICategoryRepository;

        public static $inject = [
            "$scope",
            "CategoryRepository"
        ];

        /**
         * Creates a category controller.
         *
         * @constructor
         * @param $scope The scope.
         * @param categoryRepository The category repository.
         */
        constructor($scope: ICategoryScope, categoryRepository: ICategoryRepository) {
            this._$scope = $scope;
            this._categoryRepository = categoryRepository;

            this._$scope.categories = categoryRepository.getAllCategories();
        }

    }

}