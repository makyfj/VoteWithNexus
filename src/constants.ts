const constants = {
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || "boom19",
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || "boom20",
  JWT_ACCESS_EXPIRATION: process.env.JWT_ACCESS_EXPIRATION || "1 hour",
  JWT_REFRESH_EXPIRATION: process.env.JWT_REFRESH_EXPIRATION || "7 days",
}

export default constants

