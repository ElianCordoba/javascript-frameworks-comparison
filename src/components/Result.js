import { useState, useEffect } from 'react';

import Typography from '@material-ui/core/Typography';

/**
 *
 * @param {*} data
 * Example: {
 *   react: '......',
 *   svelte: '...'
 * }
 */
export default function Result({ data }) {
  const [shortest, setShortest] = useState(null);
  const [porcentage, setPorcentage] = useState(null);
  let examples = [];

  useEffect(() => {
    examples = data
      .map(example => {
        
        /*
          {
            react: '......'
          }
        */

        return {
          ...example,
          length: Object.values(example)[0].split('').length
        };
      })
      .sort((a, b) => a.length - b.length);

    const result = 100 - (examples[0].length / examples[1].length) * 100;

    setPorcentage(result.toFixed(2));
    debugger
    // setShortest(capitalize(Object.keys(examples[0])[0]));
    // if (examples.length === 2) {
    // } else {
    //   throw new Error('TODO: Not implemented yet')
    // }
  });

  return (
    <Typography variant="h6" align="center">
      {shortest} is {porcentage}% smaller
    </Typography>
  );
}
