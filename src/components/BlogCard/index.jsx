import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'

const BlogCard = () => {
  const posts = [
    {
      title: `Staying healthy while traveling`,
      description: `I find traveling to be an exciting and adventurous experience, but it can also be a challenge to maintain a healthy lifestyle while on the go. Whether you're traveling for business or pleasure, it's important to prioritize your health and well-being.`,
      textAlignment: `right`,
      markDown: `
      I find traveling to be an exciting and adventurous experience, but it can also be a challenge to maintain a healthy lifestyle while on the go. Whether you're traveling for business or pleasure, it's important to prioritize your health and well-being. Here are a few of my tips for staying healthy while traveling:\n
      1.	Stay hydrated\nIt's easy to become dehydrated while traveling, especially if you're flying or in a dry climate. Be sure to drink plenty of water and avoid sugary or alcoholic drinks that can dehydrate you.\n
      2.	Pack healthy snacks\nInstead of relying on fast food or vending machine snacks, pack healthy snacks like fresh fruit, nuts, or protein bars. This will help you avoid unhealthy options and keep your energy levels up.\n
      3.	Get enough sleep\nLack of sleep can impact your mood, immune system, and overall health. Try to get enough rest and establish a sleep routine even when traveling.\n
      4.	Exercise\nStaying active can help you feel more energized and improve your mood. Try to fit in some exercise while traveling, such as taking a walk or using the hotel gym.\n
      5.	Plan your meals\nResearch healthy food options at your destination and plan your meals ahead of time. This can help you avoid unhealthy options and make healthier choices while dining out.\n
      6.	Stay mindful\nTraveling can be stressful and overwhelming, which can lead to unhealthy habits. Try to stay mindful and practice self-care activities like meditation or yoga to help reduce stress and stay balanced.\n
      7.	Practice good hygiene\nThis is especially important during the COVID-19 pandemic. Be sure to wash your hands frequently, wear a mask, and practice social distancing when necessary.
      By prioritizing my health and well-being while traveling, I can enjoy my trip to the fullest and come back feeling refreshed and energized!\n

      `
    },
    {
      title: `The power of essential oils on the gut`,
      description: `Essential oils have been a staple in my daily routine due to their therapeutic properties, especially for supporting digestive health. The gut plays a crucial role in our overall well-being, and imbalances can greatly affect our health. By incorporating essential oils into your daily routine, you can enhance gut health and promote overall wellness.`,
      textAlignment: `left`,
      markDown: `
      I have been a faithful user of essential oils for their therapeutic properties, including their ability to support digestive health. The gut is an essential part of our body's overall health, and any imbalances or disruptions can have a significant impact on our wellbeing. Incorporating essential oils into your daily routine can help to improve gut health and promote overall wellness. Here are some of the ways essential oils can benefit your gut health:\n
      1.	Reducing inflammation\nEssential oils such as peppermint, ginger, and fennel have anti-inflammatory properties that can help to reduce inflammation in the gut. Inflammation in the gut can lead to digestive issues such as bloating, gas, and constipation.\n
      2.	Improving digestion\nEssential oils such as peppermint, ginger, and lemon can help to improve digestion by increasing the production of digestive enzymes and reducing bloating and gas. These oils can also help to soothe an upset stomach.
      3.	Balancing gut bacteria\nEssential oils such as oregano and thyme have antimicrobial properties that can help to balance the bacteria in the gut. An imbalance in gut bacteria can lead to digestive issues and other health problems.\n
      4.	Reducing stress\nStress can have a significant impact on gut health by disrupting the balance of gut bacteria and causing inflammation. Essential oils such as lavender and chamomile can help to reduce stress and promote relaxation, which can have a positive impact on gut health.\n
      5.	Supporting the immune system\nEssential oils such as tea tree and eucalyptus have immune-boosting properties that can help to support the immune system and promote overall health. A healthy immune system is essential for maintaining gut health.\n
      It's essential to choose high-quality oils and use them safely. Essential oils can be used topically, aromatically, or ingested, but it's important to follow the recommended guidelines for each oil. Some oils may not be safe for children, pregnant or nursing women, or those with certain medical conditions. By reducing inflammation, improving digestion, balancing gut bacteria, reducing stress, and supporting the immune system, essential oils have had a truly positive impact on my health. 

      `
    },
    {
      title: `Listen up smoothie lovers ...`,
      description: `Smoothies are a great way for me to get my daily dose of fruits and vegetables, but not all smoothies are created equal. After comparing labels, I discovered that smoothies can be loaded with sugar and calories, which can sabotage your health goals.`,
      textAlignment: `right`,
      markDown: `
      Smoothies are a great way for me to get my daily dose of fruits and vegetables, but not all smoothies are created equal. After comparing labels, I discovered that smoothies can be loaded with sugar and calories, which can sabotage your health goals. Here are my tips for building a healthier smoothie:\n
      1.	Choose a healthy base\nThe base of your smoothie sets the foundation for the rest of the ingredients. Instead of using sugary fruit juices or sweetened yogurt, opt for a healthier base like unsweetened almond milk, coconut water, or plain Greek yogurt. These options are low in sugar and high in protein and healthy fats.
      2.	Add greens\nGreens are a great way to boost the nutritional value of your smoothie. Spinach, kale, and collard greens are all packed with vitamins and minerals. They're also relatively mild in flavor, so you can add a lot of greens to your smoothie without changing the taste. Aim for at least one cup of greens per smoothie.
      3.	Use whole fruits and vegetables\nUsing whole fruits and vegetables instead of juice or pre-packaged frozen fruit is a healthier option. Whole fruits and vegetables are higher in fiber, which can help regulate digestion and keep you feeling full. They're also lower in sugar than juice or pre-packaged fruit. Aim for a variety of colorful fruits and vegetables to maximize the nutritional benefits.
      4.	Add protein\nProtein is essential for building and repairing muscles, and it also helps keep you feeling full and satisfied. Greek yogurt, nut butters, and protein powder are all great options that can help boost the protein content of your smoothie. Be mindful of the amount of protein powder you use, as some brands can contain added sugars and other additives.\n
      5.	Be mindful of added sugars\nFruit is naturally sweet, so there's no need to add extra sugar to your smoothie. Avoid using sweetened yogurt, juice, or flavored syrups in your smoothie. Instead, use natural sweeteners like dates, honey, or pure maple syrup. Be mindful of the portion size, as even natural sweeteners can add up in calories.\n
      It is all about choosing the right ingredients and being mindful of added sugars and portion sizes. By doing this, you'll have a delicious and nutritious smoothie that supports your health goals.\n
      `
    },
    {
      title: `Loving yourself`,
      description: `Self-love is a crucial component of overall wellbeing, yet it's something that many of us struggle with. Society often places a lot of pressure on us to look, act, and be a certain way, which can lead to feelings of inadequacy and self-doubt. However, practicing self-love is essential for living a fulfilling and happy life. `,
      textAlignment: `left`,
      markDown: `
      Self-love is a crucial component of overall wellbeing, yet it's something that many of us struggle with. Society often places a lot of pressure on us to look, act, and be a certain way, which can lead to feelings of inadequacy and self-doubt. However, practicing self-love is essential for living a fulfilling and happy life. Here are some reasons why self-love is so important:\n
      1.	Increased self-esteem\nWhen we practice self-love, we begin to see ourselves in a more positive light. We start to appreciate our strengths and accept our flaws, which can lead to increased self-esteem. This, in turn, can help us to be more confident and assertive in our lives.\n
      2.	Improved mental health\nWhen we love ourselves, we're more likely to take care of our mental health. This means taking the time to practice self-care, such as meditation, journaling, or talking to a therapist. By prioritizing our mental health, we can reduce stress and anxiety and feel more balanced and centered.\n
      3.	Better relationships\nWhen we love ourselves, we're more likely to have healthy, positive relationships with others. This is because we're able to set boundaries, communicate our needs, and treat ourselves with kindness and respect. When we love ourselves, we attract people who treat us with the same level of love and respect.\n
      4.	Increased productivity\nWhen we practice self-love, we're more likely to be productive and achieve our goals. This is because we have a positive mindset and believe in our ability to succeed. When we love ourselves, we're more likely to take risks and try new things, which can lead to greater success and fulfillment.\n
      5.	Greater sense of purpose\nWhen we love ourselves, we have a greater sense of purpose and direction in our lives. We know what we want and are more likely to pursue it with passion and determination. This can lead to a greater sense of fulfillment and satisfaction in our lives.
      So, take the time to prioritize yourself and practice self-love every day. You deserve it!\n
      `
    },
    {
      title: `Body scrub, body love`,
      description: `Exfoliation is essential for healthy skin. While store-bought body scrubs can be expensive and contain harsh chemicals, you can easily make your own gentle scrub at home using natural ingredients.`,
      textAlignment: `right`,
      markDown: `
      When it comes to taking care of our skin, exfoliation is an important step in any skincare routine. Exfoliating helps to remove dead skin cells and promote healthy cell turnover, leaving our skin smooth, glowing, and soft to the touch. However, store-bought body scrubs can be expensive and may contain harsh chemicals that can irritate the skin. The good news is that you can easily make your own body scrub at home using natural ingredients that are gentle on the skin. Here’s a simple recipe for a homemade body scrub that you can try:\n
      Ingredients:\n
      •	1 cup of sugar (white or brown)\n
      •	1/2 cup of coconut oil\n
      •	10-15 drops of essential oil (optional)\n
      Directions:\n
       1.	In a bowl, mix together the sugar and coconut oil until well combined. If the coconut oil is too solid, you can microwave it for a few seconds until it becomes soft and easy to mix.\n
       2.	Add in your essential oil of choice (if using) and stir until well combined.\n
       3.	Transfer the mixture into a jar or container with a lid. Your homemade body scrub is now ready to use!\n
      To use your homemade body scrub, simply apply a small amount to damp skin and gently massage in a circular motion. Rinse off with warm water and pat your skin dry with a towel. You can use this body scrub once or twice a week to help exfoliate and soften your skin.\n
      Why this recipe works:\n
      •	Sugar is a natural exfoliant that helps to remove dead skin cells and promote cell turnover.\n
      •	Coconut oil is a moisturizing agent that helps to nourish and hydrate the skin.\n
      •	Essential oils can be added for a relaxing or invigorating aroma, depending on your preference.\n
      `
    },
    {
      title: `Making water interesting`,
      description: `Drinking enough water is essential for good health, but it can be difficult for me to stay motivated when plain water becomes boring. Here is how I make water more interesting and enjoyable to drink`,
      textAlignment: `left`,
      markDown: `
      Drinking enough water is essential for good health, but it can be difficult for me to stay motivated when plain water becomes boring. Here some tips I have used for making water more interesting and enjoyable to drink:\n
      1.	Add some flavor\nInfuse your water with fresh fruits, vegetables, and herbs to add a burst of flavor. Try adding lemon, lime, cucumber, mint, or berries to your water for a refreshing taste.\n
      2.	Make it sparkling\nIf you enjoy fizzy drinks, try sparkling water to add some excitement to your hydration routine. You can also add fresh fruit or a splash of juice to sparkling water for a fruity and bubbly drink.\n
      3.	Drink herbal tea\nHerbal teas are a great way to hydrate and add some variety to your water intake. Choose from a variety of flavors like peppermint, ginger, or chamomile to satisfy your taste buds.\n
      4.	Use a fun water bottle\nInvesting in a fun and colorful water bottle can motivate you to drink more water throughout the day. Look for water bottles with motivational quotes or designs that inspire you to stay hydrated.\n
      5.	Try infused ice cubes\nFreeze small pieces of fruit or herbs in ice cube trays and add them to your water for a burst of flavor. This is a great way to use up leftover herbs or fruit that might otherwise go to waste.\n
      6.	Make water-based smoothies\nUse water as the base for your smoothies instead of milk or juice. This will help you stay hydrated while also adding some natural sweetness and flavor to your drink.\n
      Remember, drinking enough water is essential for good health, so make it a priority to stay hydrated every day.\n

      `
    },
    {
      title: `The power of sleep`,
      description: `Sleep is a fundamental aspect of our lives, yet it's often the first thing we sacrifice in our busy schedules. I often think that staying up late to finish a project or waking up early to exercise is the best use of my time, but in reality, getting enough quality sleep is crucial for our overall health and well-being.`,
      textAlignment: `right`,
      markDown: `
      Sleep is a fundamental aspect of our lives, yet it's often the first thing we sacrifice in our busy schedules. I often think that staying up late to finish a project or waking up early to exercise is the best use of my time, but in reality, getting enough quality sleep is crucial for our overall health and well-being.\n
      The benefits of sleep are numerous, ranging from physical to mental health. Here are some of the reasons why sleep is so important:\n
      1.	Physical health\nSleep plays a vital role in the repair and restoration of our body. During sleep, our body repairs damaged cells and tissues, boosts our immune system, and releases hormones that regulate growth and appetite. Lack of sleep has been linked to a range of health problems, including obesity, diabetes, heart disease, and even some forms of cancer.\n
      2.	Mental health\nGetting enough sleep is essential for our mental well-being. Lack of sleep can lead to irritability, mood swings, anxiety, and depression. A good night's sleep can help us feel more alert, focused, and productive, improving our overall mood and cognitive abilities.\n
      3.	Memory consolidation\nSleep is essential for consolidating memories and learning new information. During sleep, our brain processes and stores the information we have learned during the day, making it easier for us to recall it later. This is why it's essential to get enough sleep, especially when studying or learning new skills.\n
      4.	Performance\nSleep is crucial for optimal performance, both physically and mentally. Athletes who get enough sleep have been shown to perform better, while lack of sleep can impair reaction time, decision-making abilities, and overall performance in any task.\n
      Given the many benefits of sleep, it's essential to prioritize it in our daily lives. Here are some tips to help you get a better night's sleep:\n
      1.	Stick to a regular sleep schedule\nTry to go to bed and wake up at the same time every day, even on weekends.\n
      2.	Create a relaxing bedtime routine\nDevelop a calming routine before bed, such as taking a warm bath, reading a book, or practicing relaxation techniques like meditation or deep breathing.\n
      3.	Create a sleep-conducive environment\nMake sure your bedroom is cool, quiet, and dark, and invest in a comfortable mattress and pillows.\n
      4.	Avoid stimulating activities before bed\nAvoid stimulating activities like watching TV, using electronic devices, or exercising before bed, as these can interfere with your ability to fall asleep.\n
      By prioritizing sleep and making it a priority in our daily lives, we can reap the many benefits that come with getting enough quality sleep.\n
      `
    },
    {
      title: `The benefits of eating breakfast`,
      description: `Breakfast, often considered the most important and delicious meal of the day, has sparked a continuous debate. While some emphasize the significance of starting the day with energy and focus, others advocate for skipping breakfast as a means to enhance weight loss and overall health (hello, intermittent fasting!).`,
      textAlignment: `left`,
      markDown: `
      Breakfast has been referred to as the most important meal of the day. For me, it is the yummiest. However, there has been an ongoing debate on whether one should eat breakfast or skip it altogether. Some argue that breakfast is crucial for starting the day with energy and focus, while others believe that skipping breakfast is a viable way to lose weight and improve overall health (Hello intermittent fasting!)\n
      So, why eat breakfast?\n
      Eating breakfast can provide many benefits. First and foremost, it can help jumpstart your metabolism, providing you with the energy you need to get through the day. Additionally, eating breakfast can help stabilize blood sugar levels, which can prevent cravings and help you make healthier food choices throughout the day. Eating breakfast has also been linked to improved cognitive function, which can enhance your ability to focus and be productive.\n
      What to eat for breakfast?\n
      While it's essential to eat breakfast, what you eat for breakfast is just as crucial. A healthy breakfast should include a balance of protein, fiber, and healthy fats. Some healthy breakfast options include whole-grain toast with avocado, a smoothie with spinach, berries, and Greek yogurt, or eggs with vegetables and whole-grain toast. Avoid sugary cereals or breakfast pastries, as these options can cause a quick spike in blood sugar levels, leading to a crash later in the day.\n
      Why skip breakfast?\n
      On the other hand, some experts argue that skipping breakfast can be beneficial. When you skip breakfast, your body will use stored fat as energy, which can lead to weight loss. Additionally, skipping breakfast can give your digestive system a break and reduce inflammation, which can be beneficial for those with gastrointestinal issues. It may also save you time and money.\n
      When to skip breakfast?\n
      However, it's essential to note that skipping breakfast is not for everyone. If you have a medical condition that requires regular meals, such as diabetes, skipping breakfast may not be the best choice for you. Additionally, if you tend to overeat later in the day or have trouble controlling your cravings, skipping breakfast may not be the best choice for you. It's crucial to listen to your body and determine what works best for you.\n
      Whether or not to eat breakfast is a personal choice that depends on your individual needs and preferences. Eating breakfast can provide numerous benefits I listed above. However, it's crucial to make healthy breakfast choices and listen to your body to determine what works best for you.\n
      `
    },
    {
      title: `The beneficial side to our coffee shop visits`,
      description: `For many people, myself included, coffee is an essential part of our daily routine. It delighted me to discover that drinking coffee has numerous health benefits making it a healthy addition to my daily routine.`,
      textAlignment: `right`,
      markDown: `
      For many people, myself included, coffee is an essential part of our daily routine. It delighted me to discover that drinking coffee has numerous health benefits making it a healthy addition to my daily routine.\n
      1.	Improved Energy and Mental Alertness\n
      One of the primary benefits of drinking coffee is its ability to improve energy levels and mental alertness. The caffeine in coffee acts as a stimulant, helping to increase wakefulness, reduce fatigue, and improve overall cognitive function. Studies have shown that consuming caffeine can also enhance mood, reaction time, and memory, making it an ideal beverage for those who need a quick pick-me-up.\n
      2.	Reduced Risk of Type 2 Diabetes\nType 2 diabetes is a chronic condition that affects millions of people worldwide. Research has shown that drinking coffee may reduce the risk of developing type 2 diabetes. This is due to the fact that coffee contains compounds that can help regulate blood sugar levels and improve insulin sensitivity. Studies have found that regular coffee consumption may lower the risk of developing type 2 diabetes by up to 30%.\n
      3.	Lowered Risk of Heart Disease\nHeart disease is the leading cause of death worldwide, and research has shown that drinking coffee may help reduce the risk of developing this condition. Studies have found that regular coffee consumption can lower the risk of heart disease by up to 20%. This is thought to be due to the antioxidants found in coffee, which can help reduce inflammation and improve cardiovascular health.\n
      4.	Improved Physical Performance\nCaffeine, the primary active ingredient in coffee, is a natural stimulant that can help improve physical performance. Studies have shown that caffeine can help increase endurance, reduce fatigue, and improve overall athletic performance. This makes coffee an ideal beverage for athletes and individuals who engage in regular physical activity.\n
      5.	Reduced Risk of Alzheimer's Disease and Dementia\nAlzheimer's disease and dementia are two conditions that affect millions of people worldwide. Research has shown that drinking coffee may help reduce the risk of developing these conditions. Studies have found that regular coffee consumption can reduce the risk of Alzheimer's disease and dementia by up to 65%. This is thought to be due to the fact that coffee contains compounds that can help protect the brain from damage and improve cognitive function.\n
      Aside from all of the benefits listed above, it's important to consume coffee in moderation and be mindful of its potential side effects, such as increased anxiety and insomnia. As with any dietary choice, it's important to listen to your body and make decisions that work best for you.\n
      `
    },
    {
      title: `Oh, that dreaded vacation weight gain ...`,
      description: `Vacation is a time to relax and enjoy myself. But for me, it can also be a challenge to maintain a healthy lifestyle. I often struggle to avoid gaining weight while on vacation due to the abundance of tempting food and drink options. `,
      textAlignment: `left`,
      markDown: `
      Vacation is a time to relax and enjoy myself. But for me, it can also be a challenge to maintain a healthy lifestyle. I often struggle to avoid gaining weight while on vacation due to the abundance of tempting food and drink options. Here are some of my tips to help you enjoy your vacation without packing on the pounds:\n
      1.	Stay Active\nPhysical activity is a great way to burn calories and stay healthy while on vacation. Whether it's taking a morning walk on the beach, swimming in the pool, or renting bikes to explore the area, finding ways to stay active can help counterbalance any indulgences you may have.\n
      2.	Plan Ahead\nIf you're staying in a hotel, look for options with a kitchenette so you can prepare healthy meals and snacks. This will also help you save money on eating out. You can also research healthy restaurants in the area and plan your meals ahead of time.\n
      3.	Be Mindful of Your Portions\nPortion sizes can be larger while on vacation, so be mindful of how much you're eating. Consider sharing meals or taking leftovers back to your room for another meal. You can also use smaller plates to help control portions.\n
      4.	Stay Hydrated\nDrinking enough water is essential for overall health and can also help prevent overeating. Carry a reusable water bottle with you and aim to drink at least 8 cups of water a day. Avoid sugary drinks, which can add extra calories.
      5.	Indulge in Moderation\nVacation is a time to indulge and enjoy new food and drinks, but it's important to do so in moderation. Choose your treats wisely and savor them mindfully, focusing on the taste and texture of each bite. Avoid overindulging in high-calorie foods and drinks.\n
      6.	Get Enough Sleep\nGetting enough sleep is essential for overall health and can also help prevent overeating. Aim to get 7-8 hours of sleep each night to help regulate hormones that control appetite and metabolism.\n
      By following these tips, you can have a fun and healthy vacation.\n
      `
    },
    {
      title: `Spring clean your body, not just your home`,
      description: `Spring is a wonderful season that invites us to renew and refresh, not only our homes and surroundings but also our bodies. After a long winter, our bodies may be in need of a revitalizing boost. So, let's embrace the spirit of spring and embark on a journey to cleanse and rejuvenate ourselves from the inside out.`,
      textAlignment: `right`,
      markDown: `
      Spring is a great time of year to renew and refresh. For me, this applies not just to my home and surroundings but also to my body. Here are some ways to spring clean your body and get a fresh start on your health:\n
      1.	Detoxify with water\nDrinking water is one of the most basic yet effective ways to detoxify your body. Water helps to flush out toxins from your body and also helps to improve your digestion. Aim to drink at least 8-10 glasses of water per day.\n
      2.	Get moving\nSpring is a great time to start a new exercise routine or ramp up your existing one. Regular exercise not only helps to tone your body but also boosts your energy levels, improves your mood and strengthens your immune system.\n
      3.	Eat fresh, whole foods\nEating fresh, whole foods is a great way to give your body the nutrients it needs to function optimally. Include plenty of fruits, vegetables, whole grains, lean protein, and healthy fats in your diet. Avoid processed foods, sugary snacks, and high-fat foods.\n
      4.	Try a cleanse or fast\nA cleanse or fast can be a great way to give your body a break from the rigors of daily life and help it reset. However, be sure to consult with your doctor before starting any cleanse or fast, especially if you have underlying health issues.\n
      5.	Reduce stress\nStress can have a negative impact on your physical and mental health, so it’s important to take steps to reduce stress in your life. This could mean practicing yoga, meditation, or other relaxation techniques, or simply taking time each day to do something you enjoy.\n
      6.	Sleep well\nGetting enough sleep is crucial for your overall health and wellbeing. Aim to get at least 7-8 hours of sleep per night, and establish a consistent sleep routine to help you fall asleep and stay asleep more easily.\n
      7.	Get a check-up\nSpring is a great time to schedule a check-up with your doctor or healthcare provider. This can help you identify any health issues early on and get the treatment you need to stay healthy.\n
      Remember, taking care of your body is an ongoing process, so be sure to make these healthy habits a part of your everyday routine for lasting benefits.\n
      `
    },
  ]
  
  return (
    <div>
      {posts.map((post, i) => (
        <Link to="blogpost" state={{blogTitle: post.title, markdown: post.markDown}}
          className='blog-link' key={i}
        >
          <article className={post.textAlignment === 'left' ? 'blog-thumbnail left' : 'blog-thumbnail'}>
            <section>
              <h1 className='title-two blog'>{post.title}</h1>
              <p className='value-prop-summary'>{post.description}</p>
              <p className='value-prop-summary learn-more'>Learn more ...</p>
            </section>
            <img src={require(`../../assets/blogImages/${i}.jpg`)} alt="" />
          </article>
        </Link>
      ))}
    </div>
  )
}

export default BlogCard;