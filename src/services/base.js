<<<<<<< HEAD
// import 'es6-promise';
// import 'fetch-everywhere';

// const AUTH_TOKEN_KEY = 'authtoken';
// let authToken = '';

// function setAuthToken(token, userid) {
// 	authToken = `Bearer ${token}`;
// 	let user = userid;
// 	if (localStorage) {
// 		localStorage.setItem(AUTH_TOKEN_KEY, authToken);
// 		localStorage.setItem('user', user);
// 	}
// }

// function clearAuthToken() {
// 	authToken = '';
// 	if (localStorage) {
// 		localStorage.removeItem(AUTH_TOKEN_KEY);
// 	}
// }

// function populateAuthToken() {
// 	if (localStorage) {
// 		let token = localStorage.getItem(AUTH_TOKEN_KEY);
// 		if (token && token !== null) {
// 			authToken = token;
// 		}
// 	}
// }

// function makeFetch(url, info) {
// 	return fetch(url, info);
// }

// function json(url, method = 'GET', payload = {}) {
// 	let data = {
// 		method,
// 		body: JSON.stringify(payload),
// 		headers: new Headers({
// 			'Content-Type': 'application/json',
// 			Authorization: authToken,
// 		}),
// 	};

// 	if (method === 'GET') {
// 		delete data.body;
// 	}

// 	return makeFetch(url, data).then(response => {
// 		if (response.ok) {
// 			let contentType = response.headers.get('Content-Type');

// 			if (contentType.indexOf('application/json') > -1) {
// 				return response.json();
// 			}

// 			return response.statusText;
// 		}

// 		throw response;
// 	});
// }

// function get(url) {
// 	return json(url);
// }

// function post(url, payload) {
// 	return json(url, 'POST', payload);
// }

// function put(url, payload) {
// 	return json(url, 'PUT', payload);
// }

// function destroy(url, payload) {
// 	return json(url, 'DELETE', payload);
// }

// export { setAuthToken, populateAuthToken, clearAuthToken, get, post, put, destroy, makeFetch };
=======
import 'es6-promise';
import 'fetch-everywhere';
import { asyncStorage } from 'react-native';

const AUTH_TOKEN_KEY = 'authtoken';
let authToken = '';

function setAuthToken(token, userid) {
	authToken = `Bearer ${token}`;
	let user = userid;
	if (asyncStorage) {
		asyncStorage.setItem(AUTH_TOKEN_KEY, authToken);
		asyncStorage.setItem('user', user);
	}
}

function clearAuthToken() {
	authToken = '';
	if (asyncStorage) {
		asyncStorage.removeItem(AUTH_TOKEN_KEY);
	}
}

function populateAuthToken() {
	if (asyncStorage) {
		let token = asyncStorage.getItem(AUTH_TOKEN_KEY);
		if (token && token !== null) {
			authToken = token;
		}
	}
}

function makeFetch(url, info) {
	return fetch(url, info);
}

function json(url, method = 'GET', payload = {}) {
	let data = {
		method,
		body: JSON.stringify(payload),
		headers: new Headers({
			'Content-Type': 'application/json',
			Authorization: authToken,
		}),
	};

	if (method === 'GET') {
		delete data.body;
	}

	return makeFetch(url, data).then(response => {
		if (response.ok) {
			let contentType = response.headers.get('Content-Type');

			if (contentType.indexOf('application/json') > -1) {
				return response.json();
			}

			return response.statusText;
		}

		throw response;
	});
}

function get(url) {
	return json(url);
}

function post(url, payload) {
	return json(url, 'POST', payload);
}

function put(url, payload) {
	return json(url, 'PUT', payload);
}

function destroy(url, payload) {
	return json(url, 'DELETE', payload);
}

export { setAuthToken, populateAuthToken, clearAuthToken, get, post, put, destroy, makeFetch };
>>>>>>> 700eb4beacf6f210ce7fa946011ece5289ea19c6
