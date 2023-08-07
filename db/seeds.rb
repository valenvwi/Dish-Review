puts "creating dishes"

dishes = Dish.create([
  {name: "Beef Bulgogi", image_url: "https://chefjulieyoon.com/wp-content/uploads/2015/12/Bulgogi-22-1.jpg"},
  {name: "Four Cheese Pizza", image_url: "https://media.istockphoto.com/id/1295773428/photo/pizza-with-cheese-isolated-on-white-background-clipping-path-full-depth-of-field.jpg?s=612x612&w=0&k=20&c=Oomq20XpoHKvkMROs5doC26BSWxrZH8Gs6sYIEPMtKs="},
  {name: "Mapo Tofu", image_url: "https://twoplaidaprons.com/wp-content/uploads/2022/05/mapo-tofu-in-bowl-thumbnail.jpg"},
  {name: "Teriyaki Salmon", image_url: "https://culinaryginger.com/wp-content/uploads/Teriyaki-Glazed-Salmon-59-720x405.jpg"},
  {name: "Crispy Chicken Wings with soy and garic", image_url: "https://images.squarespace-cdn.com/content/v1/5d2809fea1ce850001cabece/1619937188594-NLG1UY6F0FP7FEY0FAAI/IMG_2969.JPG"},
  {name: "Grilled Veggies", image_url: "https://cdn.loveandlemons.com/wp-content/uploads/2019/07/best-grilled-vegetables.jpg"},
  {name: "Fettuccini with Mushroom Alfredo sauce", image_url: "https://www.tastesoflizzyt.com/wp-content/uploads/2018/05/fettuccini-with-mushroom-alfredo-sauce-8.jpg"},
  {name: "Egg Fried Rice", image_url: "https://japanmcconnell.com/wp-content/uploads/2022/09/Simple-Chahan-Yakimeshi-Recipe-Japanese-Egg-Fried-Rice-At-Home.jpg"},
  {name: "Yakisoba", image_url: "https://www.chopstickchronicles.com/wp-content/uploads/2020/10/Yakisoba-Update-12-1024x1024.webp"},
  {name: "Black Forest cake", image_url: "https://www.bakingo.com/blog/wp-content/uploads/2022/02/Eggless-Black-Forest-Cake-For-Birthday-1200x900.jpg"},
  {name: "Coconut Panna Cotta", image_url: "https://www.sugarsaltmagic.com/wp-content/uploads/2022/04/Coconut-Panna-Cotta-with-Raspberry-Sauce-6FEAT.jpg"},
])

puts "creating reviews"

reviews = Review.create([
  {title: "Amazing", description: "This dish was amazing", score: 5, dish: dishes.first},
  {title: "Just Ok", description: "This dish was just ok", score: 3, dish: dishes.first},
  {title: "Too much cheese", description: "Too much cheese", score: 3, dish: dishes.second},
  {title: "Great", description: "My everytime favorite", score: 4, dish: dishes.second},
  {title: "Not Good", description: "I don't like pizza, please put this dish down from the menu", score: 1, dish: dishes.second},
  {title: "Too Spicy", description: "It's too spicy for me but it's still very tasty", score: 4, dish: dishes.third},
  {title: "Perfect", description: "The best panna cotta I've ever had! It's not too sweet!", score: 5, dish: dishes.last},
])

puts "Done!"
