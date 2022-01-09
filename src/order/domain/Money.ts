import IMoney from "./interface/IMoney";

export default class Money {

    private amount: number;

    constructor(money: IMoney) {
        this.amount = money.amount;
    }
}