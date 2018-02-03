/**
 * Copyright reelyActive 2018
 * We believe in an open Internet of Things
 */

PLACES = [
  { path: "atrium/", img: "320x320.jpg" },
  { path: "dooh/", img: "320x320.jpg" },
  { path: "grocery/", img: "320x320.jpg" },
  { path: "hospital/", img: "320x320.jpg" },
  { path: "office/", img: "320x320.jpg" },
  { path: "office/callbooths/", img: "320x320.jpg" },
  { path: "office/conferenceroom/", img: "320x320.jpg" },
  { path: "office/conferenceroom/bright/", img: "320x320.jpg" },
  { path: "office/conferenceroom/comfy/", img: "320x320.jpg" },
  { path: "office/conferenceroom/dim/", img: "320x320.jpg" },
  { path: "office/conferenceroom/longtable/", img: "320x320.jpg" },
  { path: "office/conferenceroom/modern/", img: "320x320.jpg" },
  { path: "office/conferenceroom/quaint/", img: "320x320.jpg" },
  { path: "office/conferenceroom/roundtable/", img: "320x320.jpg" },
  { path: "office/conferenceroom/whiteboard/", img: "320x320.jpg" },
  { path: "office/elevators/", img: "320x320.jpg" },
  { path: "office/hallway/", img: "320x320.jpg" },
  { path: "office/hotdesking/", img: "320x320.jpg" },
  { path: "office/kitchen/", img: "320x320.jpg" },
  { path: "office/lounge/", img: "320x320.jpg" },
  { path: "office/nook/", img: "320x320.jpg" },
  { path: "office/reception/", img: "320x320.jpg" },
  { path: "office/supplies/", img: "320x320.jpg" },
  { path: "trainstation/", img: "320x320.jpg" },
  { path: "warehouse/", img: "320x320.jpg" }
];

PRODUCTS = [
  { path: "chair/", img: "240x240.jpg" }
];

PEOPLE = [
  { path: "mascots/barnowl/", img: "320x320.png" },
  { path: "mascots/barnacles/", img: "320x320.png" },
  { path: "mascots/barterer/", img: "320x320.png" },
  { path: "mascots/beaver/", img: "320x320.png" },
  { path: "mascots/chickadee/", img: "320x320.png" },
  { path: "mascots/cormorant/", img: "320x320.png" },
  { path: "mascots/cuttlefish/", img: "320x320.png" },
  { path: "mascots/json-silo/", img: "320x320.png" },
  { path: "mascots/starling/", img: "320x320.png" }
];


/**
 * stories Module
 * All of the JavaScript specific to the dashboard is contained inside this
 * angular module.  There are no external dependencies.
 */
angular.module('stories', [])

  /**
   * StoriesCtrl Controller
   * Handles the manipulation of all variables accessed by the HTML view.
   */
  .controller('StoriesCtrl', function($scope, $location) {
    $scope.baseUrl = $location.protocol() + '://' + location.host + '/';
    $scope.places = PLACES;
    $scope.products = PRODUCTS;
    $scope.people = PEOPLE;
  });
