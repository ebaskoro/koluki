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
        private _surchargeRepository: ISurchargeRepository;
        private _orderService: IOrderService;
        private _orderRepository: IOrderRepository;
        private _$uibModal: IModalService;
        private _$location: ILocationService;
        private _toaster: IToasterService;
        private _surcharges: Surcharge[];
        private _orderRequest: OrderRequest;
        private _modal: IModalServiceInstance;
        private _loading: boolean;

        public static $inject = [
            "CartRepository",
            "SurchargeRepository",
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
         * @param {ICartRepository} cartRepository Cart repository.
         * @param {ISurchargeRepository} surchargeRepository Surcharge repository.
         * @param {IOrderService} orderService Order service to use.
         * @param {OrderRepository} orderRepository Order repository.
         * @param {IModalService} $uibModal Modal service.
         * @param {ILocationService} $location Location service.
         * @param {IToasterService} toaster Toaster service.
         */
        constructor(cartRepository: ICartRepository, surchargeRepository: ISurchargeRepository,
            orderService: IOrderService, orderRepository: IOrderRepository, $uibModal: IModalService,
            $location: ILocationService, toaster: IToasterService) {
            this._cartRepository = cartRepository;
            this._surchargeRepository = surchargeRepository;
            this._orderService = orderService;

            this._orderRepository = orderRepository;
            this._orderRepository.reset();

            this._$uibModal = $uibModal;
            this._$location = $location;
            this._toaster = toaster;

            this._surcharges = [];
            var totalCart = cartRepository.total;
            surchargeRepository.getDeliverySurcharge(null, totalCart).$promise
                .then((result: any) => {
                    if (result.resultCode === 0) {
                        var id = result.surcharge.id;
                        var name = result.surcharge.name;
                        var price = result.surcharge.price;
                        var surcharge = new Surcharge(id, name, price);
                        this._surcharges.push(surcharge);
                    }
                })
                .finally(() => this._loading = false)
            ;

            this._orderRequest = new OrderRequest();
            this._modal = null;
            this._loading = true;

            if (cartRepository.isEmpty
                || (cartRepository.total < 25.00)) {
                $location.path("/cart");
            }
        }

        public get items(): CartItem[] {
            return this._cartRepository.items;
        }

        public get surcharges(): Surcharge[] {
            return this._surcharges;
        }

        public get total(): number {
            if (this._surcharges.length) {
                var totalSurcharges = this._surcharges[0].price;
                return (this._cartRepository.total + totalSurcharges);
            }
            else {
                return this._cartRepository.total;
            }
        }

        public get form(): any {
            return this._orderRequest;
        }

        public get isLoading(): boolean {
            return this._loading;
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

            this._orderRequest.surcharges = [];

            for (let surcharge of this._surcharges) {
                this._orderRequest.surcharges.push({
                    surchargeId: surcharge.id,
                    quantity: 1,
                    price: surcharge.price,
                    total: surcharge.price
                });
            }

            this._orderRequest.totalPayable = this.total;

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