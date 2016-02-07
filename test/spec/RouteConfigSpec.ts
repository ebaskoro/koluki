/**
 * RouteConfigSpec.ts
 *
 */

/// <reference path="_references.ts" />

module IMCV.Koluki.Tests {
    "use strict";

    import IHttpBackendService = angular.IHttpBackendService;
    import ILocationService = angular.ILocationService;
    import IRootScopeService = angular.IRootScopeService;
    import IRouteService = angular.route.IRouteService;

    describe("RouteConfig", () => {

        beforeEach(angular.mock.module("shopApp"));

        var $locationMock: ILocationService;
        var $routeMock: IRouteService;
        var $rootScopeMock: IRootScopeService;

        beforeEach(inject(($location: ILocationService, $route: IRouteService, $rootScope: IRootScopeService) => {
            $locationMock = $location;
            $routeMock = $route;
            $rootScopeMock = $rootScope;
        }));

        describe("when navigating to /", () => {

            beforeEach(inject(($httpBackend: IHttpBackendService) => {
                $httpBackend.expectGET("").respond(200);

                $locationMock.path("/");
                $rootScopeMock.$digest();
            }));

            it("should render views/shop/home.html", () => {
                var expectedTemplateUrl = "views/shop/home.html";

                var actualTemplateUrl = $routeMock.current.templateUrl;

                expect(actualTemplateUrl).toBe(expectedTemplateUrl);
            });

            it("should instantiate ShopHomeController", () => {
                var expectedController = ShopHomeController;

                var actualController = $routeMock.current.controller;

                expect(actualController).toBe(expectedController);
            });

        });

        describe("when navigating to anywhere else", () => {

            beforeEach(inject(($httpBackend: IHttpBackendService) => {
                $httpBackend.expectGET("").respond(200);

                $locationMock.path("/somewhere");
                $rootScopeMock.$digest();
            }));

            it("should render views/shop/home.html", () => {
                var expectedTemplateUrl = "views/shop/home.html";

                var actualTemplateUrl = $routeMock.current.templateUrl;

                expect(actualTemplateUrl).toBe(expectedTemplateUrl);
            });

            it("should instantiate ShopHomeController", () => {
                var expectedController = ShopHomeController;

                var actualController = $routeMock.current.controller;

                expect(actualController).toBe(expectedController);
            });

        });

        describe("when navigating to /category/:category_id", () => {

            beforeEach(inject(($httpBackend: IHttpBackendService) => {
                $httpBackend.expectGET("").respond(200);

                $locationMock.path("/category/1");
                $rootScopeMock.$digest();
            }));

            it("should render views/shop/category.html", () => {
                var expectedTemplateUrl = "views/shop/category.html";

                var actualTemplateUrl = $routeMock.current.templateUrl;

                expect(actualTemplateUrl).toBe(expectedTemplateUrl);
            });

            it("should instantiate ShopCategoryController", () => {
                var expectedController = ShopCategoryController;

                var actualController = $routeMock.current.controller;

                expect(actualController).toBe(expectedController);
            });

        });

        describe("when navigating to /cart", () => {

            beforeEach(inject(($httpBackend: IHttpBackendService) => {
                $httpBackend.expectGET("").respond(200);

                $locationMock.path("/cart");
                $rootScopeMock.$digest();
            }));

            it("should render views/shop/cart.html", () => {
                var expectedTemplateUrl = "views/shop/cart.html";

                var actualTemplateUrl = $routeMock.current.templateUrl;

                expect(actualTemplateUrl).toBe(expectedTemplateUrl);
            });

            it("should instantiate CartController", () => {
                var expectedController = CartController;

                var actualController = $routeMock.current.controller;

                expect(actualController).toBe(expectedController);
            });

        });

        describe("when navigating to /order", () => {

            beforeEach(inject(($httpBackend: IHttpBackendService) => {
                $httpBackend.expectGET("").respond(200);

                $locationMock.path("/order");
                $rootScopeMock.$digest();
            }));

            it("should render views/shop/order.html", () => {
                var expectedTemplateUrl = "views/shop/order.html";

                var actualTemplateUrl = $routeMock.current.templateUrl;

                expect(actualTemplateUrl).toBe(expectedTemplateUrl);
            });

        });

    });

}