/**
 * OrderResponse.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    "use strict";

    /**
     * Order response.
     *
     */
    export class OrderResponse {

        private _reference: string;

        /**
         * Creates an instance of order response.
         *
         * @constructs
         * @param {string} reference The order reference.
         */
        constructor(reference: string) {
            this._reference = reference;
        }

        /**
         * Gets the order reference.
         *
         * @returns {string} The order reference.
         */
        public get reference() {
            return this._reference;
        }

    }

}