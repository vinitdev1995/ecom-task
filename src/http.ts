import axios, { AxiosError, AxiosResponse } from "axios";

export const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  validateStatus: (status: number) => {
    return status >= 200 && status < 300;
  }
});

instance.interceptors.response.use(
  (response) => afterEachResponse(response),
  async (err) => errorHandler(err)
);

/**
 * The axios response
 * @param {AxiosResponse} response the axios response
 * @returns {AxiosResponse} the new response
 */
const afterEachResponse = (response: AxiosResponse) => {
  return response;
};

/**
 * Interceptor for error
 * @param {AxiosError} error the axios error
 * @returns {Promise} the error promise
 */
const errorHandler = (error: AxiosError) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const err = error as any;
  return Promise.reject(err);
};

/**
 * GET HTTP request
 * @param {string} url the url to request
 * @param {object} params the params to send
 * @param {string} baseUrl the base url to use.
 * @returns {Promise<unknown>} the promise of the HTTP request
 **/
export const get = (
  url: string,
  params?: Record<string, unknown>
): Promise<AxiosResponse<unknown>> => {
  return instance.get<unknown>(url, { params });
};
