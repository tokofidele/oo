 
 
//Le service de d'ajout d'un utilisateur'

ipescam.factory('service_Add_adresse_ipes', function($q,$http) {


        
	return {
            
            
 
 
//		// fonction qui ajoute un etablissement ipes
		serverRequest : function(data_adresse_ipes,$scope){
			
			 $http({
				 method: 'POST', 
				 url: "http://41.205.8.159/IpesServeur/client-controleur/cont_ajouter_adresse_ipes.php",
	            data: data_adresse_ipes
	            }).success (function(data) {
 	                $scope.result_add_adresse_ipes = data.result_add_adresse_ipes;       
	            });
			 
			
		},

		



	};
});






