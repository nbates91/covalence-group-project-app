// import * as baseService from './base';

<<<<<<< HEAD
// function sendContactEmail(name, email, message) {
// 	return baseService.post('/api/contact', {
// 		name,
// 		email,
// 		message,
// 	});
// }
=======
function sendContactEmail(name, email, message) {
	return baseService.post('https://bham-hops.herokuapp.com/api/contact', {
		name,
		email,
		message,
	});
}
>>>>>>> 700eb4beacf6f210ce7fa946011ece5289ea19c6

// export { sendContactEmail };
