/**
 * PromotionControllerSpec.ts
 *
 */

/// <reference path="../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../src/typescript/controllers/PromotionController.ts" />

module IMCV.Koluki.Tests {
    'use strict';

    import IQService = angular.IQService;
    import IRootScopeService = angular.IRootScopeService;

    describe("PromotionController", () => {

        beforeEach(angular.mock.module("shopApp"));

        var $rootScopeMock: IRootScopeService;
        var $qMock: IQService;

        beforeEach(inject(($rootScope: IRootScopeService, $q: IQService) => {
            $rootScopeMock = $rootScope;
            $qMock = $q;
        }));

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var expectedInterval = 5000;
                var expectedNoWrapSlides = false;

                var $scopeMock: any;

                inject(($rootScope: IRootScopeService) => {
                    $scopeMock = $rootScope.$new();
                });

                var promotionRepositoryMock: any = {
                    getAllPromotions() {
                        var deferred = $qMock.defer();
                        deferred.resolve([]);

                        return {
                            $promise: deferred.promise
                        };
                    }
                };

                var target = new PromotionController(promotionRepositoryMock);
                $rootScopeMock.$digest();

                var actualInterval = target.interval;
                var actualNoWrapSlides = target.noWrapSlides;
                var actualSlides = target.slides;

                expect(actualInterval).toBeDefined();
                expect(actualInterval).toBe(expectedInterval);
                expect(actualNoWrapSlides).toBeDefined();
                expect(actualNoWrapSlides).toBe(expectedNoWrapSlides);
                expect(actualSlides).toBeDefined();
                expect(actualSlides.length).toBe(0);
            });

        });

    });

}