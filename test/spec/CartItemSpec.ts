/**
 * CartItemSpec.ts
 *
 */

/// <reference path="_references.ts" />
/// <reference path="../../src/typescript/models/CartItem.ts" />

module IMCV.Koluki.Tests {
    'use strict';

    describe("CartItem", () => {

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var expectedProduct = new Product(1, "Title", "Description", 1.20, "Unit");
                var expectedQuantity = 1;

                var target = new CartItem(expectedProduct, expectedQuantity);

                var actualProduct = target.product;
                var actualQuantity = target.quantity;

                expect(actualProduct).toBe(expectedProduct);
                expect(actualQuantity).toBe(expectedQuantity);
            });

        });

    });

}