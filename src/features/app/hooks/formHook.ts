import { Resolver } from "react-hook-form";

export type FormValues = { question: string };

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.question ? values : {},
    errors: !values.question
      ? { question: { type: "required", message: "this is required" } }
      : {},
  };
};

export default resolver