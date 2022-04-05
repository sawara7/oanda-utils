"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const pair = 'USD_JPY';
    const api = yield (0, __1.getOandaAPI)("Primary");
    try {
        const res1 = yield api.getPricing({ instruments: pair });
        console.log(res1);
        const res2 = yield api.getOpenTrade();
        console.log(res2);
        const req = {
            type: 'LIMIT',
            instrument: pair,
            units: 1,
            positionFill: 'DEFAULT',
            takeProfitOnFill: {
                price: '121',
                timeInForce: 'GTC'
                // gtdTime?: number
            },
            price: '120',
            // gtdTime: Date.now() + 24*60*60*1000,
            triggerCondition: 'DEFAULT'
        };
        const res3 = yield api.postOrder(req);
        // const res2 = await api.cancelOrder('27519');
        // console.log(res2);
        // const res = await api.getInstruments();
        // // const price = await
        // res.instruments.forEach(element => {
        //     console.log(element.name); 
        // });
        // const price = await api.getPricing({
        //     instruments: 'USD_JPY,TRY_JPY'
        // })
        // console.log(price);
        // console.log(res);
    }
    catch (e) {
        console.log(e.message, e.data);
    }
}))();