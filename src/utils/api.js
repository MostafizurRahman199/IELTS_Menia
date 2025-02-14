// import axios from "axios";

// /**
//  * Makes a POST request to create a package.
//  * @param {Object} payload - The data to be sent in the body of the request.
//  * @param {string} token - The Bearer token for authentication.
//  * @returns {Promise} - The response from the server.
//  */



// export const createPackage = async (payload, token) => {
//   try {
//     const response = await axios.post(
//       "https://api.xampro.org/api/v1/package/own-package/createpackage",
//       payload,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     return response;
//   } catch (error) {
//     throw error;
//   }
// };





// export const createOrder = async (couponCode, payload, token) => {
//   try {
//     const response = await axios.post(
//       `https://api.xampro.org/api/v1/order/createOrder?couponCode=${couponCode}&currencyType=USD`,
//       payload,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     return response; // Return the response data to the calling function
//   } catch (error) {
//     console.error("Error creating order:", error.response?.data || error.message);
//     throw error; // Rethrow the error for handling in the calling function
//   }
// };


// // Query function
// export const fetchCourses = async ({ queryKey }) => {
//   const [, { token, courseIds }] = queryKey;

//   const coursePromises = courseIds.map((courseId) =>
//     axios.get(
//       `https://api.xampro.org/api/v1/package/getsinglepackage/${courseId}`,
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     )
//   );

//   const courseResponses = await Promise.all(coursePromises);
//   return courseResponses.map((response) => response.data.singlePackage);
// };



import axios from "axios";

/**
 * Makes a POST request to create a package.
 * @param {Object} payload - The data to be sent in the body of the request.
 * @param {string} token - The Bearer token for authentication.
 * @returns {Promise} - The response from the server.
 */
export const createPackage = async (payload, token) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_CREATE_PACKAGE_URL}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Makes a POST request to create an order.
 * @param {string} couponCode - The coupon code to apply to the order.
 * @param {Object} payload - The data to be sent in the body of the request.
 * @param {string} token - The Bearer token for authentication.
 * @returns {Promise} - The response from the server.
 */
export const createOrder = async (couponCode, payload, token) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_CREATE_ORDER_URL}?couponCode=${couponCode}&currencyType=USD`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error creating order:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * Fetches courses based on the provided course IDs.
 * @param {Object} params - Contains queryKey which holds token and courseIds.
 * @returns {Promise} - The fetched course data.
 */
export const fetchCourses = async ({ queryKey }) => {
  const [, { token, courseIds }] = queryKey;

  const coursePromises = courseIds.map((courseId) =>
    axios.get(
      `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_GET_SINGLE_PACKAGE_URL}/${courseId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
  );

  const courseResponses = await Promise.all(coursePromises);
  return courseResponses.map((response) => response.data.singlePackage);
};
