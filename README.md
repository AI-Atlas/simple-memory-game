# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Luis JR. Olmos

Time spent: 9 hours spent in total

Link to project: https://glitch.com/edit/#!/developing-pineapple-naranja

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](http://g.recordit.co/B6yMM68P0C.gif)
![](http://g.recordit.co/RBnOy0RO0u.gif)
![](http://g.recordit.co/Ve0F5Carxe.gif)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I did try to use this: Creating Sounds with AudioContext < JavaScript | The Art of Web (the-art-of-web.com), but 
I ended up not using it. 
However, I did use this: https://programminghead.com/how-to-play-audio-in-html-using-javascript/ 
and: https://www.w3schools.com/cssref/css3_pr_background-size.asp
Other than that, I didn't use any outside resources for help other than the audio files for the piano notes.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

A challenge I encountered was changing the playback sound to piano note sounds. At first, I thought of changing the frequency
to the exact frequency of sound of a specific piano note, so I tried to use the outside resource for help but I didn't understand 
fully what it was telling me. Then I decided to use audio files, and I had, at first, found audios which played back a chord,
so, for example, one would play back a C major chord starting at the root, unfortunately the file wasn't an mp3 or audio file when 
I downloaded it and I didn't know how to fix that. I really wanted to use chords but I also didn't want to spend too much time on this
so I simply downloaded audio files for six notes for the six buttons and then I came to another problem where I didn't know how to implement them.
I was confused by it saying in the Optional Features part to "swap out the playTone and startTone function for a new function that plays 
your audio clips." I didn't understand why that was necessary and that made me start overthinking it. Through a lot of testing and debugging, 
I found the solution to be much simpler than I thought it would be, although it isn't the most optimal, it still works. 


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I was curious, when web browsers, such as Google, make updates, does that entail that the HTML must update as well? 
More specifically, when I open a website and an image doesn't pop up because it's not up to date, how do you update that website?
Additionally, I noticed that JavaScript and Java have very similar syntax, I have no experience in JavaScript but 
I do have experience in Java, and I was wondering if you can do the things you can do in Java as well in JavaScript? 
I'm not referring to loops, I'm more referring to data structures and algorithms, because I learned you can do a loop or conditionals, 
but could you do more advanced things?  

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours I would spend them refurbishing the buttons' appearance and implementing the chords. I didn't want to build a piano,
I wanted to build a sort of piano except when you press a button, it plays a chord, and a chord consists of three notes. 
Moreover, I wanted to be able to make it so there's a specific chord for every button, which would take while to do, 
but I wanted to do that because I thought it'd be interesting to see, using the randomPattern function, to play a randomly
computer generated piano tune. To see if a computer can actually make a good tune just using chords. I believe 
this could've been helpful for others as well if they wanted to memorize specific chords.



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/6ce893325e6147d7849ea0b1e6fa8c50)


## License

    Copyright Luis JR. Olmos

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.