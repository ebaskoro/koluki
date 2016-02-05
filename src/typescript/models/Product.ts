/**
 * Product.ts
 *
 */

module IMCV.Koluki {
    'use strict';

    /**
     * Product.
     *
     */
    export class Product {

        private _id: number;
        private _title: string;
        private _description: string;
        private _price: number;
        private _unit: string;

        /**
         * Creates a product.
         *
         * @constructor
         * @param id The product ID.
         * @param title The product's title.
         * @param description The product's description.
         * @param price The product's unit price.
         * @param unit The product's unit.
         */
        constructor(id: number, title: string, description: string, price: number, unit: string) {
            this._id = id;
            this._title = title;
            this._description = description;
            this._price = price;
            this._unit = unit;
        }

        /**
         * Gets the ID.
         *
         * @returns {number}
         */
        public get id(): number {
            return this._id;
        }

        /**
         * Gets the title.
         *
         * @returns {string}
         */
        public get title(): string {
            return this._title;
        }

        /**
         * Sets the title.
         *
         * @param newTitle The new title.
         */
        public set title(newTitle: string) {
            this._title = newTitle;
        }

        /**
         * Gets the description.
         *
         * @returns {string}
         */
        public get description(): string {
            return this._description;
        }

        /**
         * Sets the description.
         *
         * @param newDescription
         */
        public set description(newDescription: string) {
            this._description = newDescription;
        }

        /**
         * Gets the unit price.
         *
         * @returns {number}
         */
        public get price(): number {
            return this._price;
        }

        /**
         * Gets the unit.
         *
         * @returns {string}
         */
        public get unit(): string {
            return this._unit;
        }

    }

}