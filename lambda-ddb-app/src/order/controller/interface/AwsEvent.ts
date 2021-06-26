export default interface AwsEvent{
	messageId: string;
	receiptHandle: string;
	body: any;
	attributes: Array<object>;
	messageAttributes: Array<object>;
	md5OfMessageAttributes: string;
	md5OfBody: string;
	eventSource: string;
	eventSourceARN: string;
	awsRegion: string;
}