
window.loggedIn = 'home';
ipescam.controller('homeControler', ['$scope', function($scope)

    {


        $scope.title_compte = "Creez un compte IPESCAM";


        //permet d'associe le style jquery mobile aux pqge incluent
        $scope.$on("$includeContentLoaded", function()
        {
            $("#mainDiv").trigger("create");
        });



        //appelle vers page  homeHead.html
        $scope.getHeadTemplate = function()
        {
            //appelle vers page  homeHead.html 
            //admin
            if (window.loggedIn == 'admin_region')
                return "admin-vue/adminHeader.html";

            else


            if (window.loggedIn == 'ajouter_planing')
                return "admin-vue/ajouter_planing_Head.html";

            else


            if (window.loggedIn == 'admin_action')
                return "admin-vue/admin_action_Head.html";

            //ajouter IPES
            else

            if (window.loggedIn == 'ajouter_ipes')
                return "admin-vue/ajouter_ipes_Head.html";

            //ajouter adresse a un IPES
            else

            if (window.loggedIn == 'ajouter_adresse_ipes')
                return "admin-vue/ajouter_adresse_ipes_Head.html";

            //ajouter quartier pour  un IPES
            else

            if (window.loggedIn == 'ajouter_quartier_ipes')
                return "admin-vue/ajouter_quartier_Head.html";




            //ajouter etablissement
            else
            if (window.loggedIn == 'add_etabissement')
                return "admin-vue/ajouter_etablissement_Head.html";

            //ajouter diplome
            else
            if (window.loggedIn == 'add_diplome')
                return "admin-vue/ajouter_diplome_Head.html";

            //ajouter filiere
            else
            if (window.loggedIn == 'add_filiere')
                return "admin-vue/ajouter_filiere_Head.html";

            //ajouter specialite
            else
            if (window.loggedIn == 'add_specialite')
                return "admin-vue/ajouter_specialite_Head.html";

            //ajouter piece dossier candidature
            else
            if (window.loggedIn == 'add_piece')
                return "admin-vue/ajouter_piece_Head.html";


            //ajouter semestre
            else
            if (window.loggedIn == 'add_semestre')
                return "admin-vue/ajouter_semestre_head.html";

            //ajouter option
            else
            if (window.loggedIn == 'add_option')
                return "admin-vue/ajouter_option_head.html";




//ajouter annonce
            if (window.loggedIn == 'ajouter_annonce')
                return "admin-vue/ajouter_annonce_Head.html";


            //fin admin



            else
            //appelle du template head home  
            if (window.loggedIn == 'home')
                return "homeHead.html";

            else
            //appelle du template head liste region  
            if (window.loggedIn == 'region')
                return "client-vue/regionHeader.html";

            else

            //appelle du template head liste region centre               
            if (window.loggedIn == 'liste_ipes_Centre')
                return "client-vue/ipes/index_centre_head.html";

            else
            //appelle du template head liste region Adamaoua               
            if (window.loggedIn == 'liste_ipes_Adamaoua')
                return "client-vue/ipes/index_Adamaoua_head.html";


            else
            //appelle template head de la liste des ipes par region        
            if (window.loggedIn == 'liste_ipes_region')
                return "client-vue/ipes/index_liste_ipes_head.html";

            else
            // template head action differee               
            if (window.loggedIn == 'action')
                return "client-vue/Action_Head.html";

            else
//           template head recherche Ipes  de actions différées   
            if (window.loggedIn == 'recherhce')
                return "client-vue/recherche_ipes_head.html";

            else

            //     template head envoyer message a un Ipes 
            if (window.loggedIn == 'envoyer')
                return "client-vue/envoi_message_head.html";


            else

            //     template head lire annonce d'un Ipes 
            if (window.loggedIn == 'lire_annonce')
                return "client-vue/lire_annonce_head.html";

            else

            //     template head pour creer un compte Ipes 
            if (window.loggedIn == 'compte')
                return "compte_Head.html";


            else
            //appelle du template head les ipes/region
            if (
                    window.loggedIn === 'ipes_centre' ||
                    window.loggedIn === 'ipes_Adamaoua' ||
                    window.loggedIn === 'ipes_Est' ||
                    window.loggedIn === 'ipes_Extreme_Nord' ||
                    window.loggedIn === 'ipes_Littoral' ||
                    window.loggedIn === 'ipes_Nord' ||
                    window.loggedIn === 'ipes_Nord_Ouest' ||
                    window.loggedIn === 'ipes_Ouest' ||
                    window.loggedIn === 'ipes_Sud' ||
                    window.loggedIn === 'ipes_Sud_Ouest' ||
                    window.loggedIn === 'etablissement' ||
                    window.loggedIn === 'adresse_ipes' ||
                    window.loggedIn === 'agrement_ipes' ||
                    window.loggedIn === 'accueil')
                return "client-vue/ipes/ipes_head.html";


            else
            //appelle du template head pour les ippes all
            if (
                    window.loggedIn === 'ipes_centre_all' ||
                    window.loggedIn === 'ipes_Littoral_all' ||
                    window.loggedIn === 'ipes_Sud_Ouest_all' ||
                    window.loggedIn === 'ipes_Sud_all' ||
                    window.loggedIn === 'ipes_Ouest_all' ||
                    window.loggedIn === 'ipes_Nord_Ouest_all' ||
                    window.loggedIn === 'ipes_Nord_all' ||
                    window.loggedIn === 'ipes_Extreme_Nord_all' ||
                    window.loggedIn === 'ipes_Est_all' ||
                    window.loggedIn === 'ipes_Adamaoua_all' ||
                    window.loggedIn === 'etablissement_all' || //head etablissement dans la recherche d'etablissements
                    window.loggedIn === 'adresse_ipes_all' ||
                    window.loggedIn === 'agrement_ipes_all' ||
                    window.loggedIn === 'accueil_all')
                return "client-vue/ipes/ipes_all_head.html";



        }



        //appelle vers page  homeContent
        $scope.getContentTemplate = function()
        {

            //appelle vers page  homeContent
            //admin====================================================================================
            if (window.loggedIn === 'admin_region')
                return "admin-vue/admin.html";

            else
            if (window.loggedIn === 'admin_action')
                return "admin-vue/admin_action_content.html";

            // appelle template tutelle
            else
            if (window.loggedIn === 'ajouter_planing')
                return "admin-vue/ajouter_planing.html";


            //ajouter IPES
            else
            if (window.loggedIn === 'ajouter_ipes')
                return "admin-vue/ajouter_ipes.html";

            //ajouter adresse a un IPES
            else
            if (window.loggedIn === 'ajouter_adresse_ipes')
                return "admin-vue/ajouter_adresse_ipes.html";

            //ajouter quartier pour un IPES
            else
            if (window.loggedIn === 'ajouter_quartier_ipes')
                return "admin-vue/ajouter_quartier.html";





            //ajouter etablissement
            else
            if (window.loggedIn === 'add_etabissement')
                return "admin-vue/ajouter_etabissement.html";

            //ajouter diplome
            else
            if (window.loggedIn === 'add_diplome')
                return "admin-vue/ajouter_diplome.html";

            //ajouter filiere
            else
            if (window.loggedIn === 'add_filiere')
                return "admin-vue/ajouter_filiere.html";


            //ajouter specialite
            else
            if (window.loggedIn === 'add_specialite')
                return "admin-vue/ajouter_specialite.html";

            //ajouter piece candidature
            else
            if (window.loggedIn === 'add_piece')
                return "admin-vue/ajouter_piece.html";
            //turn "admin-vue/ajouter_planing.html";

            //ajouter semestre
            else
            if (window.loggedIn === 'add_semestre')
                return "admin-vue/ajouter_semestre.html";


            //ajouter semestre
            else
            if (window.loggedIn === 'add_option')
                return "admin-vue/ajouter_option.html";




            // finajouter annonce
            else
            if (window.loggedIn === 'ajouter_annonce')
                return "admin-vue/ajouter_annonce.html";





            //fin admin=================================================================


            // client home page=============================================================

            //appelle du template contetnt home
            if (window.loggedIn === 'home')
                return "homeContent.html";
            else
            //appelle du template contetnt liste regon
            if (window.loggedIn === 'region')
                return "client-vue/region.html";
            //appelle template content de la liste des ipes par region        

            else

            if (window.loggedIn === 'liste_ipes_region')
                return "client-vue/ipes/index_liste_ipes.html";
            else

            // template action content differee         
            if (window.loggedIn === 'action')
                return "client-vue/Action_content.html";
            else
//            template content recherche Ipes  de actions différées         
            if (window.loggedIn === 'recherhce')
                return "client-vue/recherche_ipes.html";
            else

            //     template content envoyer message a un Ipes        
            if (window.loggedIn === 'envoyer')
                return "client-vue/envoi_message.html";
            else

            //     template content lire annonce d'un Ipes        
            if (window.loggedIn === 'lire_annonce')
                return "client-vue/lire_annonce.html";
            else

            //    template content pour creer un compte Ipes        
            if (window.loggedIn === 'compte')
                return "compte_Content.html";
            else
            // fin client home page=============================================================


            // ipes home page=============================================================




            //gestion ipes

            //appelle du template content ipes choisie
            if (window.loggedIn === 'ipes_centre' ||
                    window.loggedIn === 'ipes_Adamaoua' ||
                    window.loggedIn === 'ipes_Est' ||
                    window.loggedIn === 'ipes_Extreme_Nord' ||
                    window.loggedIn === 'ipes_Littoral' ||
                    window.loggedIn === 'ipes_Nord' ||
                    window.loggedIn === 'ipes_Nord_Ouest' ||
                    window.loggedIn === 'ipes_Ouest' ||
                    window.loggedIn === 'ipes_Sud' ||
                    window.loggedIn === 'ipes_Sud_Ouest' ||
                    window.loggedIn === 'ipes_centre_all' ||
                    window.loggedIn === 'ipes_Littoral_all' ||
                    window.loggedIn === 'ipes_Sud_Ouest_all' ||
                    window.loggedIn === 'ipes_Sud_all' ||
                    window.loggedIn === 'ipes_Ouest_all' ||
                    window.loggedIn === 'ipes_Nord_Ouest_all' ||
                    window.loggedIn === 'ipes_Nord_all' ||
                    window.loggedIn === 'ipes_Extreme_Nord_all' ||
                    window.loggedIn === 'ipes_Est_all' ||
                    window.loggedIn === 'ipes_Adamaoua_all'
                    )
                return "client-vue/ipes/ipes.html";

            else

            //appelle template content liste etablissement d'un ipes
            if (window.loggedIn === 'etablissement' ||
                    window.loggedIn === 'etablissement_all')     //content etablissement dans la recherche des etablissement et par region
                return "client-vue/ipes/etablissements.html";

            //appelle template presentation ipes : accueil
            else

            if (window.loggedIn === 'accueil')
            {
                return "client-vue/ipes/ipes.html";
            }
            //appelle template presentation ipes_all : accueil
            else

            if (window.loggedIn === 'accueil_all')
            {
                return "client-vue/ipes/ipes.html";
            }

            else
            //appelle template content adresse d'un ipes
            if (window.loggedIn === 'adresse_ipes' ||
                    window.loggedIn === 'adresse_ipes_all')  //content etablissement dans la recherche des etablissement et par region
                return "client-vue/ipes/adresse.html";

            else
            //appelle template content adresse d'un ipes
            if (window.loggedIn === 'agrement_ipes' ||
                    window.loggedIn === 'agrement_ipes_all')  //content etablissement dans la recherche des etablissement et par region
                return "client-vue/ipes/agrement.html";



            //fin appelle du template content ipes
            //fin gestion ipes


        };

        // fin ipes home page=============================================================

    }]).controller('Home_traitement', ['$scope', 'service_AddCompte', 'service_connexion_user', function($scope, service_AddCompte, service_connexion_user)

    {
        var postData = {};

        $scope.loader = {
            loading: false,
        };


        //addCompte est la fonction qui permet d'ajouter un utilisateur
        $scope.addCompte = function()
        {

            postData.pays = $scope.pays;
            postData.nom_user = $scope.nom_user;
            postData.pwd = $scope.pwd;
            postData.telephone = $scope.telephone;
            postData.email = $scope.email;
            postData.sexe = $scope.sexe;

            service_AddCompte.serverRequest(postData, $scope);

        },
                // fin addCompte 

                //connexionUtilisateur est la fonction qui permet de verifier les compte de connexion

                $scope.connexionUtilisateur = function()
                {
                    var postData_con = {};


                    postData_con.tel = $scope.tel;
                    postData_con.pwd_user = $scope.pass;
//                    httpInterceptor.request();

                    $scope.loader.loading = true;

                    service_connexion_user.serverRequest(postData_con, $scope);
//    

                    $scope.tel = '';
                    $scope.pass = '';


                },
                // fin connexionUtilisateur

                $scope.compte_user = function()
                {
                    window.loggedIn = "compte";

                };




    }]);