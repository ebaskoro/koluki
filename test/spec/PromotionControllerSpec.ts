/**
 * PromotionControllerSpec.ts
 *
 */

/// <reference path="../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../src/typescript/controllers/PromotionController.ts" />

module IMCV.Koluki.Tests {
    'use strict';

    import IRootScopeService = angular.IRootScopeService;

    describe("PromotionController", () => {

        beforeEach(angular.mock.module("shopApp"));

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var expectedInterval = 5000;
                var expectedNoWrapSlides = false;

                var $scopeMock: any;

                inject(($rootScope: IRootScopeService) => {
                    $scopeMock = $rootScope.$new();
                });

                var target = new PromotionController($scopeMock);

                var actualInterval = $scopeMock.interval;
                var actualNoWrapSlides = $scopeMock.noWrapSlides;
                var actualSlides = $scopeMock.slides;

                expect(actualInterval).toBeDefined();
                expect(actualInterval).toBe(expectedInterval);
                expect(actualNoWrapSlides).toBeDefined();
                expect(actualNoWrapSlides).toBe(expectedNoWrapSlides);
                expect(actualSlides).toBeDefined();
                expect(actualSlides.length).toBe(2);
            });

        });

    });

}