/**
 * CartControllerSpec.ts
 *
 */

/// <reference path="_references.ts" />
/// <reference path="../../src/typescript/controllers/CartController.ts" />
/// <reference path="../../src/typescript/interfaces/ICartRepository.ts" />

module IMCV.Koluki.Tests {
    "use strict";

    import IRootScopeService = angular.IRootScopeService;

    describe("CartController", () => {

        beforeEach(angular.mock.module("shopApp"));

        var $scopeMock: any;
        var cartRepositoryMock: ICartRepository;

        beforeEach(inject(($rootScope: IRootScopeService) => {
            $scopeMock = $rootScope.$new();

            cartRepositoryMock = {
                items: [],

                total: 0,

                isEmpty: true,

                addItem(product: Product, quantity: number) {
                },

                removeItem(product: Product) {
                },

                clear() {
                }
            };
        }));

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var expectedEmpty = true;

                var target = new CartController($scopeMock, cartRepositoryMock);

                var actualCart = $scopeMock.cart;
                var actualEmpty = $scopeMock.isEmpty;

                expect(actualCart).toBeDefined();
                expect(actualEmpty).toBeDefined();
                expect(actualEmpty).toBe(expectedEmpty);
            });

        });

        describe("when a product is added to the cart", () => {

            it("should not be empty", () => {
                var expectedEmpty = false;
                var product = new Product(1, "Title", "Description", 1.00, "Unit", "");

                var target = new CartController($scopeMock, cartRepositoryMock);
                cartRepositoryMock.items.push(new CartItem(product, 1));
                $scopeMock.$digest();

                var actualEmpty = $scopeMock.isEmpty;

                expect(actualEmpty).toBe(expectedEmpty);
            });

        });

        describe("when a product is removed from the cart", () => {

            it("should be empty", () => {
                var expectedEmpty = true;
                var product = new Product(1, "Title", "Description", 1.00, "Unit", "");

                var target = new CartController($scopeMock, cartRepositoryMock);
                cartRepositoryMock.items.push(new CartItem(product, 1));
                $scopeMock.$digest();
                cartRepositoryMock.items.splice(0);
                $scopeMock.$digest();

                var actualEmpty = $scopeMock.isEmpty;

                expect(actualEmpty).toBe(expectedEmpty);
            });

        });

    });

}