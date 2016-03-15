/**
 * ProductSpec.ts
 *
 */

/// <reference path="_references.ts" />
/// <reference path="../../src/typescript/models/Product.ts" />

module IMCV.Koluki.Tests {
    "use strict";

    describe("Product", () => {

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var expectedId = 1;
                var expectedTitle = "Title";
                var expectedDescription = "Description";
                var expectedPrice = 1.20;
                var expectedUnit = "piece";
                var expectedImageUrl = "http://something";

                var target = new Product(expectedId, expectedTitle, expectedDescription, expectedPrice, expectedUnit, expectedImageUrl);

                var actualId = target.id;
                var actualTitle = target.title;
                var actualDescription = target.description;
                var actualPrice = target.price;
                var actualUnit = target.unit;
                var actualImageUrl = target.imageUrl;

                expect(actualId).toBe(expectedId);
                expect(actualTitle).toBe(expectedTitle);
                expect(actualDescription).toBe(expectedDescription);
                expect(actualPrice).toBe(expectedPrice);
                expect(actualUnit).toBe(expectedUnit);
                expect(actualImageUrl).toBe(expectedImageUrl);
            });

        });

    });

}