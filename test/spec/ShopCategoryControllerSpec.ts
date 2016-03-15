/**
 * ShopCategoryControllerSpec.ts
 *
 */

/// <reference path="_references.ts" />
/// <reference path="../../src/typescript/interfaces/ICartRepository.ts" />
/// <reference path="../../src/typescript/controllers/ShopCategoryController.ts" />

module IMCV.Koluki.Tests {
    "use strict";

    import IQService = angular.IQService;
    import IRootScopeService = angular.IRootScopeService;
    import IRouteParamsService = angular.route.IRouteParamsService;

    describe("ShopCategoryController", () => {

        beforeEach(angular.mock.module("shopApp"));

        var $routeParams: IRouteParamsService;
        var $scope: any;
        var $q: IQService;

        beforeEach(inject((_$routeParams_: IRouteParamsService, $rootScope: IRootScopeService, _$q_: IQService) => {
            $routeParams = _$routeParams_;
            $scope = $rootScope.$new();
            $q = _$q_;
        }));

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var expectedCategoryId = 123;
                $routeParams["category_id"] = expectedCategoryId;
                var categoryRepositoryMock: any = {
                    getCategoryById(id) {
                        var deferred = $q.defer();
                        deferred.resolve({
                            id: expectedCategoryId
                        });

                        return {
                            $promise: deferred.promise
                        };
                    }
                };

                var target = new ShopCategoryController($routeParams, null, categoryRepositoryMock, null);
                var isLoading = target.isLoading;

                expect(isLoading).toBeTruthy();
            });

        });

        describe("when buy is invoked", () => {

            it("should add the product to cart", () => {
                var expectedCategoryId = 1;
                $routeParams["category_id"] = expectedCategoryId;
                var cartRepositoryMock: any = {
                    addItem(product: Product, quantity: number) {
                    }
                };
                spyOn(cartRepositoryMock, "addItem");
                var categoryRepositoryMock: any = {
                    getCategoryById(id) {
                        var deferred = $q.defer();
                        deferred.resolve({
                            id: expectedCategoryId
                        });

                        return {
                            $promise: deferred.promise
                        };
                    }
                };
                var toasterMock: any = {
                    info() {
                    }
                };
                spyOn(toasterMock, "info");
                var product = new Product(1, "Title", "Description", 1.20, "Unit", "");

                var target = new ShopCategoryController($routeParams, cartRepositoryMock, categoryRepositoryMock,
                    toasterMock);
                target.buy(product);

                expect(cartRepositoryMock.addItem).toHaveBeenCalled();
                expect(toasterMock.info).toHaveBeenCalled();
            });

        });

    });

}