var jobs = [
  {
    "company": "Wayfair",
    "title": "Software Engineer",
    "date": "January 2016 - August 2017"
  },
  {
    "company": "Wayfair",
    "title": "Testing Development Analyst",
    "date": "April 2015 - January 2016"
  },
  {
    "company": "Staples Inc., The Agency",
    "title": "Graphic Designer",
    "date": "May 2013 - April 2015"
  },
  {
    "company": "Sasaki Associates, Inc.",
    "title": "Graphic Designer",
    "date": "May 2011 - May 2013"
  },
  {
    "company": "Dana-Farber Cancer Institute",
    "title": "Graphic Design Intern",
    "date": "July 2010 - December 2010"
  },
  {
    "company": "Dana-Farber Cancer Institute",
    "title": "Graphic Design Intern",
    "date": "July 2009 - December 2009"
  }
];

jobs.display = function() {
  jobs.forEach(function(job) {
    $('#experience').append('<br><p class="text-bold text-uppercase">' + job.title + '</p>')
    $('#experience').append('<p>' + job.company + '<p class="text-light">' + job.date + '</p><br>');
  });
};

var education = [
  {
    "name": "Brandeis University",
    "grad": "Expected Graduation: Dec 2018",
    "degrees": "Masters in Software Engineering"
  },
  {
    "name": "Northeastern University",
    "grad": "Boston, MA, May 2011",
    "degrees": "BS in Graphic Design, Minor in Business Administration"
  }
];

education.display = function() {
  education.forEach(function(school) {
    $('#education').append('<br><h5 class="text-bold text-uppercase">' + school.name + '</h5>');
    $('#education').append('<p>' + school.degrees + '</p>');
    $('#education').append('<p class="text-light">' + school.grad + '</p>');
  });
};

var skills = {
  "skills": [
    "PHP",
    "Java",
    "Javascript/jQuery",
    "SQL",
    "HTML5/CSS3",
    "Bash Scripting",
    "Basic Linux & Command Line",
    "MVC Frameworks",
    "Git Source Control",
    "Object-Oriented Design",
    "Agile/Scrum Methodology",
    "Responsive Design",
    "Adobe Creative Suite"
  ]
};

skills.display = function() {
  skills.skills.forEach(function(skill) {
    $('#skills').append('<p>' + skill + '</p>')
  });
};

var courses = {
  "courses": [
    "Intro to Computer Science Fundamentals",
    "Discrete and Data Structures",
    "Algorithms",
    "Computer Systems",
    "Object Oriented Programming",
    "Software Development Methodologies",
    "Introduction to Web Programming",
    "Dynamic Web Application Development"
  ]
};

courses.display = function() {
  courses.courses.forEach(function(course) {
    $('#courses').append('<p>' + course + '</p>')
  });
};

jobs.display();
education.display();
skills.display();
courses.display();
