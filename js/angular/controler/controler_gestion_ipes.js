
ipescam.controller('cont_gestion_ipes', ['$scope', 'service_gestion_ipes', function($scope, service_gestion_ipes)

    {


        //gestion   des specialite:on clic sur la droite d'une specialite et
        // on recupere le planing de formation
        $scope.specialite_paning = function(path)
        {


            window.open('http://localhost/IpesServeur/Fchiers/M_2.pdf', "_blank", null);
            //service_gestion_ipes.serverRequest6(path);           

//               promise.then( function()
//               {               
//                   $scope.data_option= service_gestion_ipes.getData_option(); 
//               });


        }



    }]).controller('cont_gestion_menu_ipes', ['$scope', 'service_gestion_ipes', function($scope, service_gestion_ipes)

    {
         $scope.loader = {
            loading: false,
        };
        
        $scope.accueil = function()
        {
            window.loggedIn = 'accueil';
        }

        $scope.go_item_menu = function(menu)
        {
            if (menu == "Etablissmenets")
            {
                  $scope.loader.loading = true;
                //la ligne suivante recupere id ipes cliqué mis dans le tableau du service
                var id_ipes = service_gestion_ipes.getData_id_ipes($scope);

                var promise = service_gestion_ipes.serverRequest(id_ipes.id_ipes,$scope);
                promise.then(function()
                {
                    window.loggedIn = 'etablissement';
                });

            }





            else
            if (menu == "Localisation et Adresse")
            {
                //la ligne suivante recupere id ipes cliqué mis dans le tableau du service
                var id_ipes = service_gestion_ipes.getData_id_ipes($scope);

                service_gestion_ipes.serverRequest11(id_ipes.id_ipes,$scope);

                var promise = service_gestion_ipes.serverRequest7(id_ipes.id_ipes,$scope);

                promise.then(function()
                {
                    window.loggedIn = 'adresse_ipes';
                });

            }
            else

            if (menu == "Certification")
            {

            }
            else
            if (menu == "Agrément")
            {
                //la ligne suivante recupere id ipes cliqué mis dans le tableau du service
                var id_ipes = service_gestion_ipes.getData_id_ipes($scope);

                var promise = service_gestion_ipes.serverRequest8(id_ipes.id_ipes,$scope);
                promise.then(function()
                {
                    window.loggedIn = 'agrement_ipes';
                });

            }


        }

        //action pour les ipes du coté de la recherche  
        $scope.go_item_menu_all = function(menu)
        {

            $scope.accueil_all = function()
            {
                window.loggedIn = 'accueil_all';
            }


            if (menu == "Etablissmenets")
            {
                $scope.loader.loading = true;
                //la ligne suivante recupere id ipes cliqué mis dans le tableau du service
                var id_ipes = service_gestion_ipes.getData_id_ipes($scope);

                var promise = service_gestion_ipes.serverRequest(id_ipes.id_ipes,$scope);
                promise.then(function()
                {
                    window.loggedIn = 'etablissement_all';
                });

            }
            else
            if (menu == "Localisation et Adresse")
            {
                //la ligne suivante recupere id ipes cliqué mis dans le tableau du service
//             var id_ipes= service_gestion_ipes.getData_id_ipes();
//            
//             var promise = service_gestion_ipes.serverRequest7(id_ipes.id_ipes);
//             promise.then(function()
//             { 
//                 window.loggedIn = 'adresse_ipes_all';
//             });
//             

                //la ligne suivante recupere id ipes cliqué mis dans le tableau du service
                var id_ipes = service_gestion_ipes.getData_id_ipes($scope);

                service_gestion_ipes.serverRequest11(id_ipes.id_ipes,$scope);

                var promise = service_gestion_ipes.serverRequest7(id_ipes.id_ipes,$scope);

                promise.then(function()
                {
                    window.loggedIn = 'adresse_ipes_all';
                });



            }
            else
            if (menu == "Partenaires")
            {

            }

            else
            if (menu == "Agrément")
            {
                //la ligne suivante recupere id ipes cliqué mis dans le tableau du service
                var id_ipes = service_gestion_ipes.getData_id_ipes($scope);

                var promise = service_gestion_ipes.serverRequest8(id_ipes.id_ipes,$scope);
                promise.then(function()
                {
                    window.loggedIn = 'agrement_ipes_all';
                });

            }


        }

    }]).controller('gestion_menu_ipes', ['$scope', 'service_gestion_ipes', function($scope, service_gestion_ipes)

    {
         $scope.loader_etab = {
            loading: false,
        };
         $scope.loader_diplome = {
            loading: false,
        };
        
          $scope.loader_diplome_dossier = {
            loading: false,
        };
        
          $scope.loader_filiere = {
            loading: false,
        };
        
          $scope.loader_specialie = {
            loading: false,
        };
        
          $scope.loader_specialie_grille = {
            loading: false,
        };
        
        $scope.data_etablissement = service_gestion_ipes.getData_etablissement(); //liste des etablissements en fonction des ipes
        $scope.data_menu_adresse = service_gestion_ipes.getData_menu_adresse(); // menu adresse  d'un ipes
        $scope.data_adresse = service_gestion_ipes.getData_adresse_ipes(); // adresse en fonction d'un ipes
        $scope.data_quartier = service_gestion_ipes.getData_quartier_ipes(); // liste quartier d'un ipes

        $scope.data_agrement = service_gestion_ipes.getData_agrement_ipes(); // agrement en fonction d'un ipes 


        //gestion des etablissement:on clic sur un etablissement et
        // on recupere l'id de l'etablissement et on recherche le liste des diplome asscoié   

        $scope.go_id_etab = function(path)
        {
            
             
            $scope.loader_etab.loading = true;
            var promise = service_gestion_ipes.serverRequest1(path,$scope);

            promise.then(function()
            {
                $scope.data_diplome = service_gestion_ipes.getData_diplome($scope);
            });


        }


        //gestion  des diplome:on clic sur un diplome et
        // on recupere l'id du diplome et on recherche le liste des filieres asscoiées 
        $scope.go_id_diplome = function(path)
        {
             $scope.loader_diplome.loading = true;
            var promise = service_gestion_ipes.serverRequest2(path,$scope);

            promise.then(function()
            {
                $scope.data_filiere = service_gestion_ipes.getData_filiere($scope);
            });

        }

        //gestion  des diplome:on clic sur un diplome et
        // on recupere l'id du diplome et on recherche le liste des des piece du dossier de candidature pour  concourir a ce  diplome
        $scope.go_id_diplome_dossier = function(path)
        {
             $scope.loader_diplome_dossier.loading = true;
            var promise = service_gestion_ipes.serverRequest9(path,$scope);

            promise.then(function()
            {
                $scope.data_dossier_candidature = service_gestion_ipes.getData_dossier_candidature($scope);

            });

        }


        //gestion   des filiere:on clic sur une filiere et
        // on recupere l'id de la filiere et on recherche le liste des specialité asscoiées 
        $scope.go_id_filiere = function(path)
        {
              $scope.loader_filiere.loading = true;
            var promise = service_gestion_ipes.serverRequest3(path,$scope);

            promise.then(function()
            {
                $scope.data_specialite = service_gestion_ipes.getData_specialite($scope);
            });


        }

        //gestion   des specialite:on clic sur une specialite et
        // on recupere l'id de la specialite et on recherche le liste des option asscoiées 
        $scope.go_id_specialite = function(path)
        {
            $scope.loader_specialie.loading = true;
            var promise = service_gestion_ipes.serverRequest4(path,$scope);

            promise.then(function()
            {
                $scope.data_option = service_gestion_ipes.getData_option($scope);
            });



        }



        //gestion   des grilles enseignement:on clic sur une specialite et
        // on recupere l'id de la specialite et on recherche le liste des enseignement asscoiées 


        $scope.go_id_specialite_grille = function(path)
        {
            $scope.loader_specialie_grille.loading = true;
            var promise = service_gestion_ipes.serverRequest10(path,$scope);

            promise.then(function()
            {
                $scope.data_UE = service_gestion_ipes.getData_UE($scope);
            });


        }




    }]);