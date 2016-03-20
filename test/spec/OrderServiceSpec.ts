/**
 * OrderServiceSpec.ts
 *
 */

/// <reference path="_references.ts" />
/// <reference path="../../src/typescript/services/OrderService.ts" />
/// <reference path="../../src/typescript/models/OrderRequest.ts" />
/// <reference path="../../src/typescript/models/OrderResponse.ts" />

module IMCV.Koluki.Test {
    "use strict";

    import IHttpBackendService = angular.IHttpBackendService;
    import IHttpService = angular.IHttpService;
    import IQService = angular.IQService;

    describe("OrderService", () => {

        var $qMock: IQService;
        var $httpMock: IHttpService;
        var $httpBackendMock: IHttpBackendService;

        beforeEach(inject(($q: IQService, $http: IHttpService, $httpBackend: IHttpBackendService) => {
            $qMock = $q;
            $httpMock = $http;
            $httpBackendMock = $httpBackend;
        }));

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var target = new OrderService(null, null);

                expect(target).not.toBeNull();
            });

        });

        describe("when order is invoked", () => {

            it("should submit the order", () => {
                var expectedReference = "AAA";
                $httpBackendMock.expectJSONP("").respond(200, {
                    reference: expectedReference
                });

                var target = new OrderService($qMock, $httpMock);
                var actualReference = null;
                target.order(null)
                    .then((actual) => {
                        actualReference = actual.reference;
                    })
                ;
                $httpBackendMock.flush();

                expect(actualReference).toBe(expectedReference);
            });

        });

    });

}