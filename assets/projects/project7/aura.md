# AURA - Virtual Assistant helps navigate around, find objects, understand the world

## Inspiration
"Where is my key?", "Where did I just put the bottle?". Sometimes, we have to go around the house to find a missing item that we just hold a minute ago. This might takes us some time to find the object. However, to blind people, this task is extremely difficult for them as they have to avoid the obstacles and touch all over the surfaces to find just one missing thing. The goal of the project is to develop a device that allows visually impaired people to navigate around without much dependence on other people, locate specific objects with ease, and understand the surrounding.

## What it does
**Obstacle Avoidance**
As the user moves, the device detects the obstacles in the person's view and then signals the user about them by generating the "beep" sounds. The closer the object, the louder and faster the sound is. The system also keeps track of the velocity of the moving objects in order to avoid a sudden collision.

**Find objects**
"Where is my wallet?", "Where is my yellow hat?", "Where are my jeans?" This project is the answer to these questions. The user can ask questions to .., and the device will analyze the voice and give instructions on where to find the objects through the hearing device.

**Describe the surrounding environment**
With a view to providing the users more insight into their surroundings, we implement an image captioning feature to describe the front view of the user.

## How we built it

### Hardware

- NVIDIA Jetson Nano
- Intel RealSense depth camera D435

### Software - Python 

- Intel Realsense SDK 2.0 (compute real-time depth images)
- OpenCV 4.1.1 with extra modules (object detection and image captioning)
- Keras
- Microsoft Azure

We're using Intel RealSense depth camera D435 for object avoidance and detection tasks. The camera sends images and depth details to Jetson Nano, a powerful microcomputer developed by Nvidia, for real-time processing. The camera and processor weigh approximately 50 grams in total, making it an extremely small and lightweight device that is comfortable to carry around

## Challenges we ran into

One of our members is currently in Singapore. He is in charge of designing the 3D prototype. Time difference is one of the biggest challenges we ran into.

## Accomplishments that we're proud of

We're able to combine the work of every member to have a final finished prototype. 

## What we learned

It's our first time create a virtual assistant from scratch and learn how to train and deploy a machine learning model on Azure. Even though it's quite tedious to learn new things in the 24-hour hackathon, we found it rewarding and gain a lot more skills.

## What's next for Aura - Navigation Assistant for Blind People

The next step is to integrate the software to the hardware and ask for feedback from blind people. We're also thinking about making this project open source so people can contribute.