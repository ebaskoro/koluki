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

        private static _url: string = "https://script.google.com/macros/s/AKfycbxjqIKwE-8b6rfpv6YzFZSeZLGkWo7O7dgYfYv5l75DE_XZxr_f/exec";


        /**
         * Creates a category resource.
         *
         * @param $resource The resource service.
         */
        public static Create($resource: IResourceService): ICategoryResource {
            return $resource(CategoryResourceFactory._url, {
                prefix: "JSON_CALLBACK"
            }, {
                query: {
                    method: "JSONP",
                    isArray: true
                },

                get: {
                    method: "JSONP",
                    params: {
                        id: "@id"
                    }
                }
            });
        }

    }

}