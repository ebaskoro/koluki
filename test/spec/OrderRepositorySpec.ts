/**
 * OrderRepositorySpec.ts
 *
 */

/// <reference path="_references.ts" />
/// <reference path="../../src/typescript/services/OrderRepository.ts" />

module IMCV.Koluki.Tests {
    "use strict";

    describe("OrderRepository", () => {

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var expectedReference = "";
                var expectedFullName = "";
                var expectedTotalPayable = 0;

                var target = new OrderRepository();

                var actualReference = target.reference;
                var actualFullName = target.fullName;
                var actualTotalPayable = target.totalPayable;

                expect(actualReference).toBe(expectedReference);
                expect(actualFullName).toBe(expectedFullName);
                expect(actualTotalPayable).toBe(expectedTotalPayable);
            });

        });

    });

}