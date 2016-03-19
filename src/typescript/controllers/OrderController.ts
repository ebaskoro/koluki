/**
 * OrderController.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    "use strict";

    /**
     * Order controller.
     *
     */
    export class OrderController {

        private _cartRepository: ICartRepository;

        public static $inject = [
            "CartRepository"
        ];

        /**
         * Creates an instance of order controller.
         *
         * @constructor
         * @param cartRepository The cart repository.
         */
        constructor(cartRepository: ICartRepository) {
            this._cartRepository = cartRepository;

            // TODO: Add delivery surcharge
        }

        public get items(): CartItem[] {
            return this._cartRepository.items;
        }

        public get total(): number {
            return this._cartRepository.total;
        }

    }

}