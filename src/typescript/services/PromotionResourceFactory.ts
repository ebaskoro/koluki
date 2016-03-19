/**
 * PromotionResourceFactory.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    "use strict";

    import IResourceService = angular.resource.IResourceService;

    /**
     * Promotion resource factory.
     *
     */
    export class PromotionResourceFactory {

        private static _url: string = "https://script.google.com/macros/s/AKfycbz1gPx0NWD9WF64-msOnKLaYyLGa6YxwVO-YydjGsVMICbz0e0/exec";

        /**
         * Creates a promotion resource.
         *
         * @param $resource Resource service.
         */
        public static Create($resource: IResourceService): ICategoryResource {
            return $resource(PromotionResourceFactory._url, {
                prefix: "JSON_CALLBACK"
            }, {
                query: {
                    method: "JSONP",
                    isArray: true
                }
            });
        }

    }

}