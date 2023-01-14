import { Tab, TabList, Tabs } from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';

export const CategoryTabs = () => {
  return (
    <>
      <Tabs>
        <TabList>
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
        </TabList>
      </Tabs>
      <Outlet />
    </>
  );
};
