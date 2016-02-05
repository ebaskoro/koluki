/**
 * CategorySpec.ts
 *
 */

/// <reference path="_references.ts" />
/// <reference path="../../src/typescript/models/Category.ts" />

module IMCV.Koluki.Tests {
    'use strict';

    describe("Category", () => {

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var expectedId = 1;
                var expectedTitle = "Title";
                var expectedProductLength = 0;

                var target = new Category(expectedId, expectedTitle);

                var actualId = target.id;
                var actualTitle = target.title;
                var actualProductLength = target.products.length;

                expect(actualId).toBe(expectedId);
                expect(actualTitle).toBe(expectedTitle);
                expect(actualProductLength).toBe(expectedProductLength);
            });

        });

    });

}