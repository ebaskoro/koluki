/**
 * IShopCategoryController.ts
 *
 */

module IMCV.Koluki {
    "use strict";

    import IResource = angular.resource.IResource;
    import IScope = angular.IScope;

    /**
     * Shop/Category scope.
     *
     */
    export interface IShopCategoryScope extends IScope {

        /**
         * Gets or sets the category.
         *
         */
        category: IResource<Category>;

        /**
         * Gets or sets the product in the category.
         *
         */
        products: Product[];

        /**
         * Buys a product.
         *
         * @param product The product to buy.
         */
        buy(product: Product);

    }

}