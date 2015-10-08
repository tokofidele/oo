// dataS = {
		// message: null,
		 
	 
// };
 
//Le service de d'ajout d'un utilisateur'

ipescam.factory('service_Add_planing', function($http) {


	/*
	 * Dans cette partie on fait appel
	 * 
	 */
	return {
 
 
//		
		serverRequest : function(data_planing,$scope){
			
			 $http({
				 method: 'POST', 
				 url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_ajouter_planing.php",
	            data: data_planing
	            }).success (function(data) {
 	                $scope.result_add_planing = data.result_add_planing;       
	            });
			 
			
		},

		



	};
});







