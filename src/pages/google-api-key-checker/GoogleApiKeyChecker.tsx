import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import Axios from 'axios';
import { useState } from 'react';

import { useForm } from '@/hooks';

export function GoogleApiKeyCheckerPage() {
  const [result, setResult] = useState('');
  const [details, setDetails] = useState<unknown>();
  const [error, setError] = useState<Error>();
  const { register, handleSubmit } = useForm<{ key: string }>({
    defaultValues: {
      key: '',
    },
  });

  const onSubmit = handleSubmit(async payload => {
    setError(undefined);
    setDetails(undefined);
    setResult('Checking...');
    try {
      const result = await Axios.get(
        `https://places.googleapis.com/v1/places/ChIJIaGbBBhawokRUmbgNsUmr-s`,
        {
          params: {
            fields: 'id,displayName,name,addressComponents,formattedAddress',
            languageCode: 'en',
            key: payload.key,
          },
        },
      );
      setResult('Success');
      console.log('Check result', result);
      setDetails(result);
    } catch (e) {
      setResult('Error');
      console.error(e);
      setError(e as Error);
    }
  });

  return (
    <Stack
      component="form"
      onSubmit={onSubmit}
      direction="column"
      alignItems="flex-start"
      gap={2}
      maxWidth={500}
    >
      <Typography variant="h2">Google API Key Validator</Typography>
      <TextField
        label="Target name"
        color="secondary"
        size="small"
        fullWidth
        {...register(`key`, {
          required: 'Key is required',
        })}
      />
      <Button type="submit">Check</Button>
      <Typography variant="h4">{result}</Typography>
      <Box
        component="code"
        width={500}
        sx={{
          wordBreak: 'break-word',
          whiteSpace: 'pre-wrap',
        }}
      >
        {JSON.stringify(details, undefined, 2)}
        {JSON.stringify(error, undefined, 2)}
      </Box>
    </Stack>
  );
}
