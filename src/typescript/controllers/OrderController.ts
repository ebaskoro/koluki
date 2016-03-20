/**
 * OrderController.ts
 *
 */

/// <reference path="../_references.ts" />

module IMCV.Koluki {
    "use strict";

    import ILocationService = angular.ILocationService;
    import IModalService = angular.ui.bootstrap.IModalService;
    import IModalServiceInstance = angular.ui.bootstrap.IModalServiceInstance;

    /**
     * Order controller.
     *
     */
    export class OrderController {

        private _cartRepository: ICartRepository;
        private _orderService: IOrderService;
        private _$uibModal: IModalService;
        private _orderRequest: OrderRequest;
        private _modal: IModalServiceInstance;
        private _$location: ILocationService;

        public static $inject = [
            "CartRepository",
            "OrderService",
            "$uibModal",
            "$location"
        ];

        /**
         * Creates an instance of order controller.
         *
         * @constructor
         * @param cartRepository The cart repository.
         * @param orderService The order service.
         * @param $uibModal The modal service.
         * @param {ILocationService} $location Location service.
         */
        constructor(cartRepository: ICartRepository, orderService: IOrderService, $uibModal: IModalService,
                    $location: ILocationService) {
            this._cartRepository = cartRepository;
            this._orderService = orderService;
            this._$uibModal = $uibModal;
            this._$location = $location;

            this._orderRequest = new OrderRequest();
            // TODO: Add delivery surcharge
        }

        public get items(): CartItem[] {
            return this._cartRepository.items;
        }

        public get total(): number {
            return this._cartRepository.total;
        }

        public get form(): any {
            return this._orderRequest;
        }

        public order() {
            this._orderRequest.items = [];

            for (let item of this._cartRepository.items) {
                this._orderRequest.items.push({
                    productId: item.product.id,
                    quantity: item.quantity,
                    price: item.product.price,
                    total: (item.product.price * item.quantity)
                });
            }

            this._orderRequest.totalPayable = this._cartRepository.total;

            this._modal = this._$uibModal.open({
                templateUrl: "views/common/ordering.html"
            });

            this._orderService.order(this._orderRequest)
                .then((response) => {
                    this._$location.path("/ordered");
                })
                .finally(() => {
                    if (this._modal) {
                        this._modal.close();
                    }
                })
            ;
        }

    }

}