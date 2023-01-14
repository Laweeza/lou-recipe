import { Tab, TabList, Tabs } from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';
import i18n from '../i18n';

const CategoryNav = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab as={Link} to='/entrees'>
            {i18n.t('Entrees')}
          </Tab>
          <Tab as={Link} to='/sides'>
            {i18n.t('Sides')}
          </Tab>
          <Tab as={Link} to='/desserts'>
            {i18n.t('Desserts')}
          </Tab>
          <Tab as={Link} to='/snacks'>
            {i18n.t('Snacks')}
          </Tab>
        </TabList>
      </Tabs>
      <Outlet />
    </>
  );
};

export default CategoryNav;
