var portfolio = [
  {
    "name": "Recipe Box",
    "image": "recipe_box.jpg",
    "description": "Recipe Box is a web application where users can save and manage their favorite recipes.",
    "technologies": "HTML, CSS, JavaScript, PHP, Bootstrap, Laravel, Blade",
    "url": "http://recipe-box.malloryspector.com",
    "github": "https://github.com/malloryspector/recipe-app"
  },
  {
    "name": "Developers Best Friend",
    "image": "developers_best_friend.jpg",
    "description": "Developer's Best Friend is a web application, which includes tools to help generate random content.",
    "technologies": "HTML, CSS, PHP, Bootstrap, Laravel",
    "url": "http://developers-best-friend.malloryspector.com",
    "github": "https://github.com/malloryspector/developers-best-friend"
  },
  {
    "name": "HTML Parser",
    "image": "html_parser.jpg",
    "description": "A parser that determines whether tags are being used correctly, and if they are, tries to emulate their effect in text.",
    "technologies": "C using stacks to keep track of open tags",
    "url": "",
    "github": "https://github.com/malloryspector/html-parser"
  }
];

portfolio.display = function() {
  portfolio.forEach(function(project) {
    var data = '<div class="feature-block"><img src="images/' + project.image + '"><br><br><h4 class="text-info-title text-bold text-uppercase">' + project.name + '</h4>';

    data += '<p>' + project.description + ' Technologies Used: ' + project.technologies + '</p>';

    data += '<ul class="text-uppercase">';

    if (project.url) {
      data += '<a href="' + project.url + '" target="_blank"><li class="project-button">View Project</li></a>';
    }

    if (project.github) {
      data += '<a href="' + project.github + '" target="_blank"><li class="project-button">Github</li></a>';
    }

    data += '</ul></div>';

    $('.projects').append(data);
  });
}

portfolio.display();
