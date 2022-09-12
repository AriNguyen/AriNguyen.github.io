## Inspiration
Conditions such as stroke and neurodegenerative disease can lead to anarthria - the loss of the ability to articulate speech. People with anarthria experience difficulty interacting with others in their daily lives. Many devices on the market assist with communication problems. In this hackathon, we want to work on something we haven't done before by attempting to replicate these devices by building a desktop app using machine learning algorithms. 

As a team of undergraduate students without experience building a desktop app or implementing machine learning algorithms, we use Python and a pre-trained machine learning model. Within 24 hours, we successfully build a desktop application using eye and head movement algorithms to help people with paralysis communicate. 

## What it does
The user can drag and click the mouse cursor by moving their eyes, blinking, winking, and moving their head. The GUI comprises an onscreen keyboard to construct sentences and a list of suggested sentences to generate simple conversation quickly. 

## How we built it:

**Desktop UI:** 

We use Tkinter and Pygame Python packages to create the user interface, composed of a keyboard and textbox to display generated sentences. 

**Eye and Head Movement Tracking Algorithm:** 

We use Python packages - OpenCV, Dlib - and a trained model of facial features to track the shape and position of eye pupils. We analyze whether the eyes gaze to the left, right, center, blinking, or winking to control the mouse cursor.

**Text To Speech:** 

After getting user input, we apply Google Cloud Text to Speech Client Libraries to generate speech. 

## Challenges we ran into
There is some extent of delay in mouse cursor movement when using eye-tracking. Therefore, we are adding a head pose estimation algorithm to accelerate the process of converting facial movement to computer commands. 

## Accomplishments that we're proud of
We did not come up with an idea or any plan. Still, luckily, we successfully created a prototype and demoed it to the judges. All the functions worked as we expected.

## What we learned
This was the very first hackathon for some of our members. Before this hackathon, we haven't known much about eye-tracking, head pose estimation, or google cloud text-to-speech libraries. This is also an opportunity to broaden our horizons, cultivate new skills, and improve our public speaking skills. 

## What's next for Speech and Communication Support for Disabled Patients
We're planning to create a more user-friendly UI for paralyzed patients that give them a better experience.