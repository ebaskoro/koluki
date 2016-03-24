/**
 * SurchargeResourceFactory.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    "use strict";

    import IResourceService = angular.resource.IResourceService;

    /**
     * Surcharge resource factory.
     *
     */
    export class SurchargeResourceFactory {

        private static _url = "https://script.google.com/macros/s/AKfycbyPKEk6GtSzj-iGXeNsAiZpipW1fKkR13XXXfZGcuTeoprKXwfE/exec";

        public static Create($resource: IResourceService): ISurchargeResource {
            return $resource(SurchargeResourceFactory._url, {
                prefix: "JSON_CALLBACK"
            }, {
                get: {
                    method: "JSONP",
                    params: {
                        suburb: "@suburb",
                        totalPayable: "@totalPayable"
                    }
                }
            });
        }

    }

}