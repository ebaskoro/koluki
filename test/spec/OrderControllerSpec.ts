/**
 * OrderControllerSpec.ts
 *
 */

/// <reference path="_references.ts" />
/// <reference path="../../src/typescript/controllers/OrderController.ts" />

module IMCV.Koluki.Tests {
    "use strict";

    describe("OrderController", () => {

        beforeEach(angular.mock.module("shopApp"));

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var target = new OrderController();

                expect(target).not.toBeNull();
            });

        });

    });
    
}
