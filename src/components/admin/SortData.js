import * as React from 'react';
import Box from "@mui/material/Box";


const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

export default function BasicExampleDataGrid() {
  const { data } = {
      "happy": true,
      "En":"44"
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <Box {...data} />
    </div>
  );
}