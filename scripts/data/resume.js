var jobs = [
  {
    "company": "Wayfair",
    "jobs": [
      {
        "title": "Software Engineer",
        "date": "January 2016 - August 2017"
      },
      {
        "title": "Testing Development Analyst",
        "date": "April 2015 - January 2016"
      }
    ]
  },
  {
    "company": "Staples Inc., The Agency",
    "jobs": [
      {
        "title": "Graphic Designer",
        "date": "May 2013 - April 2015"
      }
    ]
  },
  {
    "company": "Sasaki Associates, Inc.",
    "jobs": [
      {
        "title": "Graphic Designer",
        "date": "May 2011 - May 2013"
      }
    ]
  },
  {
    "company": "Dana-Farber Cancer Institute",
    "jobs": [
      {
        "title": "Graphic Design Intern",
        "date": "July 2010 - December 2010"
      },
      {
        "title": "Graphic Design Intern",
        "date": "July 2009 - December 2009"
      }
    ]
  }
];

jobs.display = function() {
  jobs.forEach(function(job) {
    $('#experience').append('<h4 class="text-bold text-uppercase text-info-title">' + job.company + '</h4>');
    job.jobs.forEach(function(pos) {
      $('#experience').append('<p>' + pos.title + '<br>' + pos.date + '</p>');
    })
  });
};

var education = [
  {
    "name": "Brandeis University",
    "grad": "Expected Graduation: Dec 2018",
    "degrees": [
      "Masters in Software Engineering"
    ]
  },
  {
    "name": "Northeastern University",
    "grad": "Boston, MA, May 2011",
    "degrees": [
      "BS in Graphic Design",
      "Minor in Business Administration"
    ]
  }
];

education.display = function() {
  education.forEach(function(school) {
    $('#education').append('<h4 class="text-bold text-uppercase text-info-title">' + school.name + '</h4><p>' + school.grad + '</p>');
    school.degrees.forEach(function(degree) {
      $('#education').append('<p>' + degree + '</p>');
    })
  });
};

var skills = {
  "skills": [
    "HTML5",
    "CSS3",
    "Javascript & jQuery",
    "PHP",
    "MVC Frameworks",
    "SQL",
    "Git Source Control",
    "Object-Oriented Design",
    "Agile/Scrum Methodology",
    "Responsive Design",
    "Adobe Creative Suite",
    "Basic Java",
    "Bash Scripting",
    "Basic Linux & Command Line"
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
