## Inspiration
The goal of the project is to develop a device that allows visually impaired people to navigate around without much dependence on other people or cumbersome tools and locate specific objects with ease.

## What it does

**Obstacle Avoidance:** As the user moves, the device detects the obstacles in the person's view and then signals the user about them by generating the "beep" sounds. The closer the object, the louder and faster the sound is. The system also keeps track of the velocity of the moving objects in order to avoid a sudden collision.

**Find objects:**
"Where is my wallet?", "Where is my yellow hat?", "Where are my jeans?"
This project is the answer to these questions. The user can ask questions to .., and the device will analyze the voice and give instructions on where to find the objects through the hearing device.

## How we built it

**Hardware:**
- Intel RealSense depth camera D435

**Software:**
- Intel Realsense SDK 2.0 (compute real-time depth images)
- OpenCV 4.1.1 with extra modules (object detection and image captioning)

## Challenges we ran into
None of us has any experience with the depth-sensing camera, which poses a lot of challenges. 

## Accomplishments that we're proud of
We eventually accomplish most of the features that we brainstormed at the beginning of the hackathon and demo them to the judges. 

## What we learned
Besides the software and hardware skills, we learned from our teammates who are from different majors and backgrounds. 

## What's next for Blind & Low Vision Support Device
- Guide the blind to a specific location in the indoor and outdoor environment 
- Improve the response speed of the system to ensure the user's safety
- Make the device easier to use
