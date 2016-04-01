import React, { PropTypes } from 'react';

function Column({
  rows
}) {
  return (
    <div>
      {rows.map(row => <div>{row}</div>)}
    </div>
  );
}

Column.propTypes = {
  rows: PropTypes.array.isRequired
};

export default Column;
