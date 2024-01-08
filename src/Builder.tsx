import TextField from "@mui/material/TextField";
import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";

export type TForm = {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  value: string;
  fullWidth?: undefined | boolean;
  validationType: string;
  validations: TFormValidation[];
};

type TFormValidation = {
  type: string;
  params: (string | RegExp | number)[];
};

type Tprops = {
  form: TForm[];
  control: Control<FieldValues, unknown>;
  errors: FieldErrors<FieldValues>;
};

const fieldMap = {
  text: TextField,
  password: TextField,
  email: TextField,
};

export default function Builder({ form, control, errors }: Tprops) {
  const renderFormComponent = () =>
    form.map((item, idx) => {
      const Component = fieldMap[item.type];

      if (item.type) {
        return (
          <Controller
            key={idx}
            name={item.id}
            control={control}
            defaultValue={item.value}
            render={({ field }) => (
              <Component
                {...field}
                label={item.label}
                type={item.type}
                fullWidth={item.fullWidth || false}
                error={item.id in errors}
                helperText={errors[item.id]?.message}
              />
            )}
          />
        );
      }
      return "";
    });

  return renderFormComponent();
}
