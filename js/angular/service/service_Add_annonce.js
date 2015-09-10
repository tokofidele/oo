// dataS = {
		// message: null,
		 
	 
// };
 
//Le service de d'ajout d'un utilisateur'

ipescam.factory('service_Add_annonce', function($http) {


	/*
	 * Dans cette partie on fait appel
	 * 
	 */
	return {
 
 
//		
		serverRequest : function(data_annonce,$scope){
			
			 $http({
				 method: 'POST', 
				 url: "http://41.205.18.31:81/ipes/IpesServeur/client-controleur/cont_ajouter_annonce.php",
	            data: data_annonce
	            }).success (function(data) {
 	                $scope.result_add_annonce = data.result_add_annonce;       
	            });
			 
			
		},

		



	};
});







