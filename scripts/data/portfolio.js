var portfolio = [
  {
    "name": "Recipe Box",
    "description": "Recipe Box is a web application where users can save and manage their favorite recipes.",
    "technologies": "HTML, CSS, JavaScript, PHP, Bootstrap, Laravel, Blade",
    "url": "",
    "github": "https://github.com/malloryspector/recipe-app"
  },
  {
    "name": "Developers Best Friend",
    "description": "Developer's Best Friend is a web application, which includes tools to help generate random content.",
    "technologies": "HTML, CSS, PHP, Bootstrap, Laravel",
    "url": "",
    "github": "https://github.com/malloryspector/developers-best-friend"
  }
];

portfolio.display = function() {
  portfolio.forEach(function(project) {
    var data = '<div class="feature-block"><img src="images/test.png"><br><br><h4 class="text-info-title text-bold text-uppercase">' + project.name + '</h4>';

    data += '<p>' + project.description + ' Technologies Used: ' + project.technologies + '</p>';

    data += '<ul class="text-uppercase"><a href="' + project.url + '" target="_blank"><li class="project-button">View Project</li></a>';

    data += '<a href="' + project.github + '" target="_blank"><li class="project-button">Github</li></a></ul>';

    data += '</div>';
    $('#projects').append(data);
  });
}

portfolio.display();
