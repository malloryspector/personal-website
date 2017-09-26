var portfolio = [
  {
    "name": "Recipe Box",
    "description": "Lorem Ipsum",
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Bootstrap",
      "Laravel",
      "Blade"
    ],
    "url": "",
    "github": ""
  },
  {
    "name": "Developers Best Friend",
    "description": "Lorem Ipsum",
    "technologies": [
      "HTML",
      "CSS",
      "PHP",
      "Bootstrap",
      "Laravel"
    ],
    "url": "",
    "github": ""
  }
];

portfolio.display = function() {
  portfolio.forEach(function(project) {
    var data = '<div class="feature-block"><img src="images/test.png"><h4>' + project.name + '</h4>';

    data += '<p>' + project.description + '</p>';

    project.technologies.forEach(function(tech) {
      data += tech + ' ';
    });

    data += '</div>';
    $('#projects').append(data);
  });
}

portfolio.display();
