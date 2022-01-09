import IOrderer from "./interface/IOrderer";

export default class Orderer {

    private name: string

    constructor(orderer: IOrderer) {
        this.name = orderer.name;
    }

}