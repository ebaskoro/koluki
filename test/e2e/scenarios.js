/**
 * scenarios.js
 *
 */

'use strict';

describe('ShopApp', function () {

    describe('when navigating to shop.html', function () {

        beforeEach(function () {
            browser.get('shop.html');
        });

        it('should route to #/', function () {
            var expectedUrl = "/";

            var actualUrl = browser.getLocationAbsUrl();

            expect(actualUrl).toBe(expectedUrl);
        });

        it('should render the correct view', function () {
            var expected = 'Categories';

            var actual = element.all(by.css('[ng-view] > div')).get(1).all(by.css('h2')).first().getText();

            expect(actual).toBe(expected);
        });

        it('should list categories', function () {
            var actual = element.all(by.repeater('category in vm.categories')).count();

            expect(actual).toBeGreaterThan(0);
        });

    });

    describe('when clicking a category', function () {

        beforeEach(function () {
            browser.get('shop.html');

            element(by.repeater('category in vm.categories').row(0)).$('a').click();
        });

        it('should route to #/category', function () {
            var expectedUrl = "/category";

            var actualUrl = browser.getLocationAbsUrl();

            expect(actualUrl).toMatch(expectedUrl);
        });

        it('should render the correct view', function () {
            var expectedText = /Drink/;

            var actualText = element(by.binding('category.title')).getText();

            expect(actualText).toMatch(expectedText);
        });

    });

    describe('when navigating to a category', function () {

        beforeEach(function () {
            browser.get('shop.html#/category/1');
        });

        it('should list products', function () {
            var actual = element.all(by.repeater('product in vm.category.products')).count();

            expect(actual).toBeGreaterThan(0);
        });

    });

    describe('when clicking buy', function () {

        beforeEach(function () {
            browser.get('shop.html#/category/1');
        });

        it('should show a toaster', function () {
            var actual = element(by.css('.toaster'));

            expect(actual).not.toBeNull();
        });

    });

    describe('when navigating to shopping cart', function () {

        beforeEach(function () {
            browser.get('shop.html#/cart');
        });

        it('should render the correct view', function () {
            var expectedText = /Shopping Cart/;

            var actualText = element(by.css('h2')).getText();

            expect(actualText).toMatch(expectedText);
        });

    });

    describe('when navigating to order', function () {

        beforeEach(function () {
            browser.get('shop.html#/order');
        });

        it('should render the correct view', function () {
            var expectedText = /Order/;

            var actualText = element(by.css('h2')).getText();

            expect(actualText).toMatch(expectedText);
        });

    });

});