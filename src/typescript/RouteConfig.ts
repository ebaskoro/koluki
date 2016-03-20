/**
 * RouteConfig.ts
 *
 */

/// <reference path="_references.ts" />

module IMCV.Koluki {
    "use strict";

    import IRouteProvider = angular.route.IRouteProvider;

    /**
     * Route configuration.
     *
     */
    export class RouteConfig {

        /**
         * Configures route.
         *
         * @param {IRouteProvider} $routeProvider The route provider.
         */
        public static configure($routeProvider: IRouteProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "views/shop/home.html",
                    controller: ShopHomeController,
                    controllerAs: "vm"
                })
                .when("/category/:category_id", {
                    templateUrl: "views/shop/category.html",
                    controller: ShopCategoryController,
                    controllerAs: "vm"
                })
                .when("/cart", {
                    templateUrl: "views/shop/cart.html",
                    controller: CartController
                })
                .when("/order", {
                    templateUrl: "views/shop/order.html",
                    controller: OrderController,
                    controllerAs: "vm"
                })
                .when("/ordered", {
                    templateUrl: "views/shop/ordered.html"
                })
                .otherwise({
                    redirectTo: "/"
                })
            ;
        }

    }

}