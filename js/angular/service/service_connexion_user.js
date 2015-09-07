
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
                url: "http://41.205.8.159/IpesServeur/client-controleur/cont_connexion_utilisateur.php",
                data: postData
            }).success(function(data) {

                if (data.admin == 2)
                {
                    window.loggedIn = "admin_region";
                    $("#popupLogin").popup("close");

                }
                else
                if (data.client == '1')
                {

                    window.loggedIn = 'region';
                    $("#popupLogin").popup("close");

                }
                else
                {

                    $scope.resultat_connexion = data.error;


                }


            });


       },
    };
});







