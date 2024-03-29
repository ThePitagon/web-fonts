/**
 * Created by Travis Tran on 7/8/2017.
 */
(function () {
    'use strict';
    angular.module('App', ['ngMaterial'])
        .controller('AppCtrl', function ($scope) {
            // Define functions
            $scope.loadByFamily = function (family) {
                for (var i = $scope.fonts.length - 1; i >= 0; i--) {
                    var font = $scope.fonts[i];
                    if (font.family == family) {
                        $scope.fontWeights = angular.copy(font.weights);
                        $scope.fontStyles = angular.copy(font.styles);
                        $scope.formValue.fontWeight = $scope.fontWeights[0];
                        $scope.formValue.fontStyle = $scope.fontStyles[0];
                        break;
                    }
                }
            };
            // Initialization Routine
            var DEF_STYLES = ['Normal', 'Italic'];
            $scope.fonts = [{
                family: 'Helvetica Neue',
                weights: [100, 300, 400, 500, 700],
                styles: DEF_STYLES
            }, {
                family: 'Helvetica Neue Condensed',
                weights: [700, 900],
                styles: DEF_STYLES
            }, {
                family: 'Open Sans',
                weights: [300, 700],
                styles: DEF_STYLES
            }, {
                family: 'Open Sans Condensed',
                weights: [300, 700],
                styles: DEF_STYLES
            }, {
                family: 'Noto Sans',
                weights: [400, 700],
                styles: DEF_STYLES
            }, {
                family: 'Noto Sans UI',
                weights: [400, 700],
                styles: DEF_STYLES
            }, {
                family: 'Noto Serif',
                weights: [400, 700],
                styles: DEF_STYLES
            }, {
                family: 'Roboto',
                weights: [100, 300, 400, 500, 700, 900],
                styles: DEF_STYLES
            }, {
                family: 'Roboto Condensed',
                weights: [300, 400, 700],
                styles: DEF_STYLES
            }, {
                family: 'Roboto Mono',
                weights: [100, 300, 400, 500, 700],
                styles: DEF_STYLES
            }, {
                family: 'Roboto Slab',
                weights: [100, 300, 400, 700],
                styles: ['Normal']
            }, {
                family: 'Segoe UI',
                weights: [200, 300, 400, 600, 700],
                styles: DEF_STYLES
            }, {
                family: 'Mulish',
                weights: [200, 300, 400, 500, 600, 700, 800, 900],
                styles: DEF_STYLES
            }];
            $scope.fontFamilies = [];
            $scope.fontWeights = [];
            $scope.fontStyles = [];
            for (var i = 0; i < $scope.fonts.length; i++) {
                $scope.fontFamilies.push($scope.fonts[i].family);
            }
            $scope.formValue = {};
            $scope.formValue.fontFamily = $scope.fontFamilies[0];
            $scope.formValue.fontWeight = $scope.fontWeights[0];
            $scope.formValue.fontStyle = $scope.fontStyles[0];
            $scope.formValue.fontSize = 24;
            $scope.formValue.text = 'Chúng tôi đã đạt tới độ cao rất lớn trong khí quyển vì bầu trời tối đen và các vì sao không còn lấp lánh. Ảo giác về đường chân trời khiến đám mây ảm đạm bên dưới lõm xuống và chiếc xe như trôi bồng bềnh giữa quả cầu khổng lồ tăm tối.';
            $scope.loadByFamily($scope.formValue.fontFamily);
        });
})();
