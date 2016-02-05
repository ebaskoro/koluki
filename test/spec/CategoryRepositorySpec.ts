/**
 * CategoryRepositorySpec.ts
 *
 */

/// <reference path="_references.ts" />
/// <reference path="../../src/typescript/services/CategoryRepository.ts" />

module IMCV.Koluki.Tests {
    "use strict";

    import IQService = angular.IQService;
    import IRootScopeService = angular.IRootScopeService;

    describe("CategoryRepository", () => {

        var $rootScopeMock: IRootScopeService;
        var $qMock: IQService;

        beforeEach(inject(($q: IQService, $rootScope: IRootScopeService) => {
            $qMock = $q;
            $rootScopeMock = $rootScope;
        }));

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var target = new CategoryRepository(null);

                expect(target).not.toBeNull();
            });

        });

        describe("when getAllCategories is invoked", () => {

            it("should return a collection of categories", () => {
                var expectedCategories = [
                    {
                        id: 1
                    }
                ];
                var categoryResourceMock: any = {
                    query() {
                        return expectedCategories;
                    }
                };

                var target = new CategoryRepository(categoryResourceMock);
                var actualCategories = target.getAllCategories();

                expect(actualCategories).toBe(expectedCategories);
            });

        });

        describe("when getCategoryById is invoked", () => {

            it("should return the correct category", () => {
                var expectedId = 1;
                var expectedTitle = "Title";
                var categoryResourceMock: any = {
                    get() {
                        var deferred = $qMock.defer();
                        deferred.resolve({
                            id: expectedId,
                            title: expectedTitle
                        });

                        return {
                            $promise: deferred.promise
                        };
                    }
                };

                var target = new CategoryRepository(categoryResourceMock);
                var actualCategory: Category = null;
                var actualId = -1;
                var actualTitle = null;
                target.getCategoryById(expectedId).$promise.then((category) => {
                    actualCategory = category;
                    actualId = actualCategory.id;
                    actualTitle = actualCategory.title;
                }, () => {
                    fail("Unexpected");
                });
                $rootScopeMock.$apply();

                expect(actualCategory).not.toBeNull();
                expect(actualId).toBe(expectedId);
                expect(actualTitle).toBe(expectedTitle);
            });

        });

    });

}