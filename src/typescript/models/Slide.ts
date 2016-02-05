/**
 * Slide.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    'use strict';

    /**
     * Carousel slide.
     *
     */
    export class Slide {

        /**
         * Creates a slide.
         *
         * @constructor
         * @param imageUrl The slide's image URL.
         * @param title The slide's image title.
         * @param description The slide's description.
         */
        constructor(imageUrl: string, title: string, description: string) {
            this.imageUrl = imageUrl;
            this.title = title;
            this.description = description;
        }

        /**
         * Gets or sets the slide's image URL.
         */
        public imageUrl: string;

        /**
         * Gets or sets the slide's image title.
         */
        public title: string;

        /**
         * Gets or sets the slide's description.
         */
        public description: string;

    }

}