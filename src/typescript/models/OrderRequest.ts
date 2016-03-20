/**
 * OrderRequest.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    "use strict";

    /**
     * Order request.
     *
     */
    export class OrderRequest {

        /**
         * Creates an instance of order request.
         *
         * @constructs
         */
        constructor() {
            this.items = [];
            this.surcharges = [];
        }

        /**
         * Gets or sets the full name.
         *
         */
        public fullName: string;


        /**
         * Gets or sets the mobile number.
         *
         */
        public mobileNumber: string;

        /**
         * Gets or sets the email address.
         *
         */
        public emailAddress: string;


        /**
         * Gets or sets the address.
         *
         */
        public address: string;


        /**
         * Gets or sets the suburb.
         *
         */
        public suburb: string;


        /**
         * Gets or sets the total payable.
         *
         */
        public totalPayable: number;


        /**
         * Gets or sets the collection of order items.
         *
         */
        public items: any;


        /**
         * Gets or sets the collection of surcharge items.
         */
        public surcharges: any;

    }

}