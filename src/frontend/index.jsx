import * as React from 'react';
import ForgeUI, { SpacePage } from '@forge/ui';
import ForgeReconciler from '@forge/react';
import {TableSorted} from './data-table/dataTable';


const App = () => {
  
  return (
    <SpacePage>
      <TableSorted />
    </SpacePage>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
