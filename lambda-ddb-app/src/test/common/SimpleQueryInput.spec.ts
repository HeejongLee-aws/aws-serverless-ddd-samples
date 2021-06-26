import 'mocha';
//import * as app from '../app';
import { expect } from 'chai';

// import { BeginsWith, Equals } from '../../../../../payment/infra/common/dynamodb/SimpleQueryInput';
// import SimppleQueryInput from '../../../../../payment/infra/common/dynamodb/SimpleQueryInput';


describe('SimpleQueryInput.ts Test suite', function() {

	
    it('조회조건 생성 - Equals', async() => {

		// const queryInput:SimppleQueryInput = new SimppleQueryInput({
		// 	indexName : "TestIndex",
		// 	expressions: [new Equals("PK", "12345"), new BeginsWith("SK", "tony")]
		// })

		// queryInput.addFilters({
		// 	expressions : [
		// 		{
		// 			expression: new Equals("paymentStatus", "BEFORE")
		// 		},
		// 		{
		// 			condition: "Or",
		// 			expression: new Equals("paymentStatus", "SUCCESS")
		// 		},
		// 		{
		// 			condition: "Or",
		// 			expression: new Equals("paymentStatus", "REFUND")
		// 		}
		// 	]
		// });

		// queryInput.addFilters({
		// 	condition : "And",
		// 	expressions : [
		// 		{
		// 			expression: new Equals("memberNo", "Tony")
		// 		},
		// 	]
		// });

		// console.log(queryInput.toExpression());
        // expect(true).to.equal(true);
	});
	

	
});