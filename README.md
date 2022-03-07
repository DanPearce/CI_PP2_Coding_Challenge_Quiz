# Coder's Coding Challenege! - Test your knowledge in HTML, CSS and JavaScript!
Developed by, [Dan Pearce](https://danpearce.software/)

[View the live site](https://danpearce.github.io/CI_PP2_Coding_Challenge_Quiz/index.html)

![Responsive](docs/responsive/responsive.png)

The Coder's Coding Challenge Quiz App/Website is designed to encourage people to test their skills in HTML, CSS and JavaScript! It's inteneded to be a fun interactive site that allows the user to choose a difficulty and give them feedback on how they are scoring throughout the quiz.

The site has been designed with simplicity in mind allowing the main focus to be the game, with other features pushed to the bottom of the page.

##Contents
1. [Site Goals and Consumer Experience](#site-goals-and-consumer-experience)
    - [Consumer Goals](#consumer-goals)
    - [Website Owner Goals](#website-owner-goals)
    - [Target Audience](#target-audience)
    - [Consumer Expectations](#consumer-expectations)
2. [User Stories](#user-stories)
    - [User](#user)
    - [Website Owner](#website-owner)
3. [Design](#design)
    - [Structure](#structure)
    - [Wireframes](#wireframes)
    - [Colour](#colour)
    - [Font](#font)
    - [Icons](#icons)
4. [Main Features](#main-features)
5. [Technologies](#technologies)
    - [Languages](#languages)
    - [API](#api)
    - [Frameworks and Other Technologies](#frameworks-and-other-technologies)
6. [Validation and Testing](#validation-and-testing)
    - [HTML Validation](#html-validation)
    - [CSS Validation](#css-validation)
    - [JavaScript Validation](#javascript-validation)
    - [Accessibility Validation](#accessibility-validation)
    - [Performance Validation](#performance-validation)
    - [Device and Browser Compatibility](#device-and-browser-compatibility)
    - [User Story Testing](#user-story-testing)
7. [Bugs and Errors](#bugs-and-errors)
8. [Deployment](#deployment)
9. [Credits](#credits)
    - [Images](#images)
    - [Quiz Contents](#quiz-contents)
    - [Code](#code)
10. [Acknowledgements](#acknowledgements)

## Site Goals and Consumer Experience

### Consumer Goals
- Easily navigate around the quiz.
- Easily distinguish between a correct and incorrect answer.
- Test their skills in HTML, CSS and JavaScript.
- Contact the website owner for suggestions/errors.

### Website Owner Goals
- Provide the consumer feedback on how they scored throughout and at the end of the game.
- Provide an experience that is fully responsive.
- Provide a point of contact so that the consumer can contact about bugs or future devlopments.

### Target Audience
- Beginner/Moderate students or casual coders who wish to test their skills in these languages.
- Students/coder's that like to be tested through a quiz.
- Anyone with an interest in coding, looking to test and expand their knowledge.

### Consumer Expectations
- A fully responsive site that can be accessed on all devices without error.
- Easily distinguishable sections and design.
- An interactive fun game experience with ease of use in mind.
- Easy and simple navigation throughout the site.
- Fully functioning links with no pages that lead to errors or dead links.
- Accessibility throughout the website.

## User Stories

### User
1. As a user, I want to be able to test my knowledge in HTML, CSS, and JavaScript with an ineractive quiz.
2. As a user, I want to be able to choose the level of difficulty I want to be tested at.
3. As a user, I want to be able to distingish between when I got an answer correct or an answer incorrect.
4. As a user, I want to know which answer was correct should I get the answer incorrect.
5. As a user, I want to be provided with a tally of the score I have recieved.
6. As a user, I want to be able to turn the sound off should I want to.
7. As a user, I want to provide feedback to the owner, and be informed that said feedback has been sent.

### Website Owner
8. As an owner, I want to provide a site that is fully responsive for all users.
10. As an owner, I want the user to be notified when they have scored correctly/incorrectly. 
11. As an owner, I want to allow the user to send feedback directly to me about the site.
12. As an owner, I want the user to be aware of our social media presence at all times.
13. As an owner, I want the user to easily navigate back to the main quiz page should enter an incorrect URL.

## Design 

### Structure
For the site I wanted to provide the user a simple and easily followable structure. To do this I wanted the main focus to be the quiz and all other forms of navigation to be pushed to the bottom of the page in the footer.

#### Index Page
The index page is the main page so this is where the quiz is located. The quiz takes up considerable space and is the biggest section on the entire page.
- The page has a header, welcoming people to the site with detail about the site and quiz.
- The quiz section is just underneath the header and is fixed into place.
- The random advice API is located near the bottom of the page to allow the quiz to build space as the JavaScript inserts new code.
- The footer is fixed into place at the bottom of the page and is visable no matter where you are scrolling through the site.

#### Contact Us Page
The contact us page is the only other 'main' page on the site and uses the design from the quiz but instead holds a quiz inside.
- The form is simple and easy to read.
- Once submitted the JavaScript removes the form and displays the user with a screen that informs them their form has been submitted.

#### 404 Error Page
This page has been implemented to provide a fall back in case of input error to the URL to ensure the user can remain on the site. Agian keeping the same design structure from the main quiz.

### Wireframes
<details><summary>Index Page</summary>
<img src="docs/design/wireframes/index.png">
</details>
<details><summary>Welcome/Difficulty</summary>
<img src="docs/design/wireframes/welcome-difficulty.png">
</details>
<details><summary>Main Quiz</summary>
<img src="docs/design/wireframes/quiz-area.png">
</details>
<details><summary>Next Question/Answers Revealed</summary>
<img src="docs/design/wireframes/next-question.png">
</details>
<details><summary>End of Quiz</summary>
<img src="docs/design/wireframes/quiz-end.png">
</details>
<details><summary>Contact Us Page</summary>
<img src="docs/design/wireframes/form.png">
</details>
<details><summary>Form Sent</summary>
<img src="docs/design/wireframes/form-sent.png">
</details>
<details><summary>404 Error</summary>
<img src="docs/design/wireframes/404-error.png">
</details>

### Colour
The colouring of the site has been kept simple to make it clear to user's when they're on a normal page, when the have answered correctly, when they have answered incorrectly and when they have successfully sent a message using the form. This has been achieved by changing the background colour of the body through JavaScript.
<details><summary>Colour Palette</summary>
<img src="docs/design/colour/colour.png">
</details>

All of the pages were tested in terms of contrast using [WebAIM](https://webaim.org/)

#### Normal Contrast
The normal colour for the site is a turquoise colour and this is to distinguish to the user that this is neither a correct or incorrect page.
<details><summary>Normal Contrast</summary>
<img src="docs/design/colour/normal-contrast.png">
</details>

#### Correct Contrast
When a correct answer is clicked a green background is used.
<details><summary>Correct Contrast</summary>
<img src="docs/design/colour/correct-contrast.png">
</details>

#### Incorrect Contrast
When an incorrect answer is clicked a red background is used and the font colour is change to a whiter colour.
<details><summary>Incorrect Contrast</summary>
<img src="docs/design/colour/incorrect-contrast.png">
</details>

#### Form Sent Contrast
When the form has been sent, the background colour is changed to match the image used.
<details><summary>Form Sent Contrast</summary>
<img src="docs/design/colour/form-sent-contrast.png">
</details>

### Font
The font used on this website is [Courier New]('https://docs.microsoft.com/en-us/typography/font-list/courier-new) and this was chosen specifically for it's retro feel for computers - I thought this was particularly relevent as the quiz is related to coding!

### Icons
I used [favicon.io](https://favicon.io/) to create the favicon icons for the site, and used [Roboto](https://fonts.google.com/specimen/Roboto/) as the font for this as I thought this looked the most traditional for the classic '</>' code symbol. The colours are also featured on the site to stay consistent with styling.

Icons from [Font Awesome](https://fontawesome.com/) we're also used throughout the site, notably the home button on the quiz, the sound controls and the social media links also.

## Main Features
The features of this website are all combined to create a fully functioning quiz with added sounds and colours to create an interactive experience for all. 

### Header 
At the top of the webpage the header is prominent and gives the consumer a welcome message and underneath details the use of the current page that they are on. The header is changed depending on which page they are currently on and this allows the user to understand what each page does.
<details><summary>Header Index Page</summary>
<img src="docs/features/feature-header.png">
</details>
<details><summary>Header Contact Us Page</summary>
<img src="docs/features/feature-header-contact.png">
</details>
<details><summary>Header 404 Error Page</summary>
<img src="docs/features/feature-header-404.png">
</details>

### Username 
The site implements the use of a username! The user is prompted to enter a username upon the page opening - which is then used to welcome the user on the next page. This username is also displayed at the end of the quiz to inform the user of their score.
<details><summary>Username Entry</summary>
<img src="docs/features/feature-username.png">
</details>
<details><summary>Welcome User</summary>
<img src="docs/features/feature-username-welcome.png">
</details>
<details><summary>User with Score</summary>
<img src="docs/features/feature-username-end-game.png">
</details>

### Game Modes 
The game allows the user to decide which level of questions they would like to be challenged with in the quiz. This is avaliable immediatly after they enter a username and comes in Easy, Moderate and Hard and the questions will change accordingly.
<details><summary>Game Modes</summary>
<img src="docs/features/feature-game-modes.png">
</details>

### Main Game and Game Controls
Upon deciding which game mode to play, the user will be brought to the first question which is shuffled randomly to make the game slightly harder if replaying. 

#### Main Game
The functionality is simple, the user has to pick an answer out of four choices.
<details><summary>Main Game</summary>
<img src="docs/features/feature-main.png">
</details>

#### Question Counter
At the top of the quiz section the quiz counter can be seen providing the user a visual counter on how far through the quiz they are and also providing a numerical counter too.
<details><summary>Question Counter</summary>
<img src="docs/features/feature-question-counter.png">
</details>

#### Correct and Incorrect Answers
The user will pick an answer and depedning on whether they got it correct or not the game will give several visual clues to support the answer they picked.

The buttons will all change colour including the one they selected; the correct one will be green and the incorrect ones will be red.
<details><summary>Buttons Answer Clicked</summary>
<img src="docs/features/feature-questions-correct-wrong.png">
</details>

The main body will change to green if they chose the correct answer.
<details><summary>Correct Body</summary>
<img src="docs/features/feature-correct-body.png">
</details>

The main body will change to red if they chose an incorrect answer.
<details><summary>Incorrect Body</summary>
<img src="docs/features/feature-incorrect-body.png">
</details>

#### Score 
The score is featured near the bottom of the quiz container. The correct/incorrect score will increment depending on which answer the user clicks.
<details><summary>Score Area</summary>
<img src="docs/features/feature-score-area.png">
</details>
<details><summary>Score Example</summary>
<img src="docs/features/feature-score.png">
</details>

#### Audio Controls
Throughout the game there are several audio cues that play when buttons are clicked and answers have been clicked. In order to control the audio there is an implemented audio symbol that allows the user to turn audio on or off.
<details><summary>Audio On</summary>
<img src="docs/features/feature-audio-controls.png">
</details>
<details><summary>Audio Off</summary>
<img src="docs/features/feature-audio-controls-off.png">
</details>

#### End Game
At the end of the quiz the user is shown their result and is also given a personalised message depending on which result they got.
<details><summary>End Game</summary>
<img src="docs/features/feature-end-game.png">
</details>

### Random Advice API
Underneath the quiz the user is dispalyed a random peice of advice, generated from the random advice API.
<details><summary>Random Advice API</summary>
<img src="docs/features/feature-api.png">
</details>

### Footer
At the bottom of each page the footer is fixed into place to provide the user a form of consistent navigation between the pages - and to showcase the social media links
<details><summary>Footer</summary>
<img src="docs/features/feature-footer.png">
</details> 

### Contact Us Page 
The site features a contact us page which uses the same styling as the home page.
<details><summary>Contact Us Page</summary>
<img src="docs/features/feature-contact-page.png">
</details>

#### Form 
The contact form area allows the user to input their details and a message that will be sent directly to the owner.
<details><summary>Form Area</summary>
<img src="docs/features/feature-contact-form.png">
</details>

#### Form Sent
Once the contact form has been submitted successfully the user is displayed with a new message which informs them it has been sent successfully.
<details><summary>Form Sent</summary>
<img src="docs/features/feature-form-sent.png">
</details>

### 404 Error Page
The 404 error page provides a fall back for the user should they enter an incorrect URL extension to the website. The page features an image with relating text and a button for the user to navigate home.
<details><summary>404 Error Page</summary>
<img src="docs/features/feature-404-page.png">
</details>