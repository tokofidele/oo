
ipescam.controller('controler_affiche_Ipes_all', ['$scope', 'service_Liste_Ipes', '$timeout', function($scope, service_Liste_Ipes, $timeout)

    {

        var post_data = 'ipes_all'
        var promise = service_Liste_Ipes.serverRequest1(post_data);


        // Simulate loading data
        $timeout(function() {

            promise.then(function()
            {
                $scope.data_Ipes_all = service_Liste_Ipes.getData_all();

            }).then(function()
            {
                $scope.item = $scope.data_Ipes_all[0];
            });


        }, 2000);

     

    }]).controller('controler_lire_annonce', ['$scope', 'service_Liste_Ipes', function($scope, service_Liste_Ipes)
    {


        $scope.name_region = function(path)
        {

            var promise = service_Liste_Ipes.serverRequest2(path);
            promise.then(function()
            {
                $scope.data_annonce_ipes = service_Liste_Ipes.getData_ipes_annonce();
            });
        }



    }]).controller('liste_name_region', ['$scope', 'service_Liste_Ipes', function($scope, service_Liste_Ipes)
    {

        $scope.data_name_region = service_Liste_Ipes.getData_name_region();

    }]);