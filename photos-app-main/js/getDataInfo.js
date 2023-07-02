export async function getDataInfo(url) {
	// console.log('start fetch');
	try {
		const response = await fetch(url)
		const data = response.json()
		return data
	} catch (e) {
		console.error(e)
	} finally {
		// console.log('finish fetch');
	}
}


// function getDataInfo(urlServer) {
// 	function asd(urlServer) {
// 		console.log('start fetch');
// 		return fetch(urlServer).then(response => response.json())
// 	}
// 	asd(urlServer).then(data => {
// 		console.log('data', data)
// 	})
// 		.catch(e => console.error(e))
// }

// export async function getDataInfo(urlServer){ 
// async function asd(urlServer) {
// 	console.log('start fetch');
// 	return fetch(urlServer).then(response=>response.json())
// }
// await asd.then(data=>{
// 	console.log('data',data)
// })
// .catch(e=>console.error(e))
// }
// export async function getDataInfo(urlServer) {
// 	async function getFetchJSON() {
// 		const response = await fetch(`${urlServer}`)//, {
// 		// 	metod: 'GET',
// 		// 	headers: {
// 		// 		"Content-Type": "application/json"
// 		// 	}
// 		// });
// 		if (!response.ok) {				//catch error
// 			throw new Error(`error ${urlServer} - is ${response.status}`); //if error is stop programm
// 		}
// 		const getInfo = await response.json();
// 		return await getInfo;
// 	}

// 	const tempValue = await getFetchJSON().then(getInfo => {
		
// 		return getInfo; // fetched 
// 	})
// 	return await tempValue
// }

// async function fetchPrices() {
// 	const response = await fetch("/prices");
// 	return await response.json();
// }
