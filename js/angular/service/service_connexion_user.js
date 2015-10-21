
//Le service de connexion d'un utilisateur a l'apllication'

ipescam.factory('service_connexion_user', function($http) {


    /*
     * Dans cette partie on fait appel on verifie si lutilisateur est enregistrer et si oui 
     * on ouffre le template correspondant
     */


    return {
        // Cette fonction retourne le tableau d'informations
//		 getData: function() {
//                     
//			 return data1;
//		 },
//                 

        serverRequest: function(postData, $scope) {

      

            $http({
                method: 'POST',
                url: "http://192.168.0.254/web/IpesServeur/client-controleur/cont_connexion_utilisateur.php",
                data: postData
            }).success(function(data) {

                $scope.showLoader = false;

                if (data.admin == 2)
                {
                    window.loggedIn = "admin_region";
                $scope.loader.loading = false ;
                }
                else
                if (data.client == '1')
                {
                   
                window.loggedIn = 'region';
                  $scope.loader.loading = false ;
                  
                }
                else
                {

                    $scope.resultat_connexion = data.error;
                      $scope.loader.loading = false ;
                }



            });


        },
    };
});




