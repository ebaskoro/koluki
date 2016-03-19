/**
 * PromotionSpec.ts
 *
 */

/// <reference path="_references.ts" />
/// <reference path="../../src/typescript/models/Promotion.ts" />

module IMCV.Koluki.Tests {
    "use strict";

    describe("Promotion", () => {

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var target = new Promotion();

                expect(target).not.toBeNull();
            });

        });

    });

}