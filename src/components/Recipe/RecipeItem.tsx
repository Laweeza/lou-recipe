import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';

import { RecipeProps } from './Recipe.types';

const RecipeItem = ({ id, title, category, directions, ingredients, imageUrl }: RecipeProps) => (
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
          {title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>{directions}</AccordionPanel>
  </AccordionItem>
);

export default RecipeItem;
