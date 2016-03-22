/**
 * ISurchargeResource.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    "use strict";

    import IResource = angular.resource.IResource;
    import IResourceClass = angular.resource.IResourceClass;

    /**
     * Surcharge resource.
     *
     */
    export interface ISurchargeResource extends IResourceClass<IResource<Surcharge>> {
    }

}