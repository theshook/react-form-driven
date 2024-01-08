import * as zod from "zod";
import { TForm } from "./Builder";

type RecordWithZodSchema<T> = Record<
  string,
  zod.ZodType<T, zod.ZodRawShape, zod.ZodTypeAny>
>;

export function createZodSchema<T>(
  schema: RecordWithZodSchema<T>,
  config: TForm,
) {
  const { id, validationType, validations = [] } = config;
  if (!zod[validationType]) {
    return schema;
  }

  let validator = zod[validationType]();

  validations.forEach((validation) => {
    const { params, type } = validation;
    if (!validator[type]) {
      return;
    }

    validator = validator[type](...params);
  });
  schema[id] = validator;
  return schema;
}
