 
 
//Le service de d'ajout d'un utilisateur'

ipescam.factory('service_Add_adresse_ipes', function($q,$http) {


        
	return {
            
            
 
 
 		// fonction qui ajoute une adresse a un  ipes
		serverRequest : function(data_adresse_ipes,$scope){
			
			 $http({
				 method: 'POST', 
				 url: "http://41.205.18.31:81/ipes/IpesServeur/client-controleur/cont_ajouter_adresse_ipes.php",
	            data: data_adresse_ipes
	            }).success (function(data) {
 	                $scope.result_add_adresse_ipes = data.result_add_adresse_ipes;       
	            });
			 
			
		},
                
                // fonction qui ajoute un quartier a un ipes
		serverRequest1 : function(data_quartier_ipes,$scope){
			
			 $http({
				 method: 'POST', 
				 url: "http://41.205.18.31:81/ipes/IpesServeur/client-controleur/cont_ajouter_quartier_ipes.php",
	            data: data_quartier_ipes
	            }).success (function(data) {
 	                $scope.result_add_quartier_ipes = data.result_add_quartier_ipes;       
	            });
			 
			
		},

		



	};
});







