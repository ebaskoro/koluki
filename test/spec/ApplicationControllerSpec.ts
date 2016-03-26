/**
 * ApplicationControllerSpec.ts
 *
 */

/// <reference path="_references.ts" />
/// <reference path="../../src/typescript/controllers/ApplicationController.ts" />

module IMCV.Koluki.Tests {
    "use strict";

    import ILocationService = angular.ILocationService;
    import IRootScopeService = angular.IRootScopeService;
    import IScope = angular.IScope;
    import IWindowService = angular.IWindowService;

    describe("ApplicationController", () => {

        beforeEach(angular.mock.module("shopApp"));

        var $scopeMock: IScope;
        var $windowMock: IWindowService;
        var $locationMock: ILocationService;

        beforeEach(inject(($rootScope: IRootScopeService, $window: IWindowService, $location: ILocationService) => {
            $scopeMock = $rootScope.$new();
            $windowMock = $window;
            $locationMock = $location;
        }));

        describe("when constructed", () => {

            it("should initialise correctly", () => {
                var target = new ApplicationController($scopeMock, $windowMock, $locationMock);

                expect(target).not.toBeNull();
            });

        });

    });

}