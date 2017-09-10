'use strict';

/**
 * @ngdoc function
 * @name portfolioSiteApp.controller:EducationCtrl
 * @description
 * # EducationCtrl
 * Controller of the portfolioSiteApp
 */
angular.module('portfolioSiteApp')
  .controller('EducationCtrl', function() {
    this.schools = [
      {
        'name': 'Brandeis University',
        'grad': 'Expected Graduation: Dec 2018',
        'degrees': ['Masters in Software Engineering']
      },
      {
        'name': 'Northeastern University',
        'grad': 'Boston, MA, May 2011',
        'degrees': [
          'BS in Graphic Design',
          'Minor in Business Administration'
        ]
      }
    ];
  });
