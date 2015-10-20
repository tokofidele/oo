 
//Le service de connexion d'un utilisateur a l'apllication'

ipescam.factory('service_Liste_Ipes', function($q, $http) {


    /*
     * Dans cette partie on fait appel on verifie si lutilisateur est enregistrer et si oui 
     * on ouffre le template correspondant
     */


    var datas = {};
    var data_Ipes_all = {};
    var data_ipes_annonce = {};
    var data_name_region={};
    var data_region_name={};  //nom de la region cliqué pour affiché e entete dans la liste des ipes
    
    
    return {
        
        
         // nom de la region cliqué pour affiché e entete dans la liste des ipes
        getData_region_name: function()
        {

            return data_region_name;

        },
        
        
        
   	 // Cette fonction retourne le tableau d'informations sue le nomdes region
        getData_name_region: function()
        {
         data_name_region=[{'nom_region':'Centre'},
             {'nom_region':'Adamaoua'},
             {'nom_region':'Est'},
             {'nom_region':'Extreme-Nord'},
             {'nom_region':'Littoral'},
             {'nom_region':'Nord'},
             {'nom_region':'Nord-Ouest'},
             {'nom_region':'Ouest'},
             {'nom_region':'Sud'},
             {'nom_region':'Sud-Ouest'},
         ];
      
             return data_name_region;

        },
        
        
//	 // Cette fonction retourne le tableau des ipes d'un centre
        getData: function()
        {

            return datas;

        },
//                 
//                 // Cette fonction retourne le tableau des ipes de tous les centre
        getData_all: function()
        {

            return data_Ipes_all;
        },
        
                   // Cette fonction retourne le tableau pour les annonces du centre
        getData_ipes_annonce: function()
        {

            return data_ipes_annonce;
        },
        
        
        //  liste les ipes par region   
        serverRequest: function(post_data,$scope) {
            
            data_region_name.nam_region=post_data;
            
            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: "http://41.205.18.31:81/ipes/IpesServeur/client-controleur/cont_affiche_ipes.php",
                data: {'region': post_data}
            }).success(function(data)
            {
                
             
                datas = data;
                $scope.loader.loading = false;
                
                deferred.resolve(datas);
                
              

            });
            return deferred.promise;
 
        },
        
        
        // liste tous les ipes present en base
        serverRequest1: function(post_data) {


            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: "http://41.205.18.31:81/ipes/IpesServeur/client-controleur/cont_affiche_ipes_all.php",
                data: {'region': post_data}

            }).success(function(data)
            {
 
                data_Ipes_all = data;
                deferred.resolve(data_Ipes_all);

            });
            return deferred.promise;


       },
       
       
       //  liste les annonce par centre et ipes  
        serverRequest2: function(post_data) {

            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: "http://41.205.18.31:81/ipes/IpesServeur/client-controleur/cont_affiche_ipes_annonce.php",
                data: {'region': post_data}
            }).success(function(data)
            {
                data_ipes_annonce = data;
                // datas.val='valeur';
                deferred.resolve(data_ipes_annonce);

            });
            return deferred.promise;
 
        },
       
       
       
       
       
    };
});







