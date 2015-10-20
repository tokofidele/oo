// dataS = {
		// message: null,
		 
	 
// };
 
//Le service de d'ajout d'un utilisateur'

ipescam.factory('service_Add_tutele', function($http) {


	/*
	 * Dans cette partie on fait appel
	 * 
	 */
	return {
 
 
//		
		serverRequest : function(data_tutelle,$scope){
			
			 $http({
				 method: 'POST', 
				 url: "http://41.205.18.31:81/ipes/IpesServeur/client-controleur/cont_ajouter_tutelle.php",
	            data: data_tutelle
	            }).success (function(data) {
 	                $scope.result_add_tutelle = data.result_add_tutelle;       
	            });
			 
			
		},

		



	};
});







