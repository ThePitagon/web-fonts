/**
 * Created by Travis Tran on 7/8/2017.
 */
(function () {
    'use strict';
    angular.module('App', ['ngResource', 'ngCookies', 'ngMaterial'])
        .config(function($mdThemingProvider, $mdAriaProvider) {
            $mdThemingProvider.theme('default');
        })
        .controller('AppCtrl', function($scope) {
            // Define functions
            // Initialization Routine
            $scope.fontFamilies = ['Noto Sans', 'Noto Sans UI', 'Noto Serif'];
            $scope.fontWeights = ['400', '700', 'normal', 'bold', 'bolder', 'lighter'];
            $scope.fontStyles = ['normal', 'italic'];
            $scope.formValue = {}
            $scope.formValue.fontFamily = $scope.fontFamilies[0];
            $scope.formValue.fontWeight = $scope.fontWeights[0];
            $scope.formValue.fontStyle = $scope.fontStyles[0];
            $scope.formValue.fontSize = 24;
            $scope.formValue.text = 'Here is preview text.';
        });
})();