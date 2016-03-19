/**
 * PromotionController.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    "use strict";

    /**
     * Promotion controller.
     *
     */
    export class PromotionController {

        private _promotionRepository: IPromotionRepository;
        private _loading: boolean;
        private _promotions: any;

        public static $inject = [
            "PromotionRepository"
        ];

        /**
         * Creates a promotion controller.
         *
         * @constructor
         * @param {IPromotionRepository} promotionRepository Promotion repository.
         */
        constructor(promotionRepository: IPromotionRepository) {
            this._promotionRepository = promotionRepository;
            this._loading = true;

            promotionRepository.getAllPromotions().$promise
                .then((promotions) => {
                    this._promotions = promotions;
                })
                .finally(() => {
                    this._loading = false;
                })
            ;
        }

        public get isLoading() {
            return this._loading;
        }

        public get interval() {
            return 5000;
        }

        public get noWrapSlides() {
            return false;
        }

        public get slides() {
            return this._promotions;
        }

    }

}