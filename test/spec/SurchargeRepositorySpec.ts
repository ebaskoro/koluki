/**
 * SurchargeRepositorySpec.ts
 *
 */

/// <reference path="_references.ts" />
/// <reference path="../../src/typescript/services/SurchargeRepository.ts" />

module IMCV.Koluki.Test {
    "use strict";

    describe("SurchargeRepository", () => {

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var target = new SurchargeRepository(null);

                expect(target).not.toBeNull();
            });

        });

    });

}