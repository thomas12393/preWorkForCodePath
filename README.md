# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Thomas Pawlowski**

Time spent: **4 hours ** hours spent in total

Link to project: (https://glitch.com/edit/#!/ash-petalite-icon)

## Required Functionality

The following **required** functionality is complete:

* [ ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ ] Game buttons each light up and play a sound when clicked. 
* [ ] Computer plays back sequence of clues including sound and visual cue for each button
* [ ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ ] User wins the game after guessing a complete pattern
* [ ] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://i.imgur.com/Bt40DYG.gif)



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[https://www.w3schools.com/jsref/jsref_length_array.asp,https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random,https://www.w3schools.com/tags/ref_colornames.asp]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[When making the buttons and implementing the sound, I was not getting the sound when pressing any of the buttons. 
I thought it was weird because the code was correct. This was not the first time that I have had code that was written correctly, 
but the program altogether was not working properly. I thought about what I have done in those situations and remembered that putting 
certain parts together makes the code work smoothly.  I decided to make all things related to button 1 in style.css together and the 
same for all the buttons together. After this change, I was able to hear the different tones for each button when I pressed them. 
I was also struggling to think how to write the game logic for the memory game at first. I took a second to look at the flow chart 
and then I started writing pseudocode on a piece of paper. Once I finished writing the pseudocode, I started putting the logic on 
paper to computer code and see if the logic I wrote was correct. Although at first, I felt a sense of grief and anxiousness about how 
I was going to write the logic for the game. I took a deep breathe, looked at the flow diagram and realized it was not very hard. 
It was a series of simple if-else statements to make sure the game ran properly. ]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[I want to learn more about if this how lots of firms are making websites using similar interfaces like glitch to create advanced websites 
that we see on websites that we use on a daily basis. I also wonder how many hours that each people have to put in to have fancy websites 
that work for both computer and smart devices that are flawless. I was wonder how websites are able to have a search bars that are able to 
take a user’s string and narrow it down to items that the user is looking for. I also would like to look more into how websites are able to 
interact with users to direct them to what they are looking for. It takes the users answers and makes sure that they are sent in the correct
direction without having to speak to a human. Sort of like AI. I would like to see how that is developed and how it has evolved through the years.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I had additional time to work on the project, I would start by putting in 
8 random numbers into the random pattern each time to make sure that when the start 
the sequences for the game are different each time and makes it more fun to play. 
I would also like to implement different levels to the game for each progressing level,
the speed of the light and sound would speed up and make the game harder and more
enjoyable to play. I would like to also like to add more buttons to make the user 
have to pay attention to more buttons and make it easier for the user to forget about 
their order. The difficulty of it in random order could actually get user to yield an 
incorrect answer and make sure that the user cannot memorize the pattern after one turn.
Improving the gameboard appearance would be something I would like to do. The 
board looks generic and boring. I’d like to make it look more fun, so it doesn’t 
look boring, and the user have a better experience. I would make the background more 
fun looking and add character to the buttons to make it more fun to remember and look at.
With the characters on the button the game can have a theme and help get a larger 
audience. ]



## License

    Copyright [Thomas Pawlowski]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.