//Question Object Array's
//Easy Questions
const questionsEasy = [
  {
    question: 'What does HTML stand for?',
    answers: [
      { text: 'Hypertext Markup Language', correct: true },
      { text: 'Hyperlink Markup Language', correct: false },
      { text: 'Hypertool Markup Language', correct: false },
      { text: 'Hypervalue Markup Language', correct: false }
    ]
  },
  {
    question: 'A HTML program is saved using the _____ file extension.',
    answers: [
      { text: '.htm', correct: false },
      { text: '.hml', correct: false },
      { text: '.html', correct: true },
      { text: '.htlm', correct: false }
    ]
  },
  {
    question: 'The <title> element must be located inside the _____ element.',
    answers: [
      { text: '<body>', correct: false },
      { text: '<head>', correct: true },
      { text: '<div>', correct: false },
      { text: '<span>', correct: false }
    ]
  },
  {
    question: 'Which element would you use to create a HyperLink?',
    answers: [
      { text: '<link>', correct: false },
      { text: '<a>', correct: true },
      { text: '<img>', correct: false },
      { text: '<dl>', correct: false }
    ]
  },
  {
    question: 'What does CSS stand for?',
    answers: [
      { text: 'Colourful Style Sheets', correct: false },
      { text: 'Canvas Style Sheets', correct: false },
      { text: 'Computer Style Sheets', correct: false },
      { text: 'Cascading Style Sheets', correct: true }
    ]
  },
  {
    question: 'Which of the following properties is used to change the face of a font in CSS?',
    answers: [
      { text: 'font-style', correct: false },
      { text: 'font-family', correct: true },
      { text: 'font-variant', correct: false },
      { text: 'font-weight', correct: false }
    ]
  },
  {
    question: 'How do you insert a comment in a CSS file?',
    answers: [
      { text: '// this is a comment //', correct: false },
      { text: '<!-- this is a comment -->', correct: false },
      { text: '/* This is a comment */', correct: true },
      { text: '# this is a comment', correct: false }
    ]
  },
  {
    question: 'Where is the correct place to insert a <script> tag>',
    answers: [
      { text: 'The <body> section', correct: false },
      { text: 'The <footer> section', correct: false },
      { text: 'The <head> section', correct: false },
      { text: 'Both the <body> and <head> sections are correct', correct: true }
    ]
  },
  {
    question: 'In JavaScript, how would you call a function called "firstFunction"?',
    answers: [
      { text: 'firstFunction()', correct: true },
      { text: 'call function firstFunction()', correct: false },
      { text: 'call firstFunction()', correct: false },
      { text: 'call function firstFunction', correct: false }
    ]
  },
  {
    question: 'JavaScript code is written inside a file with the ending extension _____.',
    answers: [
      { text: '.jvs', correct: false },
      { text: '.js', correct: true },
      { text: '.jsc', correct: false },
      { text: '.javascript', correct: false }
    ]
  }
];

//Moderate Questions
const questionsModerate = [
  {
    question: 'Which input type defines a slider control in HTML5?',
    answers: [
      { text: 'Controls', correct: false },
      { text: 'Search', correct: false },
      { text: 'Slider', correct: false },
      { text: 'Range', correct: true }
    ]
  },
  {
    question: 'Which attribute is used to name an element uniquely?',
    answers: [
      { text: 'Class', correct: false },
      { text: 'ID', correct: true },
      { text: 'dot "."', correct: false },
      { text: 'All of the above.', correct: false }
    ]
  },
  {
    question: 'In HTML, which attribute is used to specify that an input field must be filled out?',
    answers: [
      { text: 'required', correct: true },
      { text: 'formvalidate', correct: false },
      { text: 'validate', correct: false },
      { text: 'placeholder', correct: false }
    ]
  },
  {
    question: 'Which are the commonly used methods for request and response between a client and server?',
    answers: [
      { text: 'Get and Put', correct: false },
      { text: 'Get and Post', correct: true },
      { text: 'Set and Post', correct: false },
      { text: 'Set and Put', correct: false }
    ]
  },
  {
    question: 'In CSS, the default value of the position attribute is _____.',
    answers: [
      { text: 'Fixed', correct: false },
      { text: 'Absolute', correct: false },
      { text: 'Static', correct: true },
      { text: 'Inherit', correct: false }
    ]
  },
  {
    question: 'Pseudo-classes in CSS are used to _____.',
    answers: [
      { text: 'Match a specified element', correct: false },
      { text: 'Select the active links', correct: false },
      { text: 'Select all the visited links', correct: false },
      { text: 'Define a special state of an element', correct: true }
    ]
  },
  {
    question: 'Which snippet of CSS is commonly used to centre a website horizontally?',
    answers: [
      { text: 'margin: 0 auto;', correct: true },
      { text: 'margin: auto 0;', correct: false },
      { text: 'site-align: center;', correct: false },
      { text: 'margin: center;', correct: false }
    ]
  },
  {
    question: 'Using the _____ statement is how you would test for a specific condition.',
    answers: [
      { text: 'Switch', correct: false },
      { text: 'Select', correct: false },
      { text: 'If', correct: true },
      { text: 'For', correct: false }
    ]
  },
  {
    question: 'A property is an object-oriented equivalent to _____.',
    answers: [
      { text: 'A function', correct: false },
      { text: 'An if statement', correct: false },
      { text: 'A reserved word', correct: false },
      { text: 'A variable', correct: true }
    ]
  },
  {
    question: 'What is meant by the "this" keyword in JavaScript?',
    answers: [
      { text: 'It refers to the previous object', correct: false },
      { text: 'It is a variable which contains a value', correct: false },
      { text: 'It refers to the current object', correct: true },
      { text: 'None of the above', correct: false }
    ]
  }
];

//Hard Questions
const questionsHard = [
  {
    question: 'In HTML the Geolocation, getCurrentPosition(), method is used to _____.',
    answers: [
      { text: 'Return the users position', correct: true },
      { text: 'Get a map of the world', correct: false },
      { text: 'Return the latitude', correct: false },
      { text: 'Return the longitude', correct: false }
    ]
  },
  {
    question: 'XHTML is a dynamic webpage, whereas HTML is _____.',
    answers: [
      { text: 'Also a dynamic webpage', correct: false },
      { text: 'A static webpage', correct: true },
      { text: 'A programming language', correct: false },
      { text: 'A user defined language', correct: false }
    ]
  },
  {
    question: 'HTML classes that are already defined and allow us to apply styles on them; are called _____.',
    answers: [
      { text: 'CSS classes', correct: false },
      { text: 'JavaScript classes', correct: false },
      { text: 'Pseudo classes', correct: true },
      { text: 'None of the above', correct: false }
    ]
  },
  {
    question: 'The default method while submitting a form is the _____.',
    answers: [
      { text: 'Put method', correct: false },
      { text: 'Post method', correct: false },
      { text: 'Set method', correct: false },
      { text: 'Get method', correct: true }
    ]
  },
  {
    question: 'How do you rotate objects using CSS3?',
    answers: [
      { text: 'object-rotation: 30deg;', correct: false },
      { text: 'transform: rotate(30deg);', correct: true },
      { text: 'rotate-object: 30deg;', correct: false },
      { text: 'transform: rotate-30deg-clockwise;', correct: false }
    ]
  },
  {
    question: 'In CSS the "z-index" property allows us to specify a stack order along the z-axis for _____.',
    answers: [
      { text: 'Boxed elements', correct: false },
      { text: 'Floated elements', correct: false },
      { text: 'Inline elements', correct: false },
      { text: 'Positioned elements', correct: true }
    ]
  },
  {
    question: 'Which of the following is an example of an adjacent sibling selector?',
    answers: [
      { text: 'div*p', correct: false },
      { text: 'div p', correct: false },
      { text: 'div+p', correct: true },
      { text: 'div.p', correct: false }
    ]
  },
  {
    question: 'When can you not trigger JavaScript from an event handler?',
    answers: [
      { text: 'When another element is still being processed', correct: false },
      { text: 'When JavaScript is disabled', correct: true },
      { text: 'When the page used stylesheets', correct: false },
      { text: 'When is is running locally instead of on the web', correct: false }
    ]
  },
  {
    question: 'The syntax of the capture events method for a document object is _____.',
    answers: [
      { text: 'captureEvents()', correct: false },
      { text: 'captureEvents (args eventType)', correct: false },
      { text: 'captureEvents (eventVal)', correct: false },
      { text: 'captureEvents (eventType)', correct: true }
    ]
  },
  {
    question: 'How would you append a value to an array in JavaScript?',
    answers: [
      { text: 'arr[arr.length] = value', correct: true },
      { text: 'arr[arr.length*1] = value', correct: false },
      { text: 'arr[arr.length+1] = new Arrays()', correct: false },
      { text: 'arr[arr.length-1] = value', correct: false }
    ]
  }
];