/**
 * ShopOrderedControllerSpec.ts
 *
 */

/// <reference path="_references.ts" />
/// <reference path="../../src/typescript/controllers/ShopOrderedController.ts" />

module IMCV.Koluki.Tests {
    "use strict";

    import ILocationService = angular.ILocationService;

    describe("ShopOrderedController", () => {

        var $locationMock: ILocationService;

        beforeEach(inject(($location: ILocationService) => {
            $locationMock = $location;
        }));

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var orderRepositoryMock: IOrderRepository = {
                    reference: null,

                    fullName: null,

                    totalPayable: 0,

                    reset() {}
                };
                var target = new ShopOrderedController(orderRepositoryMock, $locationMock);

                expect(target).not.toBeNull();
            });

        });

    });

}