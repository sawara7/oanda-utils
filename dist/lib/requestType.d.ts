import { TradeState } from "./responseType";
import { OrderTriggerCondition, TransactionType } from "./type";
export declare type AcceptDateTimeFormat = 'UNIX' | 'RFC3339';
export declare type OrderType = 'MARKET' | 'LIMIT';
export declare type TimeInForce = 'FOK' | 'GTC' | 'GTD' | 'GFD';
export declare type OrderPositionFill = 'DEFAULT';
export interface GetTransactionsSinceIDRequest {
    id: string;
    type?: TransactionType;
}
export interface GetTransactionsStreamRequest {
}
export interface GetTradeRequest {
    ids?: string;
    state?: TradeState;
    instrument?: string;
    count?: number;
    beforeID?: string;
}
export interface BaseOrderRequest {
    type: OrderType;
    instrument: string;
    units: number;
    positionFill: OrderPositionFill;
    takeProfitOnFill?: TakeProfitDetails;
    stopLossOnFill?: StopLossDetails;
    guaranteedStopLossOnFill?: GuaranteedStopLossDetails;
    trailingStopLossOnFill?: TrailingStopLossDetails;
}
export interface GetOrderRequest {
    ids: string;
    state?: string;
    instrument?: string;
    count?: number;
    beforeID?: string;
}
export interface MarketOrderRequest extends BaseOrderRequest {
    timeInForce?: TimeInForce;
    priceBound?: number;
}
export interface LimitOrderRequest extends BaseOrderRequest {
    price: string;
    timeInForce?: TimeInForce;
    gtdTime?: string;
    triggerCondition: OrderTriggerCondition;
}
export interface StopOrderRequest extends BaseOrderRequest {
    price: string;
    priceBound?: number;
    timeInForce?: TimeInForce;
    gtdTime: number;
    triggerCondition: OrderTriggerCondition;
}
export interface MarketIfTouchedOrderRequest extends BaseOrderRequest {
    price: string;
    priceBound?: number;
    timeInForce?: TimeInForce;
    gtdTime: number;
    triggerCondition: OrderTriggerCondition;
}
export interface TakeProfitDetails {
    price: string;
    timeInForce: TimeInForce;
    gtdTime?: number;
}
export interface StopLossDetails {
    price: string;
    timeInForce: TimeInForce;
    gtdTime?: number;
    distance: number;
}
export interface GuaranteedStopLossDetails {
    price: string;
    timeInForce: TimeInForce;
    gtdTime?: number;
    distance: number;
}
export interface TrailingStopLossDetails {
    timeInForce: TimeInForce;
    gtdTime?: number;
    distance: number;
}
export interface GetPricingRequest {
    instruments: string;
    since?: number;
}
