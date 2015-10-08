
//Le service de connexion d'un utilisateur a l'apllication'

ipescam.factory('service_gestion_ipes', function($q, $http) {


    /*
     * Dans cette partie on fait appel on verifie si lutilisateur est enregistrer et si oui 
     * on ouffre le template correspondant
     */


    var data_etablissement = {};
    var data_diplome = {};
    var data_filiere = {};
    var data_specialite = {};
    var data_agrement_ipes = {};
    var data_option = {};
    var data_nom_presentation_ipes = {};
    var data_region_ipes = {};
    var data_id_ipes = {};
    var data_adresse_ipes = {};
      var data_quartier_ipes = {};
    var data_menu_adresse = {};
     var data_dossier = {};
      var data_UE = {};
    return {
        // retourne la liste du menu d'un IPES
        getData_menu: function()
        {
            data_menu = [{'menu': 'Etablissmenets'},
                {'menu': 'Localisation et Adresse'},
               // {'menu': 'Partenaires'},
                {'menu': 'Certification'},
                {'menu': 'Agrément'},
              
            ];

            return data_menu;

        },
        
        // retourne la presentataion d'un ipes
        getData_region_ipes: function()
        {

            return data_region_ipes;

        },
        
        // retourne l'agrement d'un ipes
        getData_agrement_ipes: function()
        {

            return data_agrement_ipes;

        },
        // retourne l'adresse d'un ipes
        getData_adresse_ipes: function()
        {

            return data_adresse_ipes;

        },
        
         // retourne liste quartier d'un ipes
        getData_quartier_ipes: function()
        {

            return data_quartier_ipes;

        },
        
        
        // retourne la liste du menu qdresse d'un IPES
        getData_menu_adresse: function()
        {
            data_menu_adresse = [{'menu': 'Site web'},
                {'menu': 'Téléphone'},
                {'menu': 'Boite postale'},
                {'menu': 'Fax'},
                {'menu': 'Mail'},
                {'menu': 'Localisation'},
            ];

            return data_menu_adresse;

        },
        
        
        
        
        
        // retourne l'id ipes cliqué
        getData_id_ipes: function()
        {

            return data_id_ipes;

        },
        // retourne le nom de ipes clické
        getData_nom_presentation_ipes: function()
        {

            return data_nom_presentation_ipes;

        },
        // retourne la liste des etablissements
        getData_etablissement: function()
        {

            return data_etablissement;

        },
        // retourne la liste des diplome
        getData_diplome: function()
        {

            return data_diplome;

        },
        
         // retourne la liste des diplome
        getData_dossier_candidature: function()
        {

            return data_dossier;

        },
        
        
        // retourne la liste des filieres
        getData_filiere: function()
        {

            return data_filiere;

        },
        // retourne la liste des specialite
        getData_specialite: function()
        {

            return data_specialite;

        },
        
         // retourne la liste des unite d'enseignements d'unespecialite
        getData_UE: function()
        {

            return data_UE;

        },
        
        
        
        
        
        // retourne la liste des options
        getData_option: function()
        {

            return data_option;

        },
        //  liste les etablissements par clic sur un ipes   
        serverRequest: function(id_ipes) {

            var deferred = $q.defer();


            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_data_etablissement.php",
                data: {'id_ipes': id_ipes}
            }).success(function(data)
            {

//                                    $scope.data_Ipes=data; 
//                                    data_Ipes=$scope.data_Ipes;

                data_etablissement = data;
                // datas.val='valeur';
                deferred.resolve(data_etablissement);

            });
            return deferred.promise;


        },
        //  liste les diplome par clis sur un etablissements  
        serverRequest1: function(id_etab) {
            // ou sigle n'est rien d'autre que le path envoye ddepuis le controleur
            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_data_diplome.php",
                data: {'id_etabl': id_etab}
            }).success(function(data)
            {

//                                    $scope.data_Ipes=data; 
//                                    data_Ipes=$scope.data_Ipes;

                data_diplome = data;
                // datas.val='valeur';
                deferred.resolve(data_diplome);

            });
            return deferred.promise;


        },
        //  liste les filieres par clis sur un diplome  
        serverRequest2: function(id_diplome) {
            // ou sigle n'est rien d'autre que le path envoye ddepuis le controleur
            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_data_filiere.php",
                data: {'id_diplome': id_diplome}
            }).success(function(data)
            {

//                                    $scope.data_Ipes=data; 
//                                    data_Ipes=$scope.data_Ipes;

                data_filiere = data;
                // datas.val='valeur';
                deferred.resolve(data_filiere);

            });
            return deferred.promise;


        },
        //  liste les specialité par clis sur une filiere  
        serverRequest3: function(id_filiere) {
            // ou sigle n'est rien d'autre que le path envoye ddepuis le controleur
            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_data_specialite.php",
                data: {'id_filiere': id_filiere}
            }).success(function(data)
            {

//                                    $scope.data_Ipes=data; 
//                                    data_Ipes=$scope.data_Ipes;

                data_specialite = data;
                // datas.val='valeur';
                deferred.resolve(data_specialite);

            });
            return deferred.promise;


        },
        //  liste les options par clis sur une spécialité  
        serverRequest4: function(id_spécialite) {
            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_data_option.php",
                data: {'id_spécialite': id_spécialite}
            }).success(function(data)
            {

//                                    $scope.data_Ipes=data; 
//                                    data_Ipes=$scope.data_Ipes;

                data_option = data;
                // datas.val='valeur';
                deferred.resolve(data_option);

            });
            return deferred.promise;


        },
        //  recupere le nom et presentation de l'ipes cliqué  
        serverRequest5: function(id_ipes) {

            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_data_nom_presentation_ipes.php",
                data: {'id_ipes': id_ipes}
            }).success(function(data)
            {


                data_nom_presentation_ipes = data;

                deferred.resolve(data_nom_presentation_ipes);

            });
            return deferred.promise;


        },
        
        
        //  recupere le champs region  de ipes  cliqué
        serverRequest6: function(id_ipes) {
//            // la ligne suivante renvoi l'id de l'ipes cliqué qui sera utilisé dans le menu pour lister les etablissemet d'un ipes
            data_id_ipes.id_ipes = id_ipes;

            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_data_region_ipes.php",
                data: {'id_ipes': id_ipes}
            }).success(function(data)
            {


                data_region_ipes = data;

                deferred.resolve(data_region_ipes);

            });
            return deferred.promise;


        },
//        
//        
        
        //  recupere  l'adresse d'un ipes  
        serverRequest7: function(id_ipes) {
            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_data_adresse_ipes.php",
                data: {'id_ipes': id_ipes}
            }).success(function(data)
            {

                data_adresse_ipes = data;
                // datas.val='valeur';
                deferred.resolve(data_adresse_ipes);

            });
            return deferred.promise;


        },
        
        
        
        
        //  recupere la l'agrement d'un ipes  
        serverRequest8: function(id_ipes) {
            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_data_agrement_ipes.php",
                data: {'id_ipes': id_ipes}
            }).success(function(data)
            {

//                                    $scope.data_Ipes=data; 
//                                    data_Ipes=$scope.data_Ipes;

                data_agrement_ipes = data;
                // datas.val='valeur';
                deferred.resolve(data_agrement_ipes);

            });
            return deferred.promise;


        },
        
        
         //  recupere le champs dossier candidature du diplome choisi
        serverRequest9: function(id_diplome) {
 

            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_data_dossier_candidature.php",
                data: {'id_diplome': id_diplome}
            }).success(function(data)
            {


                data_dossier = data;

                deferred.resolve(data_dossier);

            });
            return deferred.promise;


        },
        
        
           //  prend id specialité en paramettre et recherche les unite enseignement liée.
        serverRequest10: function(id_spécialite) {
 

            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_data_unite_enseignement.php",
                data: {'id_spécialite': id_spécialite}
            }).success(function(data)
            {


                data_UE = data;

                deferred.resolve(data_UE);

            });
            return deferred.promise;


        },
        
         //  recupere  la liste des quartier  d'un ipes  
        serverRequest11: function(id_ipes) {
            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_data_quartier_ipes.php",
                data: {'id_ipes': id_ipes}
            }).success(function(data)
            {

                data_quartier_ipes = data;
                // datas.val='valeur';
                deferred.resolve(data_quartier_ipes);

            });
            return deferred.promise;


        },
        
        
        
    };
});







