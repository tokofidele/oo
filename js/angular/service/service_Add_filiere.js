// dataS = {
		// message: null,
		 
	 
// };
 
//Le service de d'ajout d'un utilisateur'

ipescam.factory('service_Add_filiere', function($http) {


	/*
	 * Dans cette partie on fait appel
	 * 
	 */
	return {
 
 
//		
		serverRequest : function(data_filiere,$scope){
			
			 $http({
				 method: 'POST', 
				 url: "http://41.205.8.159/IpesServeur/client-controleur/cont_ajouter_filiere.php",
	            data: data_filiere
	            }).success (function(data) {
 	                $scope.result_add_filiere = data.result_add_filiere;       
	            });
			 
			
		},

		



	};
});







