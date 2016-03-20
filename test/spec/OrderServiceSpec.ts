/**
 * OrderServiceSpec.ts
 *
 */

/// <reference path="_references.ts" />
/// <reference path="../../src/typescript/services/OrderService.ts" />

module IMCV.Koluki.Test {
    "use strict";

    describe("OrderService", () => {

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var target = new OrderService();

                expect(target).not.toBeNull();
            });

        });

    });

}