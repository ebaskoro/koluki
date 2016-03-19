/**
 * IPromotionResource.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    "use strict";

    import IResource = angular.resource.IResource;
    import IResourceClass = angular.resource.IResourceClass;

    /**
     * Promotion resource.
     *
     */
    export interface IPromotionResource extends IResourceClass<IResource<Promotion>> {
    }

}