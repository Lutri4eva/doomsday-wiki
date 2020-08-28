import React from 'react';
import CircleSmallIcon from 'mdi-react/CircleSmallIcon';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

export default function Listify({ items, renderer, separator, ...rest }) {
  items = (items && (Array.isArray(items) ? items : [items]) || []).filter(it => it);
  return items.length > 0 && (
    <Box component="span" display="flex" flexWrap="wrap" {...rest}>
      {items.map((it, index, array) => (
        <Box key={index} alignItems="center" component="span" display="flex">
          {typeof renderer === 'function' ? renderer(it) : it}
          {index < array.length - 1 && separator}
        </Box>
      ))}
    </Box>
  );
}

Listify.defaultProps = {
  separator: <CircleSmallIcon size="1em" />,
};

Listify.propTypes = {
  items: PropTypes.array,
  renderer: PropTypes.func,
  separator: PropTypes.node,
};
