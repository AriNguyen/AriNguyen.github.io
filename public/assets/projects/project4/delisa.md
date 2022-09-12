## Inspiration
In the United States, food waste is estimated at between 30-40 percent of the food supply [https://www.usda.gov/foodwaste/faqs](Source). Our biggest inspiration stems from our concern about the environment and how we can make simple lifestyle changes and be more responsible about our consumption. 

SmartFridge app is a solution that makes meal planning convenient, intuitive, and sustainable. We create a logistic app that lets users easily monitor their food resources. By scanning users' food inventory at home via picture input, the app will classify its users' food and suggest cooking recipes depending on the available food. SmartFridge prioritizes food that will go bad soon and sends alerts once the user's fridge is running low or expiring. SmartFridge is the all-in-one mobile app to keep track of the fridge, have a more diverse meal plan, and reduce personal food waste.

## What it does
SmartFridge has 5 main tabs: Scan, Ingredient, Meal Plan, Shopping List, and Profile. 
- **Scan**: Scan images of food ingredients and add them to inventory. Integrate image processing functionality through TensorFlow.js to optimize user input step.
- **Ingredient**: Let users easily monitor available food in their home kitchen.
- **Meal Plan**": Suggest recipes that match existing ingredients, bookmark favorite recipes, and manage weekly meal plan.
- **Shopping List**: Auto-populated with ingredients the user still needs for the meal plan. Integrate Google Map API to navigate closed-by grocery stores.
- **Profile**: Summary status of fridge like remaining capacity, prediction of the number of days until next shopping trip, number of items expiring very soon, manage ingredients used in the week's meal plan.

## How we built it
We built a cross-platform mobile app using React Native and Expo. We also used Spoonacular API to suggest users with cooking recipes, Google Map API to locate nearby stores, and TensorFlow.js for image processing. The back end of the app is managed through SQLite and Redux. Its primary function is to record the food resources of the users and interact between different components of user interaction.

## What we learned
It's our first time learning to use a new web framework, React Native, and APIs such as Spoonacular API and Google Map API. We deploy and test the app using Expo. It's also our first-time integrating the backend, SQLite and Redux, to make a fully functional mobile app. The most exciting part of the project is applying machine learning models using TensorFlow.js to recognize and classify food. 

## What's next for SmartFridge - reduce food waste
There are still many functionalities we want to add or optimize. We will need to improve our front end for a better user experience and build our cloud database to store more high-quality recipes and data about our users' preferences.