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
                var expectedTotal = 0;

                var target = new OrderController($scopeMock, cartRepositoryMock);

                var actualItems = $scopeMock.items;
                var actualTotal = $scopeMock.total;

                expect(target).not.toBeNull();
                expect(actualItems).toBeDefined();
                expect(actualTotal).toBeDefined();
                expect(actualTotal).toBe(expectedTotal);
            });

        });

    });
    
}
