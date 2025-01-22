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
      "https://api.xampro.org/api/v1/package/own-package/createpackage",
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
