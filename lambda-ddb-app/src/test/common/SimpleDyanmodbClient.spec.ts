// import Payment from '../../../../../payment/domain/payment/Payment';
// import SimpleDynamodbClient from '../../../../../common/SimpleDynamodbClient';
// import SimpleTransactWriteItems from '../../../../../common/SimpleTransactWriteItems';
// import {Equals, GetItemInput} from '../../../../../common/SimpleQueryInput';

import { expect } from 'chai';
import { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client';

describe('SimpleDynamodbClient.ts Test suite', function() {

	const tableName = "Payment";

    // it('조회조건 생성 - Equals', async() => {

	// 	const simpleDynamodbClient:SimpleDynamodbClient = new SimpleDynamodbClient(tableName);
	// 	const transactWirteItems:SimpleTransactWriteItems = new SimpleTransactWriteItems(tableName);

	// 	const payment1 = Payment.createPayment("20191212312312316", "tony1");
	// 	payment1.paymentStatus = "dddddd";

	// 	transactWirteItems.put(payment1);
		
	// 	payment1.paymentStatus = "sssss";
	// 	transactWirteItems.put(payment1);

	// 	try {
	// 		console.log(payment1);
	// 		const result = await simpleDynamodbClient.commit(transactWirteItems);
	// 		console.log(result);
	// 	}catch(error){
	// 		console.log(error);
	// 	}

    //     expect(true).to.equal(true);
	// });

	// it('조회조건 생성 - BatchGet', async() => {

		
	// 	const getInputs = Array<DocumentClient.GetItemInput>();
	// 	const dynamoDbClient:SimpleDynamodbClient = new SimpleDynamodbClient(tableName);
	// 	const paymentIds = ['202101250016030000000000000000000035', '202101250019350000000000000000000040'];
	// 	paymentIds.forEach( async paymentId =>  {
	// 		const getInput = new GetItemInput(
	// 			[ 
	// 				new Equals("PK", paymentId)
	// 			]);
	// 		getInputs.push(getInput.toExpression());
	// 	});
	// 	const batchGetItem = {
	// 		RequestItems: getInputs
	// 	};
		
	// 	dynamoDbClient.batchGet(Payment, batchGetItem);

    //     expect(true).to.equal(true);
	// });
	

	
});