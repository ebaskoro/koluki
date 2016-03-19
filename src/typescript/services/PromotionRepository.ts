/**
 * PromotionRepository.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    "use strict";

    import IResource = angular.resource.IResource;
    import IResourceArray = angular.resource.IResourceArray;

    /**
     * Promotion repository.
     *
     */
    export class PromotionRepository implements IPromotionRepository {

        private _promotionResource: IPromotionResource;

        public static $inject = [
            "PromotionResource"
        ];

        /**
         * Creates an instance of promotion repository.
         *
         * @constructs
         * @param {IPromotionResource} promotionResource Promotion resource.
         */
        constructor(promotionResource: IPromotionResource) {
            this._promotionResource = promotionResource;
        }

        public getAllPromotions(): IResourceArray<IResource<Promotion>> {
            return this._promotionResource.query();
        }

    }

}