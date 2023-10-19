

export const stripeServerErrors = [
  {
    code: 200,
    message: "OK	Everything worked as expected."
  },
  {
    code: 400,
    message: "Bad Request	The request was unacceptable, often due to missing a required parameter."
  },
  {
    code: 401,
    message: "Unauthorized	No valid API key provided."
  },
  {
    code: 402,
    message: "Request Failed	The parameters were valid but the request failed."
  },
  {
    code: 403,
    message: "Forbidden	The API key doesn't have permissions to perform the request."
  },
  {
    code: 404,
    message: "Not Found	The requested resource doesn't exist."
  },
  {
    code: 409,
    message: "Conflict	The request conflicts with another request (perhaps due to using the same idempotent key)."
  },
  {
    code: 429,
    message: "Too Many Requests	Too many requests hit the API too quickly. We recommend an exponential backoff of your requests."
  },
]