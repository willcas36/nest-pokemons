import * as joi from 'joi';
export const JoiValidationSchema = joi.object({
  MONGODB: joi.string().required().description('MongoDB URL'),
  PORT: joi.number().default(3005),
  DEFAULT_LIMIT: joi.number().default(6),
});
