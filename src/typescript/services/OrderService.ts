/**
 * OrderService.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    "use strict";

    import IHttpService = angular.IHttpService;
    import IPromise = angular.IPromise;
    import IQService = angular.IQService;

    /**
     * Order service.
     *
     */
    export class OrderService implements IOrderService {

        private _$q: IQService;
        private _$http: IHttpService;

        private static _url = "https://script.google.com/macros/s/AKfycbxNaxdDl6ckRK5ahuKrNrhY4pxJerNqGRYCKkEXcmfgglf5GguX/exec";

        public static $inject = [
            "$q",
            "$http"
        ];

        /**
         * Creates an instance of order service.
         *
         * @constructs
         * @param {IQService} $q Q service to use.
         * @param {IHttpService} $http Http service to use.
         */
        constructor($q: IQService, $http: IHttpService) {
            this._$q = $q;
            this._$http = $http;
        }

        /**
         * Submits an order request.
         *
         * @param {OrderRequest} request Order request to send.
         * @returns {OrderResponse} Order response.
         */
        public order(request: OrderRequest): IPromise<OrderResponse> {
            var parameters = JSON.stringify(request);
            var deferred = this._$q.defer();
            this._$http
                .jsonp(OrderService._url + "?prefix=JSON_CALLBACK&data=" + parameters)
                .success((result: any) => {
                    var resultCode = result.resultCode;
                    var reference = result.reference;
                    var totalPayable = result.totalPayable;
                    var response = new OrderResponse(resultCode, reference, totalPayable);
                    deferred.resolve(response);
                })
                .error(() => {
                    var response = new OrderResponse(-99);
                    deferred.reject(response);
                })
            ;

            return deferred.promise;
        }

    }

}