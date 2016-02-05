/**
 * ShopHomeControllerSpec.ts
 *
 */

/// <reference path="_references.ts" />
/// <reference path="../../src/typescript/controllers/ShopHomeController.ts" />

module IMCV.Koluki.Tests {
    'use strict';

    describe("ShopHomeController", () => {

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var target = new ShopHomeController();

                expect(target).not.toBeNull();
            });

        });

    });

}