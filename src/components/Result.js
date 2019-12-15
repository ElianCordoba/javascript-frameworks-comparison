import { useState, useEffect } from 'react';

import Typography from '@material-ui/core/Typography';

export default function Result({ data }) {
  const [shortest, setShortest] = useState(null);
  const [porcentage, setPorcentage] = useState(null);

  useEffect(() => {
    const sortedArray = data.sort((a, b) => a.length - b.length);
    
    const result = 100 - (sortedArray[0].length / sortedArray[1].length) * 100;

    setPorcentage(result.toFixed(2));
    setShortest(sortedArray[0].name);

    // if (examples.length === 2) {
    // } else {
    //   throw new Error('TODO: Not implemented yet')
    // }
  }, [data]);

  return (
    <Typography variant="h6" align="center">
      {shortest} is {porcentage}% smaller
    </Typography>
  );
}
