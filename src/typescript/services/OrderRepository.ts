/**
 * OrderRepository.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    "use strict";

    /**
     * Order repository.
     *
     */
    export class OrderRepository implements IOrderRepository {

        /**
         * Creates an instance of order repository.
         *
         * @constructs
         */
        constructor() {
            this.reset();
        }

        public reference: string;

        public fullName: string;

        public totalPayable: number;

        public reset() {
            this.reference = "";
            this.fullName = "";
            this.totalPayable = 0;
        }

    }

}