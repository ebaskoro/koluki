/**
 * SurchargeSpec.ts
 *
 */

/// <reference path="_references.ts" />
/// <reference path="../../src/typescript/models/Surcharge.ts" />

module IMCV.Koluki.Tests {
    "use strict";

    describe("Surcharge", () => {

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var target = new Surcharge(null, null, null);

                expect(target).not.toBeNull();
            });

        });

    });

}