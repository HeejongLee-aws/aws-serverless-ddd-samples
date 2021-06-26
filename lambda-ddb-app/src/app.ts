exports.handler = async (event:any, context:any) => {
	
	try{
		console.log("hello");
	}catch(error){
		console.log("hello error", error);
	}
	return {};
}