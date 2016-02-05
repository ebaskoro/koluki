/**
 * CategoryResourceFactory.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    "use strict";

    import IResourceService = angular.resource.IResourceService;

    /**
     * Category resource factory.
     *
     */
    export class CategoryResourceFactory {

        /**
         * Creates a category resource.
         *
         * @param $resource The resource service.
         */
        public static Create($resource: IResourceService): ICategoryResource {
            return $resource("", null, {
                query: {
                    method: "GET",
                    url: "api/categories.json",
                    isArray: true
                },

                get: {
                    method: "GET",
                    url: "api/category/:id.json"
                }
            });
        }

    }

}