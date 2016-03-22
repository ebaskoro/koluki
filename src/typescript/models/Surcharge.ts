/**
 * Surcharge.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    "use strict";

    /**
     * Surcharge.
     *
     */
    export class Surcharge {

        private _id: number;
        private _name: string;
        private _price: number;

        /**
         * Creates a surcharge.
         *
         * @constructs
         * @param id {number} Surcharge ID.
         * @param name {string} Name of surcharge.
         * @param price {number} Surcharge price.
         */
        constructor(id: number, name: string, price: number) {
            this._id = id;
            this._name = name;
            this._price = price;
        }

        /**
         * Gets the ID.
         *
         * @returns {number} The surcharge ID.
         */
        public get id(): number {
            return this._id;
        }

        /**
         * Gets the name.
         *
         * @returns {string} The name of the surcharge.
         */
        public get name(): string {
            return this._name;
        }

        /**
         * Gets the price.
         *
         * @returns {number} The surcharge price.
         */
        public get price(): number {
            return this._price;
        }

    }

}