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
                var expectedReference = "ABC123";

                var target = new OrderResponse(expectedReference);
                var actualReference = target.reference;

                expect(actualReference).toBe(expectedReference);
            });

        });

    });

}