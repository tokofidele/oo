
ipescam.controller('get_Ipes_region', ['$scope', 'service_Liste_Ipes', function($scope, service_Liste_Ipes)

    {

        $scope.nom_region = function(path)
        {
            var promise = service_Liste_Ipes.serverRequest(path);
            promise.then(function()
            {
                window.loggedIn = 'liste_ipes_region';

            });
        }

    }]).controller('head_nom_region_liste_ipes', ['$scope', 'service_Liste_Ipes', function($scope, service_Liste_Ipes)
            //nom des region dans le template head de la liste des ipes et renvois au template precedent sur le clic
            {
                $scope.name_region = service_Liste_Ipes.getData_region_name();

                // retourne a la liste des Region
                $scope.region = function()
                {
                    window.loggedIn = 'region';
                }

            }]).controller('affiche_ipes_region', ['$scope', 'service_Liste_Ipes', 'service_gestion_ipes', function($scope, service_Liste_Ipes, service_gestion_ipes)

    {
        $scope.data_Ipes = service_Liste_Ipes.getData(); // affiche la liste des ipes par region choisie et gere le click sur l'ipes choisie
        $scope.name_region = service_Liste_Ipes.getData_region_name();  //recupere le nom de la  region cliquée


        // recupere l'id de l'ipes choisie et appelle le template correspondant coté region/ ipes
        $scope.go_id_ipes = function(path)
        {


            //recupere le nom et le champs presentation de lipes cliquee a base de lid
            service_gestion_ipes.serverRequest5(path);

            //recupere le nom de la region de ipes clique a base de id
            var promise = service_gestion_ipes.serverRequest6(path);

            promise.then(function()
            {
                $scope.region = service_gestion_ipes.getData_region_ipes();
                var region = $scope.region.region_ipes;



                if (region === 'Centre')
                    window.loggedIn = 'ipes_centre';
                else
                if (region === 'Adamaoua')
                    window.loggedIn = 'ipes_Adamaoua';
                else
                if (region === 'Est')
                    window.loggedIn = 'ipes_Est';
                else
                if (region === 'Extreme-Nord')
                    window.loggedIn = 'ipes_Extreme_Nord';
                else
                if (region === 'Littoral')
                    window.loggedIn = 'ipes_Littoral';
                else
                if (region === 'Nord')
                    window.loggedIn = 'ipes_Nord';
                else
                if (region === 'Nord-Ouest')
                    window.loggedIn = 'ipes_Nord_Ouest';
                else
                if (region === 'Ouest')
                    window.loggedIn = 'ipes_Ouest';
                else
                if (region === 'Sud')
                    window.loggedIn = 'ipes_Sud';
                else
                if (region === 'Sud-Ouest')
                    window.loggedIn = 'ipes_Sud_Ouest';



            });


        }
    }]).controller('head_nom_ipes', ['$scope', 'service_gestion_ipes', function($scope, service_gestion_ipes)
            //  gestion du nom ipes suivant le clic sur la liste des ipes
                    //liste des item du menu d'un ipes
                    {


                        $scope.ipes_menu = service_gestion_ipes.getData_menu();
                        $scope.ipes_name_presentation = service_gestion_ipes.getData_nom_presentation_ipes();


                    }]).controller('affiche_ipes_all', ['$scope', 'service_gestion_ipes', function($scope, service_gestion_ipes)
                    //  gestion du nom ipes suivant le clic sur la liste des ipes
                            //liste des item du menu d'un ipes
                            {

                                // recupere l'id de l'ipes choisie et appelle le template correspondant coté recherche ipes
                                $scope.go_id_ipes_all = function(path)
                                {


                                    //recupere le nom et le champs presentation de lipes cliquee a base de lid
                                    service_gestion_ipes.serverRequest5(path);

                                    //recupere le nom de la region de ipes clique a base de id
                                    var promise = service_gestion_ipes.serverRequest6(path);

                                    promise.then(function()
                                    {
                                        $scope.region = service_gestion_ipes.getData_region_ipes();
                                        var region = $scope.region.region_ipes;


                                        if (region === 'Centre')
                                            window.loggedIn = 'ipes_centre_all';
                                        else
                                        if (region === 'Adamaoua')
                                            window.loggedIn = 'ipes_Adamaoua_all';
                                        else
                                        if (region === 'Est')
                                            window.loggedIn = 'ipes_Est_all';
                                        else
                                        if (region === 'Extreme-Nord')
                                            window.loggedIn = 'ipes_Extreme_Nord_all';
                                        else
                                        if (region === 'Littoral')
                                            window.loggedIn = 'ipes_Littoral_all';
                                        else
                                        if (region === 'Nord')
                                            window.loggedIn = 'ipes_Nord_all';
                                        else
                                        if (region === 'Nord-Ouest')
                                            window.loggedIn = 'ipes_Nord_Ouest_all';
                                        else
                                        if (region === 'Ouest')
                                            window.loggedIn = 'ipes_Ouest_all';
                                        else
                                        if (region === 'Sud')
                                            window.loggedIn = 'ipes_Sud_all';
                                        else
                                        if (region === 'Sud-Ouest')
                                            window.loggedIn = 'ipes_Sud_Ouest_all';



                                    });


                                }

                            }]).controller('nom_region_ipes', ['$scope', 'service_gestion_ipes', function($scope, service_gestion_ipes)
                            //  gestion du nom ipes suivant le clic sur la liste des ipes
                                    //liste des item du menu d'un ipes
                                    {


                                        $scope.region = service_gestion_ipes.getData_region_ipes();


                                    }]);