import { BrowserRouter, Link, Router } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel, TabPanels } from '@chakra-ui/react';

export const CategoryTabs = () => {
  return (
    <Tabs>
      <TabList>
        <BrowserRouter>
          <Tab as={Link} to='/entrees'>
            Entrees
          </Tab>
          <Tab as={Link} to='/sides'>
            Sides
          </Tab>
          <Tab as={Link} to='/desserts'>
            Desserts
          </Tab>
          <Tab as={Link} to='/snacks'>
            Snacks
          </Tab>
        </BrowserRouter>
      </TabList>
    </Tabs>
  );
};
