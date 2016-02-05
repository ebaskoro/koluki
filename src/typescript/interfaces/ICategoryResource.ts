/**
 * ICategoryResource.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    "use strict";

    import IResource = angular.resource.IResource;
    import IResourceClass = angular.resource.IResourceClass;

    /**
     * Category resource.
     *
     */
    export interface ICategoryResource extends IResourceClass<IResource<Category>> {
    }

}