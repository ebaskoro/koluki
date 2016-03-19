/**
 * PromotionRepositorySpec.ts
 *
 */

/// <reference path="_references.ts" />
/// <reference path="../../src/typescript/services/PromotionRepository.ts" />

module IMCV.Koluki.Tests {
    "use strict";

    import IQService = angular.IQService;
    import IRootScopeService = angular.IRootScopeService;

    describe("PromotionRepository", () => {

        var $qMock: IQService;
        var $rootScopeMock: IRootScopeService;

        beforeEach(inject(($q: IQService, $rootScope: IRootScopeService) => {
            $qMock = $q;
            $rootScopeMock = $rootScope;
        }));

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var target = new PromotionRepository(null);

                expect(target).not.toBeNull();
            });

        });

        describe("when getAllPromotions is invoked", () => {

            it("should return a collection of promotions", () => {
                var expectedPromotions = [
                    {
                        id: 1
                    }
                ];
                var promotionResourceMock: any = {
                    query() {
                        return expectedPromotions;
                    }
                };

                var target = new PromotionRepository(promotionResourceMock);
                var actualPromotions = target.getAllPromotions();

                expect(actualPromotions).toBe(expectedPromotions);
            });

        });

    });

}