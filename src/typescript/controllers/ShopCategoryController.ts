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

        private _$routeParams: IRouteParamService;
        private _$scope: IShopCategoryScope;
        private _cartRepository: ICartRepository;
        private _categoryRepository: ICategoryRepository;
        private _toaster: IToasterService;

        public static $inject = [
            "$routeParams",
            "$scope",
            "CartRepository",
            "CategoryRepository",
            "toaster"
        ];

        /**
         * Creates a Shop/Category controller.
         *
         * @construct
         * @param $routeParams The route parameters.
         * @param $scope The scope.
         * @param cartRepository The cart repository.
         * @param categoryRepository The category repository.
         * @param toaster The toaster service.
         */
        constructor($routeParams: IRouteParamService, $scope: IShopCategoryScope, cartRepository: ICartRepository,
            categoryRepository: ICategoryRepository, toaster: IToasterService) {
            this._$routeParams = $routeParams;
            this._$scope = $scope;
            this._cartRepository = cartRepository;
            this._categoryRepository = categoryRepository;
            this._toaster = toaster;

            var categoryId = this._$routeParams["category_id"];
            this._$scope.category = this._categoryRepository.getCategoryById(categoryId);

            this._$scope.buy = (product) => {
                this._cartRepository.addItem(product, 1);
                this._toaster.info({
                    body: product.title + " has been added"
                });
            };
        }

    }

}