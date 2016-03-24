/**
 * SurchargeRepository.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    "use strict";

    import IResource = angular.resource.IResource;

    /**
     * Surcharge repository.
     *
     */
    export class SurchargeRepository implements ISurchargeRepository {

        private _resource: ISurchargeResource;

        public static $inject = [
            "SurchargeResource"
        ];

        /**
         * Creates a surcharge repository.
         *
         * @constructs
         * @param {ISurchargeResource} resource Surcharge resource to use.
         */
        constructor(resource: ISurchargeResource) {
            this._resource = resource;
        }

        public getDeliverySurcharge(suburb: string, totalPayable: number): IResource<Surcharge> {
            return this._resource.get({
                suburb: suburb,
                totalPayable: totalPayable
            });
        }

    }

}