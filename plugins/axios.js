export default function (cox) {

	const { $axios, redirect, error } = cox;

	// set header
	$axios.setHeader('Authorization', cox.env.api.token);

	// $axios.onRequest(config => {
	// 	console.log('Making request to ' + config.url);
	// });

	// $axios.onError(error => {
	// 	console.error(error);
	// });

}