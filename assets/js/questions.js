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
      { text: 'font-varient', correct: false },
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
]

//Moderate Questions
const questionsModerate = [
  {
    question: 'Which of the following is true about the "video" element in HTML5?',
    answers: [
      { text: 'HTML5 supports the tag which is used to embed a video file in an HTML or XHTML document.', correct: false },
      { text: 'The current HTML5 draft specification does not specify which video formats browsers should support in the video tag.', correct: false },
      { text: 'Ogg files with Theodora video codec and Vorbis audio codec are supported.', correct: false },
      { text: 'All of the above.', correct: false }
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
    question: '',
    answers: [
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: '',
    answers: [
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: '',
    answers: [
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: '',
    answers: [
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  }
]

//Hard Questions
const questionsHard = [
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
    question: '',
    answers: [
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: '',
    answers: [
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: '',
    answers: [
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: '',
    answers: [
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: '',
    answers: [
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: '',
    answers: [
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: '',
    answers: [
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: '',
    answers: [
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: '',
    answers: [
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  }
]