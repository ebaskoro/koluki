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

        private _resultCode: number;
        private _reference: string;
        private _totalPayable: number;

        /**
         * Creates an instance of order response.
         *
         * @constructs
         * @param {number} resultCode Result code.
         * @param {string} reference Order reference (optional).
         * @param {number} totalPayable Total payable (optional).
         */
        constructor(resultCode: number, reference?: string, totalPayable?: number) {
            this._resultCode = resultCode;
            this._reference = reference;
            this._totalPayable = totalPayable;
        }

        /**
         * Gets the result code.
         *
         * @returns {number} The result code.
         */
        public get resultCode(): number {
            return this._resultCode;
        }

        /**
         * Gets the order reference.
         *
         * @returns {string} The order reference.
         */
        public get reference(): string {
            return this._reference;
        }

        /**
         * Gets the total payable.
         *
         * @returns {number} The total payable.
         */
        public get totalPayable(): number {
            return this._totalPayable;
        }

    }

}