import React from 'react';
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { useField } from 'formik';

export const DatePickerField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  const handleDateChange = (event) => {
    const { value } = event.target;
    helpers.setValue(value);
  };

  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      <FormLabel>{label}</FormLabel>
      <Input type="date" {...field} {...props} onChange={handleDateChange} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
