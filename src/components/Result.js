import { useState, useEffect } from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  item: {
    fontWeight: 300,
    textAlign: 'left',
    marginLeft: '45%'
  }
}));

export default function Result({ data }) {
  const classes = useStyles();

  const [sortedArray, setSortedArray] = useState(null);
  const [results, setResults] = useState(null);

  useEffect(() => {
    const array = data.sort((a, b) => a.length - b.length);

    let results = [];
    array.map((example, index) => {
      // Omit first element since we don't want to compare it with itself
      if (index === 0) return;

      const porcentage = 100 - (array[0].length / example.length) * 100;
      results.push(porcentage.toFixed(2));
    });

    setResults(results);
    setSortedArray(array);
  }, [data]);

  return (
    <Typography variant="h6" align="center">
      {sortedArray && sortedArray[0].name} code is the shortest, comperad to
      other options it's:
      {results &&
        // We need to add one to the index in order to ommit the shortest one
        results.map((x, index) =>
          x < 0.5 ? (
            <li key={index} className={classes.item}>
              Basically the same compared to {sortedArray[index + 1].name}
            </li>
          ) : (
            <li key={index} className={classes.item}>
              {x}% shorter than {sortedArray[index + 1].name}
            </li>
          )
        )}
    </Typography>
  );
}
