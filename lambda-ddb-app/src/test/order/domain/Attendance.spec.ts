export default class BetweenDate {
	private startDate: Date
	private endDate: Date

	constructor(startDate:Date, endDate:Date){
		this.startDate = startDate;
		this.endDate = endDate;
	}

	public getDate():void {
		const list = new Array<Date>();
		const current = this.startDate;
		
		while (current <= this.endDate) {
    		console.log(current);
			list.push(current);
    		current.setDate(current.getDate() + 1);

		}
	}
}