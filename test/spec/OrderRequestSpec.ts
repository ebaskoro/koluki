/**
 * OrderRequestSpec.ts
 *
 */

/// <reference path="_references.ts" />
/// <reference path="../../src/typescript/models/OrderRequest.ts" />

module IMCV.Koluki.Tests {
    "use strict";

    describe("OrderRequest", () => {

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var target = new OrderRequest();
                var actualFullName = target.fullName;
                var actualMobileNumber = target.mobileNumber;
                var actualEmailAddress = target.emailAddress;
                var actualAddress = target.address;
                var actualSuburb = target.suburb;
                var actualTotalPayable = target.totalPayable;
                var actualItems = target.items;
                var actualSurcharges = target.surcharges;

                expect(actualFullName).toBeUndefined();
                expect(actualMobileNumber).toBeUndefined();
                expect(actualEmailAddress).toBeUndefined();
                expect(actualAddress).toBeUndefined();
                expect(actualSuburb).toBeUndefined();
                expect(actualTotalPayable).toBeUndefined();
                expect(actualItems).toBeDefined();
                expect(actualItems.length).toBe(0);
                expect(actualSurcharges).toBeDefined();
                expect(actualSurcharges.length).toBe(0);
            });

        });

    });

}