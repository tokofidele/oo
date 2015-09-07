var ipescam = angular.module('IPESCam', []).directive('liJqMobile', function() {
    return function($scope, el) {
        console.log('liJqMobile');
        $(el).hide();
        setTimeout(function() {
            $scope.$on('$viewContentLoaded', el.parent().listview('refresh'))
        }, 1);
        $(el).show();
    }
}).directive('selectMenuRefresh', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var unbindWatcher = scope.$watch(attrs.ngModel, function(newValue, oldValue) {
                if (newValue && oldValue === undefined) {
                    element.selectmenu('refresh');
                    unbindWatcher();
                }
            });
        }
    };
}).directive('jqmCollapsibleRepeat', function () {
  return function (scope, element, attrs) {
    if (scope.$last) {
        $(element).parent().trigger("create");
    }
  };
});


