/**
 * OrderServiceSpec.ts
 *
 */

/// <reference path="_references.ts" />
/// <reference path="../../src/typescript/services/OrderService.ts" />
/// <reference path="../../src/typescript/models/OrderRequest.ts" />
/// <reference path="../../src/typescript/models/OrderResponse.ts" />

module IMCV.Koluki.Tests {
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
                var expectedResultCode = 0;
                var expectedReference = "AAA";
                var expectedTotalPayable = 12.00;
                $httpBackendMock.expectJSONP("").respond(200, {
                    resultCode: expectedResultCode,
                    reference: expectedReference,
                    totalPayable: expectedTotalPayable
                });

                var target = new OrderService($qMock, $httpMock);
                var actualResultCode = 0;
                var actualReference = null;
                var actualTotalPayable = 0;
                target.order(null)
                    .then((actual) => {
                        actualResultCode = actual.resultCode;
                        actualReference = actual.reference;
                        actualTotalPayable = actual.totalPayable;
                    })
                ;
                $httpBackendMock.flush();

                expect(actualResultCode).toBe(expectedResultCode);
                expect(actualReference).toBe(expectedReference);
                expect(actualTotalPayable).toBe(expectedTotalPayable);
            });

        });

    });

}