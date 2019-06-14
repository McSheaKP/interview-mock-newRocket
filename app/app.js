var newRocketApp = angular.module('newRocketApp', []);

//prep before app runs, like routing
// newRocketApp.config(function(){

// });

// //will fire when app runs
// newRocketApp.run(function(){

// })

//allows you to import data into the particular html element
newRocketApp.controller('dataController', function($scope){
    $scope.message = "hey ya'll";
    $scope.ninjas = 'ninja';

    //mock data from IT ticketing api
    $scope.myItTickets = [
        {
            subject: 'Engineering Laptop - HP ZBook 17 G3 Bundle',
            req: 'REQ0078372',
            time: '13h',
        },
        {
            subject: 'Engineering Laptop - HP ZBook 17 G3 Bundle',
            req: 'REQ0078371',
            time: '7d',
        },
        {
            subject: '3 requested items',
            req: 'REQ0078333',
            time: '17d',
        }
    ];

    //mock data from Latest news api
    $scope.latestNews = [
        {
            title: 'GBS Portal Now Live!',
            time: '24d',
            category: 'General'
        },
        {
            title: 'GBS Portal Now Live!',
            time: '24d',
            category: 'General'
        }
    ]

});