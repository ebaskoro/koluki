/**
 * OrderControllerSpec.ts
 *
 */

/// <reference path="_references.ts" />
/// <reference path="../../src/typescript/controllers/OrderController.ts" />
/// <reference path="../../src/typescript/interfaces/ICartRepository.ts" />

module IMCV.Koluki.Tests {
    "use strict";

    import ILocationService = angular.ILocationService;
    import IQService = angular.IQService;
    import IRootScopeService = angular.IRootScopeService;

    describe("OrderController", () => {

        beforeEach(angular.mock.module("shopApp"));

        var $scopeMock: any;
        var $locationMock: ILocationService;
        var cartRepositoryMock: ICartRepository;
        var $qMock: IQService;

        beforeEach(inject(($rootScope: IRootScopeService, $location: ILocationService, $q: IQService) => {
            $scopeMock = $rootScope.$new();
            $locationMock = $location;
            $qMock = $q;

            cartRepositoryMock = {
                items: [],

                total: 0,

                isEmpty: true,

                addItem() {},

                removeItem() {},

                clear() {}
            };
        }));

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var surchargeRepositoryMock: any = {
                    getDeliverySurchargeBySuburb(suburb: string) {
                        var deferred = $qMock.defer();
                        deferred.resolve({
                            resultCode: -1
                        });

                        return {
                            $promise: deferred.promise
                        };
                    }
                };
                var orderRepositoryMock = {
                    reference: "",

                    fullName: "",

                    totalPayable: 0,

                    reset() {}
                };
                var expectedItemCount = 0;
                var expectedTotal = 0;

                var target = new OrderController(cartRepositoryMock, surchargeRepositoryMock, null, orderRepositoryMock,
                    null, $locationMock, null);

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
