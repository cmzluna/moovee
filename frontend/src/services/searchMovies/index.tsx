// import axios from 'axios';
// const getCountries = async () => {
// 	const options = {
// 		method: 'POST',
// 		url: 'https://geodb-cities-graphql.p.rapidapi.com/',
// 		headers: {
// 			'content-type': 'application/json',
// 			'x-rapidapi-host': 'geodb-cities-graphql.p.rapidapi.com',
// 			'x-rapidapi-key': process.env.REACT_PUBLIC_RAPIDAPI_KEY
// 		},
// 		data: {
// 			query: `{
//         countries(namePrefix: "Ame") {
//           edges {
//             node {
//               name
//               capital
//               currencyCodes
//             }
//           }
//         }
//       }`
// 		}
// 	};
// 	axios
// 		.request(options)
// 		.then(function (response) {
// 			const res = response.data; // Response received from the API
// 		})
// 		.catch(function (error) {
// 			console.error(error);
// 		});
// };
import React from "react";

const index = () => {
  return <div>index</div>;
};

export default index;
