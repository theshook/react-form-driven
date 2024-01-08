import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createZodSchema } from "./schema_parser";
import { TestForm } from "./test-form";
import Builder from "./Builder";
import { Box, Button, Grid, Typography } from "@mui/material";
import { LoginFormSchema } from "./login-form";

const schema = TestForm.reduce(createZodSchema, {});
const s = z.object(schema);
type TForm = z.infer<typeof s>;

const loginSchema = LoginFormSchema.reduce(createZodSchema, {});
const loginResolver = z.object(loginSchema);

const App = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TForm>({
    resolver: zodResolver(s),
  });

  const loginForm = useForm({
    resolver: zodResolver(loginResolver),
  });

  return (
    <Box>
      <Typography variant="h1">Test Form</Typography>
      <form onSubmit={handleSubmit((d: TForm) => console.log(d))}>
        <Grid container spacing={2}>
          {Builder({
            form: TestForm,
            control,
            errors,
          }).map((b, idx) => (
            <Grid key={idx} item xs={12}>
              {b}
            </Grid>
          ))}
        </Grid>
        <input type="submit" />
      </form>

      <Box sx={{ height: "200px", width: "50%" }}>
        <Typography variant="h2">Test Form</Typography>
        <form
          onSubmit={loginForm.handleSubmit((d) =>
            alert(`Logging in... ${JSON.stringify(d)}`),
          )}
        >
          <Grid container spacing={2}>
            {Builder({
              form: LoginFormSchema,
              control: loginForm.control,
              errors: loginForm.formState.errors,
            }).map((b) => (
              <Grid item xs={12}>
                {b}
              </Grid>
            ))}
          </Grid>
          <Button type="submit">Login</Button>
        </form>
      </Box>
    </Box>
  );
};

export default App;
