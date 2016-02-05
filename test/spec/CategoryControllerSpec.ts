/**
 * CategoryControllerSpec.ts
 *
 */

/// <reference path="_references.ts" />
/// <reference path="../../src/typescript/controllers/CategoryController.ts" />

module IMCV.Koluki.Tests {
    "use strict";

    import IControllerService = angular.IControllerService;
    import IQService = angular.IQService;
    import IRootScopeService = angular.IRootScopeService;

    describe("CategoryController", () => {

        beforeEach(angular.mock.module("shopApp"));

        var $scopeMock: any;
        var $qMock: IQService;

        beforeEach(inject(($rootScope: IRootScopeService, $q: IQService) => {
            $scopeMock = $rootScope.$new();
            $qMock = $q;
        }));

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var expectedCategories = [
                    {
                        id: 1
                    }
                ];
                var categoryRepositoryMock: any = {
                    getAllCategories: () => {
                        var deferred = $qMock.defer();
                        deferred.resolve(expectedCategories);

                        return {
                            $promise: deferred.promise
                        }
                    }
                };

                var target = new CategoryController($scopeMock, categoryRepositoryMock);
                var actualCategories = null;
                $scopeMock.categories.$promise.then((categories) => {
                    actualCategories = categories;
                });
                $scopeMock.$apply();

                expect(actualCategories).toBe(expectedCategories);
            });

        });

    });

}