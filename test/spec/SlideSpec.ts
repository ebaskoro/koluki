/**
 * SlideSpec.ts
 *
 */

/// <reference path="../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../src/typescript/models/Slide.ts" />

module IMCV.Koluki.Tests {
    'use strict';

    describe("Slide", () => {

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var expectedImageUrl = "URL";
                var expectedTitle = "Title";
                var expectedDescription = "Description";

                var target = new Slide(expectedImageUrl, expectedTitle, expectedDescription);

                var actualImageUrl = target.imageUrl;
                var actualTitle = target.title;
                var actualDescription = target.description;

                expect(actualImageUrl).toBe(expectedImageUrl);
                expect(actualTitle).toBe(expectedTitle);
                expect(actualDescription).toBe(expectedDescription);
            });

        });

    });

}