import React from 'react';
import { Link } from 'react-router-dom'

const RecipeCard = () => {
  const posts = [
    {
      title: `Black Bean Brownies`,
      description: `These black bean brownies are healthy brownies that do not taste healthy. They are rich in proteins, fibers and complex carbohydrates.`,
      textAlignment: `right`,
      markDown: `
      \nIngredients:\n
      •	1 can black beans, rinsed and drained\n
      •	2 large eggs\n
      •	1/2 cup cocoa powder\n
      •	3/4 cup granulated sugar\n
      •	1/2 teaspoon baking powder\n
      •	1/4 teaspoon salt\n
      •	1/4 cup vegetable oil\n
      •	1 teaspoon vanilla extract\n
      •	1/2 cup chocolate chips\n
      Instructions:\n
      1.	Preheat your oven to 350°F (175°C).\n
      2.	Grease an 8-inch (20 cm) square baking pan with non-stick spray or butter.\n
      3.	Add the black beans and eggs to a blender or food processor and blend until smooth.\n
      4.	Add the cocoa powder, sugar, baking powder, salt, vegetable oil, and vanilla extract to the blender and blend until fully combined and smooth.\n
      5.	Fold in the chocolate chips.\n
      6.	Pour the batter into the prepared baking pan and smooth it out with a spatula.\n
      7.	Bake for 25-30 minutes or until a toothpick inserted in the center comes out clean.\n
      8.	Let the brownies cool in the pan for 10 minutes before slicing and serving.\n
      Note: These black bean brownies are a healthier version of traditional brownies, as they are high in fiber and protein. You can also add other mix-ins to the batter, such as chopped nuts or dried fruit.\n
      `
    },
    {
      title: `Raw Chocolate Bark`,
      description: `Raw chocolate bark is a delicious and healthy snack that can satisfy your sweet tooth without the added sugar and preservatives found in store-bought chocolate. This recipe is simple to make and uses natural ingredients like cacao powder and coconut oil for a guilt-free treat.`,
      textAlignment: `left`,
      markDown: `
      Ingredients:
      •	1/2 cup coconut oil
      •	1/2 cup cacao powder
      •	2 tbsp maple syrup or honey
      •	1/4 tsp sea salt
      •	1/4 cup chopped nuts (optional)
      •	1/4 cup unsweetened shredded coconut (optional)
      Directions:
      1.	Melt the coconut oil in a double boiler or in a saucepan over low heat.
      2.	Add the cacao powder, maple syrup or honey, and sea salt to the melted coconut oil. Stir until all ingredients are combined.
      3.	Line a baking sheet with parchment paper.
      4.	Pour the chocolate mixture onto the parchment paper and use a spatula to spread it out into a thin layer.
      5.	Sprinkle the chopped nuts and shredded coconut over the chocolate mixture, if desired.
      6.	Place the baking sheet in the freezer for 30 minutes or until the chocolate is firm.
      7.	Once the chocolate has hardened, remove it from the freezer and break it into small pieces.
      8.	Store the chocolate bark in an airtight container in the freezer or refrigerator.
      This raw chocolate bark is a healthy and delicious snack that can be enjoyed any time of day. The combination of coconut oil and cacao powder provides a rich chocolate flavor while the nuts and shredded coconut add crunch and texture. Feel free to experiment with different toppings like dried fruit or seeds for a personalized touch. Enjoy!
      `
    },
    {
      title: `Apple Cinnamon Protein Muffins`,
      description: `If you're looking for a delicious and healthy snack to satisfy your sweet tooth, these apple cinnamon protein muffins are the perfect choice! They're packed with protein, fiber, and flavor, making them a great option for a post-workout snack or a midday pick-me-up.`,
      textAlignment: `right`,
      markDown: `
      Ingredients:
      •	1 cup of oat flour
      •	1/2 cup of vanilla whey protein powder
      •	1/4 cup of almond flour
      •	1/4 cup of coconut flour
      •	1/2 teaspoon of baking powder
      •	1/2 teaspoon of baking soda
      •	1/2 teaspoon of salt
      •	2 teaspoons of ground cinnamon
      •	2 eggs
      •	1/4 cup of unsweetened applesauce
      •	1/4 cup of maple syrup
      •	1/4 cup of almond milk
      •	1/4 cup of coconut oil, melted
      •	1 teaspoon of vanilla extract
      •	1 apple, peeled and chopped
      Directions:
      1.	Preheat your oven to 350°F (180°C) and line a muffin tin with paper liners.
      2.	In a large bowl, mix together the oat flour, vanilla whey protein powder, almond flour, coconut flour, baking powder, baking soda, salt, and cinnamon.
      3.	In a separate bowl, whisk together the eggs, unsweetened applesauce, maple syrup, almond milk, melted coconut oil, and vanilla extract.
      4.	Add the wet ingredients to the dry ingredients and mix until well combined.
      5.	Fold in the chopped apple.
      6.	Spoon the batter into the muffin tin, filling each cup about 3/4 full.
      7.	Bake for 20-25 minutes or until a toothpick inserted into the center comes out clean.
      8.	Let the muffins cool for 5 minutes in the tin, then transfer them to a wire rack to cool completely.
      These apple cinnamon protein muffins are a delicious and nutritious snack that will satisfy your cravings while also providing a boost of protein and fiber. They're perfect for meal prep and can be stored in an airtight container in the fridge for up to 5 days or in the freezer for up to 3 months. Enjoy them as a quick and easy breakfast or snack on-the-go!
      `
    },
    {
      title: `Dairy Free Matcha Latte`,
      description: `If you're looking for a dairy-free alternative to a classic matcha latte, try making it with cashew nut milk! Cashew nut milk is creamy and nutty, which pairs perfectly with the earthy flavor of matcha powder. This recipe is easy to make and can be enjoyed hot or iced.`,
      textAlignment: `left`,
      markDown: `
      Ingredients:
      •	1 tsp matcha powder
      •	1 cup cashew nut milk
      •	1 tsp honey or maple syrup (optional)
      Directions:
      1.	In a small saucepan, heat the cashew nut milk over medium heat until it starts to steam. Do not boil.
      2.	While the cashew nut milk is heating up, sift the matcha powder into a small bowl.
      3.	Add a splash of hot water to the matcha powder and whisk vigorously with a bamboo whisk or a frother until it is smooth and frothy.
      4.	Once the cashew nut milk is hot, pour it into a blender and add the matcha mixture.
      5.	Blend on high speed for 30 seconds or until the latte is smooth and frothy.
      6.	If desired, add honey or maple syrup to sweeten the latte.
      7.	Pour the latte into a mug and enjoy hot or pour over ice for an iced latte.
      This dairy-free cashew nut milk matcha latte is a delicious and healthy alternative to a traditional matcha latte. The cashew nut milk adds a creamy and nutty flavor that complements the earthy matcha powder. Enjoy it as a morning pick-me-up or as a comforting drink any time of day!
      `
    },
    {
      title: `Healthy Fried Rice`,
      description: `Fried rice is a delicious and filling dish that's perfect for a quick and easy dinner or meal prep option. However, traditional fried rice can be high in calories and sodium. This healthy fried rice recipe is made with brown rice, lean protein, and plenty of veggies for a nutritious and satisfying meal.`,
      textAlignment: `right`,
      markDown: `
      Ingredients:
      •	2 cups cooked brown rice, chilled overnight
      •	1 tbsp olive oil
      •	2 eggs, beaten
      •	1 small onion, chopped
      •	1 red bell pepper, chopped
      •	2 cloves garlic, minced
      •	1/2 cup frozen peas
      •	2 carrots, peeled and chopped
      •	1/2 cup sliced mushrooms
      •	1/4 cup low-sodium soy sauce
      •	1 tsp sesame oil
      •	1/2 tsp ground ginger
      •	1/4 tsp black pepper
      •	2 green onions, sliced
      Directions:
      1.	Heat olive oil in a large skillet over medium heat. Add beaten eggs and scramble until cooked through. Remove from the pan and set aside.
      2.	Add onion, red bell pepper, and garlic to the same skillet and sauté until vegetables are softened.
      3.	Add frozen peas, carrots, and mushrooms and continue to cook until the veggies are tender.
      4.	Add the chilled brown rice to the skillet and stir to combine.
      5.	In a small bowl, whisk together soy sauce, sesame oil, ground ginger, and black pepper.
      6.	Pour the soy sauce mixture over the rice and veggie mixture and stir to combine.
      7.	Add the scrambled eggs to the skillet and stir to combine.
      8.	Cook for an additional 2-3 minutes or until the rice is heated through.
      9.	Top with sliced green onions before serving.
      This healthy fried rice recipe is easy to customize with your favorite veggies and protein sources. Plus, using brown rice instead of white rice adds fiber and nutrients to your meal. Enjoy this dish as a main course or as a side dish to your favorite protein source.
      `
    },
    {
      title: `Healthy Ice Cream Sandwich`,
      description: `Who doesn’t love a good ice cream sandwich? They’re the perfect treat for a hot summer day, but traditional ice cream sandwiches can be high in sugar, fat, and calories. Here’s a healthier version that’s just as delicious and satisfying, but with fewer calories and more nutrients.`,
      textAlignment: `left`,
      markDown: `
      Ingredients:
      •	1 cup of rolled oats
      •	1 cup of almond flour
      •	1/2 cup of unsweetened applesauce
      •	1/4 cup of honey or maple syrup
      •	1 teaspoon of vanilla extract
      •	1/2 teaspoon of baking soda
      •	1/4 teaspoon of salt
      •	1/2 cup of non-fat plain Greek yogurt
      •	1/2 cup of frozen mixed berries
      •	2 tablespoons of honey or maple syrup
      Directions:
      1.	Preheat your oven to 350°F (180°C) and line a baking sheet with parchment paper.
      2.	In a large bowl, mix together the rolled oats, almond flour, baking soda, and salt.
      3.	In a separate bowl, mix together the unsweetened applesauce, honey or maple syrup, and vanilla extract. Add the wet ingredients to the dry ingredients and mix until well combined.
      4.	Scoop the dough onto the lined baking sheet and flatten into 8 equal-sized circles.
      5.	Bake for 12-15 minutes or until lightly golden. Let the cookies cool completely.
      6.	In a blender, mix together the frozen mixed berries and 2 tablespoons of honey or maple syrup until smooth.
      7.	Take 1/4 cup of non-fat plain Greek yogurt and mix with 1/4 cup of the blended mixed berries.
      8.	Take one cookie and spread a layer of the mixed berry and yogurt mixture on top. Place another cookie on top and gently press down to create a sandwich. Repeat with the remaining cookies.
      9.	Place the ice cream sandwiches in the freezer for at least 30 minutes to firm up.
      These healthy ice cream sandwiches are a great way to satisfy your sweet tooth without all the added sugars and fats of traditional ice cream sandwiches. The oats and almond flour provide fiber and healthy fats, while the Greek yogurt adds protein and the mixed berries offer vitamins and antioxidants. Enjoy this guilt-free treat on a hot summer day or anytime you need a sweet snack!
      `
    },
    {
      title: `Homemade, Dairy Free Chai Tea`,
      description: `Chai tea is a flavorful and aromatic tea that originates from India. It typically contains black tea, milk, and a variety of spices such as cinnamon, ginger, cardamom, and cloves. However, if you are lactose intolerant or following a dairy-free diet, you can still enjoy the delicious taste of chai tea by making it with non-dairy milk. Here’s a simple recipe for homemade dairy-free chai tea:`,
      textAlignment: `right`,
      markDown: `
      Ingredients:
      •	2 cups of water
      •	2 black tea bags
      •	1 cinnamon stick
      •	4 cardamom pods, crushed
      •	2 whole cloves
      •	1-inch piece of fresh ginger, peeled and sliced
      •	2 tablespoons of honey or maple syrup
      •	2 cups of unsweetened almond milk
      •	Ground cinnamon, for garnish (optional)
      Directions:
      1.	In a medium-sized saucepan, bring the water, cinnamon stick, cardamom pods, cloves, and ginger to a boil.
      2.	Reduce the heat to low and let the mixture simmer for 5 minutes.
      3.	Remove the saucepan from the heat and add the black tea bags. Let the tea steep for 5 minutes.
      4.	Remove the tea bags and strain the mixture through a fine-mesh sieve into a large measuring cup.
      5.	Add the honey or maple syrup to the tea and stir to combine.
      6.	In a separate saucepan, heat the almond milk over medium heat until it is warm but not boiling.
      7.	Divide the chai tea mixture among 4 cups and top each cup with the warmed almond milk.
      8.	Sprinkle ground cinnamon on top of each cup, if desired.
      This homemade dairy-free chai tea is a delicious and comforting beverage that can be enjoyed any time of the day. It’s also a great option for those who are lactose intolerant or following a dairy-free diet. Experiment with different spices and sweeteners to find the perfect combination for your taste buds!
      `
    },
    {
      title: `Healthy Butternut Squash Soup`,
      description: `Butternut squash soup is a healthy and comforting dish that's perfect for a cozy night in. This recipe is made with natural ingredients like butternut squash, carrots, and coconut milk for a creamy and flavorful soup that's packed with nutrients.`,
      textAlignment: `left`,
      markDown: `
      Ingredients:
      •	1 medium butternut squash, peeled and diced
      •	2 carrots, peeled and chopped
      •	1 small onion, chopped
      •	2 cloves garlic, minced
      •	4 cups vegetable broth
      •	1 cup coconut milk
      •	1/2 tsp ground cinnamon
      •	1/2 tsp ground ginger
      •	1/4 tsp ground nutmeg
      •	1 tbsp olive oil
      •	Salt and pepper to taste
      •	Fresh parsley or cilantro, chopped (optional)
      Directions:
      1.	In a large pot, heat the olive oil over medium heat. Add the onion and garlic and sauté until the onion is translucent.
      2.	Add the diced butternut squash and chopped carrots to the pot and stir to combine.
      3.	Pour the vegetable broth into the pot and bring to a boil.
      4.	Reduce heat to low and let the soup simmer until the vegetables are tender, about 20-25 minutes.
      5.	Using an immersion blender or a regular blender, puree the soup until it is smooth and creamy.
      6.	Add the coconut milk, ground cinnamon, ground ginger, and ground nutmeg to the soup and stir until well combined.
      7.	Season with salt and pepper to taste.
      8.	Serve hot and garnish with fresh parsley or cilantro, if desired.
      This healthy butternut squash soup is easy to make and is perfect for a comforting and nutritious meal. The combination of butternut squash, carrots, and coconut milk creates a rich and creamy texture while the spices add warmth and depth of flavor. Enjoy this soup as a main course or as a side dish to your favorite protein source.
      `
    },
    {
      title: `Frozen Strawberry and Chocolate Pops`,
      description: `A delicious frozen treat combining whole strawberries, Greek yogurt, and dark chocolate in each sweet, healthy pop.`,
      textAlignment: `right`,
      markDown: `
      Ingredients:
      •	1 pound fresh strawberries, washed and hulled
      •	1/2 cup plain Greek yogurt
      •	1 tablespoon honey or maple syrup
      •	1/2 teaspoon vanilla extract
      •	1/4 cup dark chocolate chips
      •	1 teaspoon coconut oil
      Instructions:
      1.	In a blender, puree the strawberries until smooth.
      2.	In a separate bowl, whisk together the Greek yogurt, honey or maple syrup, and vanilla extract until well combined.
      3.	Pour the strawberry puree into the yogurt mixture and stir until fully incorporated.
      4.	Pour the mixture into popsicle molds, filling them about 3/4 of the way full.
      5.	Insert popsicle sticks into the molds and freeze for at least 2 hours, or until completely frozen.
      6.	Once the popsicles are frozen, melt the chocolate chips and coconut oil together in a double boiler or in the microwave, stirring frequently until smooth.
      7.	Remove the popsicles from the molds and place them on a piece of parchment paper.
      8.	Drizzle the melted chocolate over the popsicles and place them back in the freezer for a few minutes to harden.
      9.	Serve and enjoy!
      Note: These frozen strawberry and chocolate pops are a delicious and healthy treat that can be enjoyed anytime. You can also experiment with different flavors and toppings, such as chopped nuts or shredded coconut.
      `
    },
    {
      title: `Tofu Scramble`,
      description: `You have never had tofu scramble like this before! With a creamy texture and eggy flavor, it will remind you of real scrambled eggs!`,
      textAlignment: `left`,
      markDown: `
      Ingredients:
      •	1 block firm tofu
      •	1 tablespoon olive oil
      •	1/2 onion, chopped
      •	1 red bell pepper, chopped
      •	1 teaspoon turmeric
      •	1/2 teaspoon garlic powder
      •	1/2 teaspoon onion powder
      •	Salt and pepper, to taste
      •	Optional: Spinach, mushrooms, nutritional yeast, hot sauce
      Instructions:
      1.	Remove the tofu from the packaging and press it between paper towels or a clean kitchen towel to remove any excess water. Crumble the tofu into small pieces.
      2.	Heat the olive oil in a large skillet over medium heat.
      3.	Add the chopped onion and red bell pepper to the skillet and sauté for 2-3 minutes, until the vegetables are tender.
      4.	Add the crumbled tofu to the skillet and stir to combine with the vegetables.
      5.	Add the turmeric, garlic powder, onion powder, salt, and pepper to the skillet and stir until the tofu is evenly coated in the spices.
      6.	Cook for an additional 5-7 minutes, stirring occasionally, until the tofu is heated through and slightly crispy.
      7.	If desired, add in some spinach, mushrooms, nutritional yeast, or hot sauce to the skillet and stir to combine.
      8.	Serve hot and enjoy!
      Note: Tofu scramble can be served on its own or with toast, avocado, salsa, or any other toppings you like. It's also a great meal prep option for a quick and easy breakfast or lunch throughout the week.
      `
    },
  ]

  // const getAssetSrc = (name) => {
  //   return new URL(`../../assets/recipeImages/${name}.jpg`, import.meta.url).href
  // };
  
  return (
    <div>
      {posts.map((post, i) => (
        <Link to="recipe" state={{recipeTitle: post.title, markdown: post.markDown}}
          className='blog-link' key={i}
        >
          <article className={post.textAlignment === 'left' ? 'blog-thumbnail left' : 'blog-thumbnail'}>
            <section>
              <h1 className='title-two blog'>{post.title}</h1>
              <p className='value-prop-summary'>{post.description}</p>
              <p className='value-prop-summary learn-more'>Get the recipe!</p>
            </section>
            <img src={require(`../../assets/recipeImages/${i}.jpg`)} alt={post.title} />
          </article>
        </Link>
      ))}
    </div>
  )
}

export default RecipeCard;