
//Le service de d'ajout d'un utilisateur'

ipescam.factory('service_Add_diplome', function($http) {


	/*
	 * Dans cette partie on fait appel
	 * 
	 */
	return {
 
 
//		
		serverRequest : function(data_diplome,$scope){
			
			 $http({
				 method: 'POST', 
				 url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_ajouter_diplome.php",
	            data: data_diplome
	            }).success (function(data) {
 	                $scope.result_add_diplome = data.result_add_diplome;       
	            });
			 
			
		},

		



	};
});







