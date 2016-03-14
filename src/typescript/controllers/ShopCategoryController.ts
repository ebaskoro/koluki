/**
 * ShopCategoryController.ts
 *
 */

module IMCV.Koluki {
    "use strict";

    import ILocationService = angular.ILocationService;
    import IRouteParamService = angular.route.IRouteParamsService;
    import IToasterService = ngtoaster.IToasterService;

    /**
     * Shop/Category controller.
     *
     */
    export class ShopCategoryController {

        private _cartRepository: ICartRepository;
        private _toaster: IToasterService;
        private _loading: boolean;
        private _category: Category;

        public static $inject = [
            "$routeParams",
            "CartRepository",
            "CategoryRepository",
            "toaster"
        ];

        /**
         * Creates a Shop/Category controller.
         *
         * @construct
         * @param $routeParams The route parameters.
         * @param cartRepository The cart repository.
         * @param categoryRepository The category repository.
         * @param toaster The toaster service.
         */
        constructor($routeParams: IRouteParamService, cartRepository: ICartRepository,
            categoryRepository: ICategoryRepository, toaster: IToasterService) {
            this._cartRepository = cartRepository;
            this._toaster = toaster;
            this._loading = true;

            var categoryId = $routeParams["category_id"];
            categoryRepository.getCategoryById(categoryId).$promise
                .then((category) => {
                    this._category = category;
                })
                .catch(() => {
                    this._category = null;
                })
                .finally(() => {
                    this._loading = false;
                })
            ;
        }

        /**
         * Checks whether the category is being loaded or not.
         *
         * @returns {boolean} True when it is being loaded or false when it has been loaded.
         */
        public get isLoading(): boolean {
            return this._loading;
        }

        /**
         * Gets the category.
         *
         * @returns {Category} The category.
         */
        public get category(): Category {
            return this._category;
        }

        /**
         * Buys a product.
         *
         * @param {Product} product The product to be put into the shopping cart.
         */
        public buy(product: Product) {
            this._cartRepository.addItem(product, 1);
            this._toaster.info({
                body: product.title + " has been added"
            });
        }

    }

}