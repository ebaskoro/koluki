/**
 * ShopHomeControllerSpec.ts
 *
 */

/// <reference path="_references.ts" />
/// <reference path="../../src/typescript/controllers/ShopHomeController.ts" />

module IMCV.Koluki.Tests {
    "use strict";

    import IQService = angular.IQService;

    describe("ShopHomeController", () => {

        beforeEach(angular.mock.module("shopApp"));

        var $qMock: IQService;

        beforeEach(inject(($q: IQService) => {
            $qMock = $q;
        }));

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var categories = [
                    {
                        id: 1
                    }
                ];
                var categoryRepositoryMock: any = {
                    getAllCategories() {
                        var deferred = $qMock.defer();
                        deferred.resolve(categories);

                        return {
                            $promise: deferred.promise
                        };
                    }
                };

                var target = new ShopHomeController(categoryRepositoryMock);
                var isLoading = target.isLoading;
                var actualCategories = target.categories;

                expect(isLoading).toBeTruthy();
                expect(actualCategories).toBeUndefined();
            });

        });

    });

}