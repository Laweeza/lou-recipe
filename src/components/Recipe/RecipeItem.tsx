import { Card, CardBody, Flex, Heading, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { RecipeProps } from './Recipe.types';

const RecipeItem = ({
  id,
  title,
  category,
  description,
  directions,
  ingredients,
  nutrition,
  imageUrl,
}: RecipeProps) => {
  const navigate = useNavigate();

  return (
    <Card shadow='md' bg={'white'} flex={1} minW={'320px'}>
      <LinkBox>
        <CardBody>
          <Flex gap={2} flexDir={'column'}>
            <Image src={imageUrl} alt={title} borderRadius='lg' />
            {/* <Skeleton h={'240px'} /> */}
            <Heading size='md' onClick={() => navigate(`/recipes/${id}`)} cursor={'pointer'}>
              <LinkOverlay>
                <Text size='sm'>{title}</Text>
              </LinkOverlay>
            </Heading>
            <Text>Total: {nutrition?.serving} g</Text>
            <Text>Calories: {nutrition?.calories} kcal</Text>
            <Text> Fat: {nutrition?.fat || 0} g</Text>
            <Text>Carbs: {nutrition?.carbs || 0} g</Text>
            <Text>Protein: {nutrition?.protein} g</Text>
          </Flex>
        </CardBody>
      </LinkBox>
    </Card>
  );
};

export default RecipeItem;
