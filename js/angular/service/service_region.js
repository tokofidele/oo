// var datas = {
//		 'ville': null,
//		 'quartier': null,
//		 'image': null,
//		 'url':null,
//		 'nom_ipes':null,
//		 'accord_creation_ipes':null,
//		  'auto_ouverture_ipes':null,
//		 
//        };
//Le service de connexion d'un utilisateur'

ipescam.factory('service_region', function($http) {


	/*
	 * Dans cette partie on fait appel on verifie si lutilisateur est enregistrer et si oui 
	 * on ouffre le template correspondant
	 */
	return {
 

//		 Cette fonction retourne le tableau d'informations
        getData: function() {
                 var datas = {
		 'ville': null,
		 'quartier': null,
		 'image': null,
		 'url':null,
		 'nom_ipes':null,
		 'accord_creation_ipes':null,
		  'auto_ouverture_ipes':null,
		 
                       };
          return datas;
		 },
//		
		serverRequest : function(postData_Region,datas,$scope){
			
			$http({
			 method: 'POST', 
			 url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_affiche_ipes.php",
             data: postData_Region
              }).success (function(data) 
                          {
                                // datas.ville=data.ville;
								// datas.quartier=data.quartier;
								// datas.image=data.image;
								// datas.url=data.url;
								// datas.nom_ipes=data.nom_ipes;
								// datas.accord_creation_ipes=data.accord_creation_ipes;
								// datas.auto_ouverture_ipes=data.auto_ouverture_ipes;
								
							
                                                        
								  // datas.ville=data.ville;
                                                                   $scope.villes=data.ville;
//                                                                  $scope.villes=$rootScope.ville;
								// $scope.quartier=datas.quartier;
								// $scope.image=datas.image;
								// $scope.url=datas.url;
								// $scope.nom_ipes=datas.nom_ipes;
								// $scope.accord_creation_ipes=datas.accord_creation_ipes;
								// $scope.auto_ouverture_ipes=datas.auto_ouverture_ipes;
								
			                 	   window.location="ipes/index_centre.html";
								
                           });
                        
			 
			
		},

	
	};
});







