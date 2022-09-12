## What it does
RunningHand Game is an educational endless runner game that lets players avoid obstacles by practicing American Sign Language. Using finger tracking, players gesture corresponding letters to jump, roll, or change lanes to survive as long as possible. This task requires players need to leverage quick memory recall, and the goal of surviving in an endless runner game will encourage competitiveness among players

![asl](https://images-na.ssl-images-amazon.com/images/I/815HgvwWm3L._AC_SL1500_.jpg)

## Inspiration 
There are approximately 36 million hard of hearing and deaf individuals who live in the United States, and many of them use American Sign Language (ASL). By learning ASL, you'd be able to communicate with 17% more of the US population. For each person who is hard of hearing or deaf, there are many loved ones who hope to have the means to communicate effectively with them.

We hope that our interactive games will help improve people's ability on ASL and raise their awareness of how important ASL can be. 

## How I built it
**1. Game Design:** Unity3D, C#

**2. Deep Learning for Sign Language Recognition: ** Python, Tensoflow, Kaggle 

**3. UX & UI:** Unity3D

**4. Graphic Design:** Canva

**5. Integration:** UDP Connection, Threading, Socket Programming 

## Challenges I ran into
**1. Limitations in gesture recognition:** Similar gestures that involve crossing fingers (ASL letters M vs. N) posed difficulties to our finger tracking model in differential recognition. Accuracy in finger tracking will continue to improve, and we're excited to see the capabilities that could bring to our game.

**2. Lack of face tracking:** ASL requires signers to make facial expressions while signing which we, unfortunately, cannot track with current hardware and the limitation of time to train our model. Training the finger recognition model costs us over 8 hours to complete. Therefore, we are unable to include face tracking features

**3. Latency in the data transfer:** After the finger recognition is being recognized in our python script, we have to establish a UDP connection to send the detected letters to the Unity Game, which has some latency because of the limitations of the hardware

## Accomplishments that we are proud of
We're very proud of successfully integrating multiple artistic visions into one project. We were able to 
## What we learned
Each member of the team utilized challenging technology, and as a result, learned a lot about Unity and Tensorflow during the last 24 hours! We learned how to design, train and test hand recognition models and build 3D models and UI elements in Unity.

This project really helped us have a better understanding of many of the capabilities within Unity, Tensorflow and in utilizing hand tracking to interpret gestures to use in an educational setting. We learned so much through this project and from each other, and had a really great time working as a team!

## What's next for ASL Alphabet 
Create ASL lessons for users
Integrated Detection framework to use C# so that we don't have to run 2 scripts concurrently 
Multi-hand gesture, face recognition support
Additional boss level for users to practice ASL

## Project Credits
1. Music: [Yummy Flavor](https://www.youtube.com/watch?v=tAaFg2u-i2c&t=0s) | [Directed by Robert B. Weide](https://www.youtube.com/watch?v=X-KwYX2u8e4)
2. ASL Facts: [ASL Benefits of Communication](https://smackhappy.com/2020/04/asl-benefits-communication/)
3. Dataset + Model Architecture: https://www.kaggle.com/grassknoted/asl-alphabet/