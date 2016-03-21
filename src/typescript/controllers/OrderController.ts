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
    import IToasterService = ngtoaster.IToasterService;

    /**
     * Order controller.
     *
     */
    export class OrderController {

        private _cartRepository: ICartRepository;
        private _orderService: IOrderService;
        private _orderRepository: IOrderRepository;
        private _$uibModal: IModalService;
        private _$location: ILocationService;
        private _toaster: IToasterService;
        private _surcharges: CartItem[];
        private _orderRequest: OrderRequest;
        private _modal: IModalServiceInstance;

        public static $inject = [
            "CartRepository",
            "OrderService",
            "OrderRepository",
            "$uibModal",
            "$location",
            "toaster"
        ];

        /**
         * Creates an instance of order controller.
         *
         * @constructor
         * @param cartRepository Cart repository.
         * @param orderService Order service to use.
         * @param {OrderRepository} orderRepository Order repository.
         * @param $uibModal The modal service.
         * @param {ILocationService} $location Location service.
         * @param {IToasterService} toaster Toaster service.
         */
        constructor(cartRepository: ICartRepository, orderService: IOrderService, orderRepository: IOrderRepository,
            $uibModal: IModalService, $location: ILocationService, toaster: IToasterService) {
            this._cartRepository = cartRepository;
            this._orderService = orderService;

            this._orderRepository = orderRepository;
            this._orderRepository.reset();

            this._$uibModal = $uibModal;
            this._$location = $location;
            this._toaster = toaster;

            this._surcharges = [];
            this._surcharges.push(new CartItem(new Product(1, "Delivery", "Delivery Surcharge", 5, "", ""), 1));

            this._orderRequest = new OrderRequest();
            this._modal = null;
            // TODO: Add delivery surcharge

            if (cartRepository.isEmpty) {
                $location.path("/cart");
            }
        }

        public get items(): CartItem[] {
            return this._cartRepository.items;
        }

        public get surcharges(): CartItem[] {
            return this._surcharges;
        }

        public get total(): number {
            var totalSurcharges = this._surcharges[0].product.price * this._surcharges[0].quantity;
            return (this._cartRepository.total + totalSurcharges);
        }

        public get form(): any {
            return this._orderRequest;
        }

        public order() {
            if (false === this.isValid) {
                return;
            }

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
                .then((response: OrderResponse) => {
                    if (response.resultCode === 0) {
                        this._orderRepository.reference = response.reference;
                        this._orderRepository.fullName = this._orderRequest.fullName;
                        this._orderRepository.totalPayable = response.totalPayable;

                        this._cartRepository.clear();

                        this._$location.path("/ordered");
                    }
                    else {
                        this._toaster.error({
                            body: "Unable to submit order."
                        });
                    }
                })
                .finally(() => {
                    if (this._modal) {
                        this._modal.close();
                    }
                })
            ;
        }

        private get isValid(): boolean {
            var errorMessages = [];

            if (!this._orderRequest) {
                errorMessages.push("Unable to process order.");
                return false;
            }

            if (!this._orderRequest.fullName) {
                errorMessages.push("Full name is required");
            }

            if (!this._orderRequest.mobileNumber) {
                errorMessages.push("Mobile number is required");
            }

            if (!this._orderRequest.emailAddress) {
                errorMessages.push("Email address is required");
            }

            if (!this._orderRequest.address) {
                errorMessages.push("Address is required");
            }

            if (!this._orderRequest.suburb) {
                errorMessages.push("Suburb is required");
            }

            if (errorMessages.length) {
                this._toaster.error({
                    body: errorMessages.join(", ") + "."
                });

                return false;
            }
            else {
                return true;
            }
        }

    }

}