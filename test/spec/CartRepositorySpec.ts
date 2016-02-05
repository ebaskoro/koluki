/**
 * CartRepositorySpec.ts
 *
 */

/// <reference path="_references.ts" />
/// <reference path="../../src/typescript/services/CartRepository.ts" />

module IMCV.Koluki.Tests {
    'use strict';

    describe("CartRepository", () => {

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var expectedItemsLength = 0;
                var expectedTotal = 0.00;

                var target = new CartRepository();

                var actualItems = target.items;
                var actualItemsLength = actualItems.length;
                var actualTotal = target.total;

                expect(actualItems).not.toBeNull();
                expect(actualItemsLength).toBe(expectedItemsLength);
                expect(actualTotal).toBe(expectedTotal);
            });

        });

        describe("when addItem is invoked", () => {

            var expectedProduct: Product;

            beforeEach(() => {
                expectedProduct = new Product(1, "Title", "Description", 1.20, "Unit");
            });

            it("should add a new product to item collections", () => {
                var expectedQuantity = 1;
                var expectedItemsLength = 1;

                var target = new CartRepository();
                target.addItem(expectedProduct, expectedQuantity);

                var actualItems = target.items;
                var actualItemsLength = actualItems.length;

                expect(actualItems).not.toBeNull();
                expect(actualItemsLength).toBe(expectedItemsLength);
            });

            it("should increment the quantity of an existing product", () => {
                var expectedQuantity = 2;

                var target = new CartRepository();
                target.addItem(expectedProduct, 1);
                target.addItem(expectedProduct, 1);

                var actualItems = target.items;
                var actualItem = actualItems[0];
                var actualQuantity = actualItem.quantity;

                expect(actualQuantity).toBe(expectedQuantity);
            });

        });

        describe("when removeItem is invoked", () => {

            it("should remove the existing product from item collections", () => {
                var expectedItemsLength = 0;
                var product = new Product(1, "Title", "Description", 1.20, "Unit");

                var target = new CartRepository();
                target.addItem(product, 1);
                target.removeItem(product);

                var actualItems = target.items;
                var actualItemLength = actualItems.length;

                expect(actualItemLength).toBe(expectedItemsLength);
            });

        });

    });

}