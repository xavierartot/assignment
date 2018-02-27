# Schwab assignment 

## final project
[http://artot.net/assignments/charles-schwab/index.html/](http://artot.net/assignments/charles-schwab/index.html/)

## Install and Work
- close this repository
- in the Terminal, then

`$ npm i && gulp && gulp watch`


### Tools Used
I used different technologies 
  * CSS 
    - Stylus   (preprocessor)
    - BEM      (methodology)
  * Javascript
    - Babel    (transpiler)
    - Version  (es2015)
  * Pug        (templating HTML, known as Jade)
  * Git        (versioning)
  * Eslint     (lint code)
  * Vim        (code editor)

### Assignment

Programming problem for Xavier.

Build a responsive module on a webpage containing 4 square boxes with colors: red, green, blue, white. Each box has a maximum width of 230px, and the webpage has a maximum width of 980px. Each box contains a button, and when clicked changes the color of the other buttons to its color, except for the white box. The white box always remains white and when its button is clicked, it resets the colors of the other boxes to their original colors.

### Correction 🔥
The manager had suggestions for my code.
- The manager emphasized the importance of the visibility in the code. What I totally aggree with him. 
I renamed some for more visibility: **threeModules()** to **changeThreeModules()**,  **whiteModule** to **resetWhiteButton** and the class html **.btn-white** to **.btn-reset** 
- the list was wrapped in div, I replaced the div by a list **ul>li**, for semantic reason and therefor I add a short reset CSS on the list only
- I completely forgot the relation between Doctype and the type="...", I was using the doctype html5 and always assume it was type="application/javascript" I knew the type="text/javascript" was obsolete in modern browser(text seems to be read by human), once on my computer I realized I knew the answer, I just completely forgot
- The **box-sizing: content-box** wasn't clear at the moment, I was confuse with margin and
  padding with border, maybe the stress, basically I reversed the answer
- I didn't aggree but I understood these critics:
  1. the container with a width:100% is unnecassary and a mistake: 
  false statement because this style property is necessary to fill the screen in mobile and it
     helps to have a better design experience, once back to home I experienced
it and I was right
  3. the syntaxe in BEM is **class='modules__child module__child-green'** 
     I understand other practice exist and the manager don't like
      the methodology BEM. However I choose it because is the most popular.
      Nothing wrong with my code here the documentation
      https://en.bem.info/methodology/html/
  4. the display: flex; on the element body, is necessary to have control on the
     children nodes, and especially because I want to have a full screen out of
      the container to fill the document. It maybe new for the manager but it seems
      correct practice, nothing wrong with that
  5. I uncommented the footer and added an icon mostly for fun 😜

#### I learned a lot of things and therefore it was a rewarding experience
