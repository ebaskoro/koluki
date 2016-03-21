/**
 * IOrderRepository.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    "use strict";

    /**
     * Order repository.
     *
     */
    export interface IOrderRepository {

        /**
         * Gets or sets the order reference.
         *
         */
        reference: string;

        /**
         * Gets or sets the full name of the contact person.
         *
         */
        fullName: string;

        /**
         * Gets or sets the total amount payable for the order.
         *
         */
        totalPayable: number;

        /**
         * Resets the order.
         *
         */
        reset();

    }

}