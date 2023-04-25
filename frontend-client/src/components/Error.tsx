import { Alert, AlertTitle } from "@material-ui/lab";

interface Props {
  error: string[];
}

const Error = ({ error }: Props) => {
  if (error.length === 0) return null;

  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {error.map((error) => (
        <div key={error}>{error}</div>
      ))}
    </Alert>
  );
};

export default Error;
