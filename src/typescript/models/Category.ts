/**
 * Category.ts
 *
 */

module IMCV.Koluki {
    'use strict';

    /**
     * Category.
     *
     */
    export class Category {

        /**
         * Creates a category.
         *
         * @constructor
         * @param id The unique ID.
         * @param title The title.
         */
        constructor(id: number, title: string) {
            this.id = id;
            this.title = title;
            this.products = [];
        }

        /**
         * Gets or sets the category ID.
         */
        public id: number;

        /**
         * Gets or sets the category's title.
         */
        public title: string;

        /**
         * Gets or sets the products in this category.
         */
        public products: any[];

    }

}