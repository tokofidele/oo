// dataS = {
		// message: null,
		 
	 
// };
 
//Le service de d'ajout d'un utilisateur'

ipescam.factory('service_AddCompte', function($http) {


	/*
	 * Dans cette partie on fait appel
	 * 
	 */
	return {
 

		// Cette fonction retourne le tableau d'informations
//		 getData: function() {
//			 return 'tokus fido';
//		 },
//		
		serverRequest : function(postData,$scope){
			
			 $http({
				 method: 'POST', 
				 url: "http://41.205.8.159/IpesServeur/client-controleur/cont_ajouter_utilisateur.php",
	            data: postData
	            }).success (function(data) {
 	                $scope.resultat_compte = data.result;       
	            });
			 
			
		},

		



	};
});







