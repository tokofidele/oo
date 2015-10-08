// dataS = {
		// message: null,
		 
	 
// };
 
//Le service de d'ajout d'un piece de dossier candidature'

ipescam.factory('service_Add_piece', function($http) {


	/*
	 * Dans cette partie on fait appel
	 * 
	 */
	return {
 
 
//		
		serverRequest : function(data_piece,$scope){
			
			 $http({
				 method: 'POST', 
				 url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_ajouter_piece.php",
	            data: data_piece
	            }).success (function(data) {
 	                $scope.result_add_piece = data.result_add_piece;       
	            });
			 
			
		},

		



	};
});







