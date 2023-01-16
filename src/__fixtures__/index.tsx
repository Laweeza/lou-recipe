import { RecipeProps } from '../components/Recipe/Recipe.types';

const recipesList: RecipeProps[] = [
  {
    id: 1,
    title: 'Protein Pudding',
    category: {
      id: 1,
      name: 'Dessert',
    },
    description: 'A simple sweet treat!',
    directions: [
      {
        order: 1,
        instruction: 'Throw in wet ingredients, followed by dry ingredients into a blender. Blend!',
      },
      {
        order: 2,
        instruction:
          'This can be consumed immediately. Keeps in the fridge for up to 3 days in a seal tight container.',
      },
    ],
    ingredients: [
      { quantity: '1 1/2 cups', name: 'Fairlife Milk' },
      { quantity: '1/2 cup', name: 'Soymilk' },
      {
        quantity: '1 rounded scoop',
        name: 'PEScience Selection Protein - Gourmet Vanilla Whey+Casein Blend',
      },
      {
        quantity: '1 packet',
        name: 'Fat Free Pistachio Pudding - Can sub with vanilla, chocolate, etc',
      },
      { quantity: '1/2 - 1/3 tsp', name: 'Guar Gum' },
    ],
    imageUrl: './pudding.png',
    nutrition: {
      serving: 524,
      calories: 380,
      fat: 0,
      protein: 48,
    },
  },
  {
    id: 2,
    title: 'Protein Naan',
    category: {
      id: 1,
      name: 'Side',
    },
    description: 'Have this as a side to your tandoori chicken.',
    directions: [
      {
        order: 1,
        instruction:
          'Add all your ingredients to a large bowl and mix it together until it forms a dough ball.',
      },
      {
        order: 2,
        instruction:
          'Break the dough into 6 smaller pieces and lightly knead them in your hands to smooth out.',
      },
      {
        order: 3,
        instruction:
          'Add to a floured surface and use your hands to flatten each naan out into an oval shape.',
      },
      {
        order: 4,
        instruction:
          'You do not need to flatten these out too thin because we want them to have the thickness of a flatbread.',
      },
      { order: 5, instruction: 'Heat a grill pan (or regular pan) over medium heat until hot.' },
      {
        order: 6,
        instruction:
          'Add your naan bread one at a time and let cook for 30-60 seconds per side. Exact time will vary based on how hot your pan is and how thick your naan bread is.',
      },
      {
        order: 7,
        instruction:
          'Continue for all 6 naan. I recommend cooking one at a time, that way you can easily assess when they are done.',
      },
    ],
    ingredients: [
      { quantity: '150 g', name: 'Self Rising Flour' },
      { quantity: '30 g', name: 'PEScience Select Multi-Purpose Protein' },
      {
        quantity: '180 g',
        name: 'Plain Nonfat Greek Yogurt',
      },
      {
        quantity: '1/4 tsp',
        name: 'Salt',
      },
      { quantity: '1/4 tsp', name: 'Garlic Powder' },
    ],
    imageUrl: './naan.png',
    nutrition: {
      serving: 500,
      calories: 120,
      fat: 0,
      carbs: 19,
      protein: 9,
    },
  },
  {
    id: 3,
    title: 'Protein Cinnamon Rolls',
    category: {
      id: 1,
      name: 'Dessert',
    },
    description: 'Comparable to a less sweeter version of Cinnabon!',
    directions: [
      {
        order: 1,
        instruction: 'Put yeast, flour, and protein powder in mixing bowl. Add honey if desired.',
      },
      {
        order: 2,
        instruction:
          'Fill up a large bowl or a pot with water and up water to 110 - 120 F (Sous vide or cooking thermometer).',
      },
      {
        order: 3,
        instruction:
          'Put 1/2 cup of the water in the mixing bowl. While mixing, add 2-3 water or milk until the mix becomes a dough.',
      },
      {
        order: 4,
        instruction: 'Let the dough rest up to an hour. Cover with towel and set aside (timer).',
      },
      {
        order: 5,
        instruction:
          'Preheat oven to 350. Prep a clean surface. Flour the surface, and knead the dough. Roll the dough out into a rectangle-ish shape (about 1/2 inch thick).',
      },
      {
        order: 6,
        instruction:
          'Melt butter into a small dish in microwave. Mix sugar and cinnamon together in another small container.',
      },
      {
        order: 7,
        instruction:
          'Spread the butter on the dough, then sprinkle the sugar and cinnamon mix uniformly. Swirl into a wet paste with back of a spoon.',
      },
      {
        order: 8,
        instruction: 'Roll the dough longways up into a rope (hotdog style).',
      },
      {
        order: 9,
        instruction: 'Cut the rolled up dough into 12 equal segments.',
      },
      {
        order: 10,
        instruction:
          'Spray aluminum foil on top of baking tray and place each segment. Bake for 11 minutes.',
      },
    ],

    ingredients: [
      { quantity: '200 g', name: 'Regular Unbleached Flour' },
      { quantity: '10 g', name: 'Instant Yeast' },
      {
        quantity: '2 rounded scoops (96 g)',
        name: 'Vanilla Protein Powder - Whey+Casein Blend',
      },
      {
        quantity: '15 g',
        name: 'Honey (Optional)',
      },
      {
        quantity: '1/2 cup + 2-3 tbsps',
        name: 'Water (110 F - 120 F). Tbsps may be water or milk if desired.',
      },
      {
        quantity: '1 tbsp',
        name: 'Ceylon cinnamon',
      },
      {
        quantity: '2 tbsps',
        name: 'Sweeter of choice (powdered erythritol, etc)',
      },
      {
        quantity: '2 tbsps (28 g)',
        name: 'Light Butter',
      },
    ],
    imageUrl: './cinnamon-roll.png',
    nutrition: {
      serving: 530,
      calories: 100,
      fat: 1,
      protein: 8,
      carbs: 13.5,
    },
  },
  {
    id: 4,
    title: 'Sweet Potato Protein Muffin',
    category: {
      id: 4,
      name: 'Dessert',
    },
    description: 'Moofins',
    directions: [
      {
        order: 1,
        instruction: 'Preheat oven to 375F. ',
      },
      {
        order: 2,
        instruction: 'Prepare a muffin tin with paper cups or silicone cups. ',
      },
      {
        order: 3,
        instruction:
          "Combine all ingredients (mix by hand don't food process it or it will get too runny) ",
      },
      {
        order: 4,
        instruction:
          'Divide mixture among 10-12 muffins. Bake for 20-25 minutes until toothpick inserted comes out clean.   ',
      },
      {
        order: 5,
        instruction: 'Let cool for 10 minutes.',
      },
    ],
    ingredients: [
      { quantity: '1 cup', name: 'mashed sweet potato' },
      { quantity: '1/3 cup', name: 'butter or butter alternative' },
      {
        quantity: '2 rounded scoops',
        name: 'Vanilla Protein Powder',
      },
      {
        quantity: '3 tbsps',
        name: 'All-purpose flour',
      },
      { quantity: '1/2 cup', name: 'Liquid Egg Whites' },
    ],
    imageUrl: './muffin.png',
    nutrition: {
      serving: 1,
      calories: 94,
      fat: 4,
      protein: 6.7,
    },
  },
];

export default recipesList;
