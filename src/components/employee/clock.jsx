import React, { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';

export const RealTimeClock = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

  const dateString = dateTime.toLocaleDateString(undefined, options);
  const timeString = dateTime.toLocaleTimeString(undefined, timeOptions);

  return (
    <Box textAlign="center">
      <Text fontSize="lg" mt="1">{dateString}</Text>
      <Text fontSize="3xl" fontWeight="bold" mt="2">{timeString}</Text>
    </Box>
  );
}
