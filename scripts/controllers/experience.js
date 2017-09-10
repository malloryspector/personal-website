'use strict';

/**
 * @ngdoc function
 * @name portfolioSiteApp.controller:ExperienceCtrl
 * @description
 * # ExperienceCtrl
 * Controller of the portfolioSiteApp
 */
angular.module('portfolioSiteApp')
  .controller('ExperienceCtrl', ['experienceService', function(experience) {
    this.allJobs = experience.jobs;
  }]);
