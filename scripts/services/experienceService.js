'use strict';

/**
 * @ngdoc service
 * @name portfolioSiteApp.experienceService
 * @description
 * # experienceService
 * Service in the portfolioSiteApp
 */
angular.module('portfolioSiteApp')
  .service('experienceService', function() {
    this.jobs = [
      {
        "company": "Wayfair",
        "jobs": [
          {
            "title": "Software Engineer, January 2016 - August 2017",
            "description": [
              "Worked on the Development Platforms team, responsible for managing and developing tools and technical systems that enhance the efficiency of Engineering.",
              "Collaborated with feature development teams to help automate pieces of the development workflow to support continuous integration and deployment.",
              "Developed, researched, and managed both open-source libraries and internally created tools.",
              "Responsible for teaching testing trainings and advising on testing best practices."
            ]
          },
          {
            "title": "Testing Development Analyst, April 2015 - January 2016",
            "description": [
              "Worked closely with Agile software development teams to conduct manual testing of site appearance, functionality and performance across all brands.",
              "Created testing plans to ensure site functionality and helped to drive process, technical and operational improvements.",
              "Converted selenium acceptance tests from an internally developed framework to the open source Codeception framework and provided additional testing coverage."
            ]
          }
        ]
      },
      {
        "company": "Staples Inc., The Agency",
        "jobs": [
          {
            "title": "Graphic Designer, May 2013 - April 2015",
            "description": [
              "Worked directly with copywriters, designers, account service and marketing partners to create effective customer facing materials.",
              "Managed high workload volume consisting of print projects, seasonal campaigns, emails, landing pages, marketing materials and online banners.",
              "Brainstormed, created, presented and executed seasonal campaigns, with deliverables that included in-store signage for over 1,400 locations."
            ]
          }
        ]
      },
      {
        "company": "Sasaki Associates, Inc.",
        "jobs": [
          {
            "title": "Graphic Designer, May 2011 - May 2013",
            "description": [
              "Collaborated with marketing professionals, principals and associates to create a variety of visual marketing materials for corporate pursuits, including ads, e-cards, trade show booths, brochures, award submissions and presentations.",
              "Ensured brand and visual graphic standards were upheld and acted as a resource for any technical or design questions."
            ]
          }
        ]
      },
      {
        "company": "Dana-Farber Cancer Institute",
        "jobs": [
          {
            "title": "Graphic Design Intern, July 2010 - December 2010",
            "description": [
              "Created marketing collateral materials for the Communications Department.",
              "Responsible for designing the quarterly Patient Family newspaper Side by Side.",
              "Worked on introductions for video projects and animations in After Effects.",
              "Produced new marketing for the opening of the new Yawkey Building."
            ]
          },
          {
            "title": "Graphic Design Intern, July 2009 - December 2009",
            "description": [
              "Designed various marketing collateral materials including brochures, posters and signage for the Communications Department.",
              "Assisted the Art Director and Senior Designers with brochure and newspaper art.",
              "Created medical and editorial illustrations for newspapers and magazines.",
              "Assisted with magazine design and photography for Paths of Progress magazine."
            ]
          }
        ]
      },
      {
        "company": "Vanasse Hangen Brustlin, Inc.",
        "jobs": [
          {
            "title": "Graphic Design Assistant, July 2008 - December 2008",
            "description": [
              "Worked as part of the Marketing/Communications Department to produce covers, graphs, org charts, presentations, project boards and signage for promotional events.",
              "Responsible for editing photos and managing the Media Bin image library."
            ]
          }
        ]
      }
    ]
  });
