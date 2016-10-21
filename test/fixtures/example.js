import template from './example.html!text';

export const app = angular.module('mnubo.example', [
    'mnubo.core',
])
.config(config)
.run(run);

/**
 * @ngInject
 */
function config($stateProvider, $urlRouterProvider) {
    $stateProvider.state('example', {
        url: '/example?mql',
        views: {
            main: {
                template: template,
                controller: class Example { },
                controllerAs: 'vm'
            }
        },
        resolve: {
            /**
             * @ngInject
             */
            param: function(searchService) {
                return searchService.runFunction({
                    showReports: false
                }).$promise.then(function(data) {
                    return data;
                });
            },
        }
    });

    $urlRouterProvider.otherwise('/example');
}

/**
 * @ngInject
 */
function run($translate) {
    const emptyArray = [];
    const emptyObject = {};

    $translate([]).then(angular.noop);

    emptyArray.push('test');
    emptyObject.foo = 'bar';
}
