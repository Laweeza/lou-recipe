import { Tab, TabList, Tabs } from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';
import '../i18n';
import { useTranslation } from 'react-i18next';

const CategoryNav = () => {
  const { t } = useTranslation();
  return (
    <>
      <Tabs>
        <TabList>
          <Tab as={Link} to='/entrees'>
            {t('Entrees')}
          </Tab>
          <Tab as={Link} to='/sides'>
            {t('Sides')}
          </Tab>
          <Tab as={Link} to='/desserts'>
            {t('Desserts')}
          </Tab>
          <Tab as={Link} to='/snacks'>
            {t('Snacks')}
          </Tab>
        </TabList>
      </Tabs>
      <Outlet />
    </>
  );
};

export default CategoryNav;
