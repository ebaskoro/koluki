/**
 * OrderControllerSpec.ts
 *
 */

/// <reference path="_references.ts" />
/// <reference path="../../src/typescript/controllers/OrderController.ts" />
/// <reference path="../../src/typescript/interfaces/ICartRepository.ts" />

module IMCV.Koluki.Tests {
    "use strict";

    import IRootScopeService = angular.IRootScopeService;

    describe("OrderController", () => {

        beforeEach(angular.mock.module("shopApp"));

        var $scopeMock: any;
        var cartRepositoryMock: ICartRepository;

        beforeEach(inject(($rootScope: IRootScopeService) => {
            $scopeMock = $rootScope.$new();

            cartRepositoryMock = {
                items: [],

                total: 0,

                addItem() {},

                removeItem() {}
            };
        }));

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var expectedItemCount = 0;
                var expectedTotal = 0;

                var target = new OrderController(cartRepositoryMock);

                var actualItems = target.items;
                var actualItemCount = actualItems.length;
                var actualTotal = target.total;

                expect(actualItems).toBeDefined();
                expect(actualItemCount).toBe(expectedItemCount);
                expect(actualTotal).toBeDefined();
                expect(actualTotal).toBe(expectedTotal);
            });

        });

    });
    
}
