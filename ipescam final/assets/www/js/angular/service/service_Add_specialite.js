// dataS = {
		// message: null,
		 
	 
// };
 
//Le service de d'ajout d'un utilisateur'

ipescam.factory('service_Add_specialite', function($http) {


	/*
	 * Dans cette partie on fait appel
	 * 
	 */
	return {
 
 
//		
		serverRequest : function(data_specialite,$scope){
			
			 $http({
				 method: 'POST', 
				 url: "http://41.205.8.159/IpesServeur/client-controleur/cont_ajouter_specialite.php",
	            data: data_specialite
	            }).success (function(data) {
 	                $scope.result_add_specialite = data.result_add_specialite;       
	            });
			 
			
		},

		



	};
});







