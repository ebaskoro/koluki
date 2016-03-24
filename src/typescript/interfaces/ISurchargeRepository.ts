/**
 * ISurchargeRepository.ts
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
    export interface ISurchargeRepository {

        /**
         * Gets delivery surcharge.
         *
         * @param {string} suburb Suburb to deliver to.
         * @param {number} totalPayable Total order before surcharges.
         * @returns Applicable delivery surcharge.
         */
        getDeliverySurcharge(suburb: string, totalPayable: number): IResource<Surcharge>;

    }

}