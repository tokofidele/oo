// dataS = {
		// message: null,
		 
	 
// };
 
//Le service de d'ajout d'un utilisateur'

ipescam.factory('service_Add_etab', function($q,$http) {


	/*
	 * Dans cette partie on fait appel
	 * 
	 */
        var data_ipesName={};
        var data_etab_ipes={};
        var data_dipome_etab={};
        var data_filiere_dipome={};
        var data_specialite_filiere={};
        
        
	return {
            
            // renvoi la liste des nom ipes
             getData_ipesName: function() 
                 {
                   
                        return data_ipesName;
 
		 },
                  
                // renvoi la liste des etablissement  en fonction des nom ipes choisie
             getData_etab_ipes: function() 
                 {
                   
                        return data_etab_ipes;
 
		 },
                 
              
                 
          // renvoi la liste des diplome  en fonction des etablissements choisie
             getData_dipome_etab: function() 
                 {
                   
                        return data_dipome_etab;
         	 },
                 
                     // renvoi la liste des filiere en fonction des diplome choisie
             getData_filiere_dipome: function() 
                 {
                   
                        return data_filiere_dipome;
 
		 },
            
            
               // renvoi la liste des specialite  en fonction des filiere choisie
             getData_specialite_filiere: function() 
                 {
                   
                        return data_specialite_filiere;
 
		 },
            
             // renvoi la liste des etablissement  en fonction des nom ipes choisie
               serverRequest2 : function(data_etabl_ipes){
			
			     
                        var deferred = $q.defer();
                            $http({
                                      method: 'POST', 
                                      url: "http://41.205.18.31:81/ipes/IpesServeur/client-controleur/cont_data_etab_ipes.php",
                                      data: {'nom_ipes':data_etabl_ipes}
                                   
                                 }).success (function(data)
                                 {

//                                    $scope.data_Ipes_all=data; 
//                                    data_Ipes_all=$scope.data_Ipes;
                                    data_etab_ipes=data;
                                    deferred.resolve(data_etab_ipes);
                               
                                });   return deferred.promise;                                            
			 
			
		},
                
                
 // renvoi la liste des diplome  en fonction des etablissements choisies
               serverRequest3 : function(data_diplome_etabl){
			
			     
                        var deferred = $q.defer();
                            $http({
                                      method: 'POST', 
                                      url: "http://41.205.18.31:81/ipes/IpesServeur/client-controleur/cont_data_diplome_etab.php",
                                      data: {'nom_etabl':data_diplome_etabl}
                                   
                                 }).success (function(data)
                                 {

//                                    $scope.data_Ipes_all=data; 
//                                    data_Ipes_all=$scope.data_Ipes;
                                    data_dipome_etab=data;
                                    deferred.resolve(data_dipome_etab);
                               
                                });   return deferred.promise;                                            
			 
			
		},
            
            
                            
 // renvoi la liste des filiere  en fonction des diplome choisis
               serverRequest4 : function(data_filiere_diplome){
			
			     
                        var deferred = $q.defer();
                            $http({
                                      method: 'POST', 
                                      url: "http://41.205.18.31:81/ipes/IpesServeur/client-controleur/cont_data_filiere_diplome.php",
                                      data: {'nom_diplome':data_filiere_diplome}
                                   
                                 }).success (function(data)
                                 {

//                                    $scope.data_Ipes_all=data; 
//                                    data_Ipes_all=$scope.data_Ipes;
                                    data_filiere_dipome=data;
                                    deferred.resolve(data_filiere_dipome);
                               
                                });   return deferred.promise;                                            
			 
			
		},
            
             // renvoi la liste des specialite  en fonction des filiere choisis
               serverRequest5 : function(data_filiere_diplome){
			
			     
                        var deferred = $q.defer();
                            $http({
                                      method: 'POST', 
                                      url: "http://41.205.18.31:81/ipes/IpesServeur/client-controleur/cont_data_specialite_filiere.php",
                                      data: {'nom_filiere':data_filiere_diplome}
                                   
                                 }).success (function(data)
                                 {

//                                    $scope.data_Ipes_all=data; 
//                                    data_Ipes_all=$scope.data_Ipes;
                                    data_specialite_filiere=data;
                                    deferred.resolve(data_specialite_filiere);
                               
                                });   return deferred.promise;                                            
			 
			
		},
            
            // fonction qui renvoi la liste des nom ipes
               serverRequest1 : function(data_ipes_name){
			
			     
                        var deferred = $q.defer();
                            $http({
                                      method: 'POST', 
                                      url: "http://41.205.18.31:81/ipes/IpesServeur/client-controleur/cont_renvoi_ipes_name.php",
                                      data: {'region':data_ipes_name}
                                   
                                 }).success (function(data)
                                 {

//                                    $scope.data_Ipes_all=data; 
//                                    data_Ipes_all=$scope.data_Ipes;
                                    data_ipesName=data;
                                    deferred.resolve(data_ipesName);
                               
                                });   return deferred.promise;                                            
			 
			
		},
 
 
//		// fonction qui ajoute un etablissement ipes
		serverRequest : function(data_etab,$scope){
			
			 $http({
				 method: 'POST', 
				 url: "http://41.205.18.31:81/ipes/IpesServeur/client-controleur/cont_ajouter_etab.php",
	            data: data_etab
	            }).success (function(data) {
 	                $scope.result_add_etab = data.result_add_etab;       
	            });
			 
			
		},

		



	};
});







