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

        public static $inject = [
            "$routeProvider"
        ];

        /**
         * Configures route.
         *
         * @param $routeProvider The route provider.
         */
        public static configure($routeProvider: IRouteProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "views/shop/home.html",
                    controller: ShopHomeController
                })
                .when("/category/:category_id", {
                    templateUrl: "views/shop/category.html",
                    controller: ShopCategoryController
                })
                .when("/cart", {
                    templateUrl: "views/shop/cart.html",
                    controller: CartController
                })
                .when("/order", {
                    templateUrl: "views/shop/order.html",
                    controller: OrderController
                })
                .otherwise({
                    redirectTo: "/"
                })
            ;
        }

    }

}