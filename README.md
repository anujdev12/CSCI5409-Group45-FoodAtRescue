# CSCI5409-Group45-FoodAtRescue

- From wilted salad in the fridge to leftovers on our plates and edible meals discarded by restaurants and cafes, we all contribute to the widespread problem of food waste and its severe environmental impact.

- One-third of the world's food produced is wasted or lost, while almost a billion people die from starvation, most of the food ends up in landfills, where it emits methane, a gas 30 times stronger than carbon.
- Do you ever wish you had extra food to offer to people in need? You can accomplish exactly that with our application. The web-based application is part of the bigger objective to eliminate food waste by allowing donors to donate leftover food to social service organizations. Volunteers may transport extra food from a variety of sources, including supermarkets and restaurants, to organizations that feed the hungry.
- We're working on an app called "Food at Rescue" that will feature leftover food posts and let needy individuals reserve and get them. Our web-based application will have features such as User Management (Login, Sign-Up), Add/Edit/Delete Post for Leftover foods, All Leftover food lists based on area, and reserve the food. So, basically, in this application, we’ve 2 types of users. One user would be a restaurant/cafe or someone who has leftovers, and they would publish the Post; the other user would be someone who needs the food, and they would be able to search for the food based on area and reserve the food, and for other users, it would show reserved tag; and when the user who has booked the food receives their food, the post would be deleted. Our app will help you save money, prevent food waste, and support those in need.
- We’ll be using AWS services as the core architecture of the application. The services we’re going to use for deployment will be AWS Docker EC2 for hosting our cloud-based web application on the virtual machine and Elastic Container Services to run the Docker Containers. For Data storing purposes, we’re going to use NoSQL Database (AWS DynamoDB). AWS VPC (Virtual Private Cloud) will be used for generating network logs with each activity, which are saved in an S3 bucket for admin oversight. And, to develop a multi-cloud solution, we'll utilize AWS Cloud Formation in conjunction with AWS Cognito for User Authentication, and we'll leverage AWS SNS to enable email verification.
<<<<<<< Updated upstream
![Over all Archetecture](https://github.com/anujdev12/CSCI5409-Group45-FoodAtRescue/blob/develop/frontend/src/assets/images/Overall%20Archetecture.png)
=======

![Over all Archetecture](image.jpg)
>>>>>>> Stashed changes
