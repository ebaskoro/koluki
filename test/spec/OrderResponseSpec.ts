/**
 * OrderResponseSpec.ts
 *
 */

/// <reference path="_references.ts" />
/// <reference path="../../src/typescript/models/OrderResponse.ts" />

module IMCV.Koluki.Tests {
    "use strict";

    describe("OrderResponse", () => {

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var expectedResultCode = 0;

                var target = new OrderResponse(expectedResultCode);

                var actualResultCode = target.resultCode;
                var actualReference = target.reference;
                var actualTotalPayable = target.totalPayable;

                expect(actualResultCode).toBe(expectedResultCode);
                expect(actualReference).toBeUndefined();
                expect(actualTotalPayable).toBeUndefined();
            });

        });

    });

}