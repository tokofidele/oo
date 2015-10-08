// dataS = {
		// message: null,
		 
	 
// };
 
//Le service de d'ajout d'un utilisateur'

ipescam.factory('service_Add_semestre', function($http) {


	/*
	 * Dans cette partie on fait appel
	 * 
	 */
	return {
 
 
//		
		serverRequest : function(data_option,$scope){
			
			 $http({
				 method: 'POST', 
				 url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_ajouter_semestre.php",
	            data: data_option
	            }).success (function(data) {
 	                $scope.result_add_semestre = data.result_add_semestre;       
	            });
			 
			
		},

		



	};
});







