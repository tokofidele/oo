// dataS = {
		// message: null,
		 
	 
// };
 
//Le service de d'ajout d'un utilisateur'

ipescam.factory('service_Add_IPES', function($http) {


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
		serverRequest : function(data_ipes,$scope){
			
			 $http({
				 method: 'POST', 
				 url: "http://41.205.8.159/IpesServeur/client-controleur/cont_ajouter_ipes.php",
	            data: data_ipes
	            }).success (function(data) {
 	                $scope.result_add_ipes = data.result_add_ipes;       
	            });
			 
			
		},

		



	};
});







