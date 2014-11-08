/**
 * Navigation footer directive.
 *
 * Purpose of this directive is to render application footer navigation.
 *
 * @todo Add version info parsing
 */
(function() {
    'use strict';

    angular.module('frontend.components.directives')
        .directive('navigationFooter', function directive() {
            return {
                restrict: 'E',
                replace: true,
                scope: {},
                templateUrl: '/frontend/components/Directives/Partials/footer.html'
            };
        });
}());
