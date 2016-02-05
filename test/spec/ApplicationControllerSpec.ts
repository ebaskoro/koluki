/**
 * ApplicationControllerSpec.ts
 *
 */

/// <reference path="_references.ts" />
/// <reference path="../../src/typescript/controllers/ApplicationController.ts" />

module IMCV.Koluki.Tests {
    'use strict';

    describe("ApplicationController", () => {

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var $scope = null;

                var target = new ApplicationController($scope);

                expect(target).not.toBeNull();
            });

        });

    });

}