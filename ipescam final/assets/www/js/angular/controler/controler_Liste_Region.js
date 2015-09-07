

ipescam.controller('liste_Region', ['$scope', function($scope)

    {


//administration
        $scope.title_region_admin = 'Région admin';


        //  appelle template ajouter annonce
        $scope.ajouter_annonce = function()
        {
            // alert('tokus');
            window.loggedIn = 'ajouter_annonce';
        }


//  appelle template ajouter tutelle academique
        $scope.ajouter_tutelle = function()
        {
            // alert('tokus');
            window.loggedIn = 'ajouter_tutelle';
        }
//  appelle template ajouter ipes
        $scope.ajouter_ipes = function()
        {
            // alert('tokus');
            window.loggedIn = 'ajouter_ipes';
        }

        //  appelle template ajouter adresse a unipes
        $scope.ajouter_adresse_ipes = function()
        {
            // alert('tokus');
            window.loggedIn = 'ajouter_adresse_ipes';
        }

        //  appelle template etablissement
        $scope.ajouter_etablissement = function()
        {
            // alert('tokus');
            window.loggedIn = 'add_etabissement';
        }

        //  appelle template diplome
        $scope.ajouter_diplome = function()
        {
            // alert('tokus');
            window.loggedIn = 'add_diplome';
        }

        //  appelle template filiere
        $scope.ajouter_filiere = function()
        {
            // alert('tokus');
            window.loggedIn = 'add_filiere';
        }


        //  appelle template ajouter option
        $scope.ajouter_option = function()
        {

            window.loggedIn = 'add_option';
        }


        //  appelle template specialite
        $scope.ajouter_specialite = function()
        {
            // alert('tokus');
            window.loggedIn = 'add_specialite';
        }

        //  appelle template paning
        $scope.ajouter_planing = function()
        {
            // alert('tokus');
            window.loggedIn = 'add_planing';
        }


        //  appelle template action differees admin
        $scope.admin_ActionDifferees = function()
        {

            window.loggedIn = 'admin_action';
        }

        //appelle template Region admin      
        $scope.admin_Region = function()
        {

            window.loggedIn = 'admin_region';
        }




        //fin administration
        //liste_Region_centre est la fonction qui permet de liste les IPES du centre
        $scope.liste_Region_centre = function()
        {
            window.loggedIn = 'centre';

        }


        //liste_Region_littoral est la fonction qui permet de liste les IPES du littoral

        $scope.liste_Region_littoral = function()
        {
            window.loggedIn = 'littoral';
        }


        //  appelle template action differees
        $scope.ActionDifferees = function()
        {
            // alert('tokus');
            window.loggedIn = 'action';
        }

        //appelle template Region       
        $scope.Region = function()
        {

            window.loggedIn = 'region';
        }

        //appelle template recherche all ipes       
        $scope.RechercheIpes = function()
        {
            //   alert('tokus');
            window.loggedIn = 'recherhce';
        }

        //appelle template envoyer message a un ipes       
        $scope.envoiyer_Message = function()
        {
            //   alert('tokus');
            window.loggedIn = 'envoyer';
        }


//appelle template lire annonce d'un ipes       
        $scope.lecture_annonce = function()
        {
            // alert('tokus');
            window.loggedIn = 'lire_annonce';
        }
        // controleur pour operation sur ipes
    }]).controller('operation_ipes', ['$scope', 'service_Add_IPES', function($scope, service_Add_IPES)
    {
        var data_ipes = {};


        $scope.save_ipes = function()
        {
            //recuperation champs localisation  
            data_ipes.ville = $scope.ville_ipes;
            data_ipes.quartier = $scope.quartier_ipes;

            //recuperation des autre champs 
            data_ipes.nom_ipes = $scope.nom_ipes;
            data_ipes.accord_creaion = $scope.accord_creaion;
            data_ipes.autorisation = $scope.autorisation;
            data_ipes.nom_promoteur = $scope.nom_promoteur;
            data_ipes.presenttion = $scope.presenttion;
            //recuperation du logoipes
            data_ipes.logo_ipes = $scope.logo_ipes;
            data_ipes.sigle_ipes = $scope.sigle_ipes;
            //recuperation champs adresse 

            data_ipes.etat_ipes = $scope.etat_ipes;

            service_Add_IPES.serverRequest(data_ipes, $scope);
        }
        // controleur pour operation sur adresse ipes  
    }]).controller('operation_adresse_ipes', ['$scope', 'service_Add_etab', 'service_Add_adresse_ipes', '$timeout', function($scope, service_Add_etab, service_Add_adresse_ipes, $timeout)
    {

        // charge le nom des ipes actif==============================
        var data_ipes_name = 'fidele';
        var promise = service_Add_etab.serverRequest1(data_ipes_name);

        // Simulate loading data
        $timeout(function() {

            promise.then(function()
            {
                $scope.data_ipes_name = service_Add_etab.getData_ipesName();

            });


        }, 2000);

        // fin charge le nom des ipes actif==============================


        var data_adresse_ipes = {};
        data_adresse_ipes.ipes_etab = null;

        //on recupere le nom de l'ipes selectionné

        $scope.update = function(data_ipes_name)
        {
            data_adresse_ipes.ipes_etab = data_ipes_name.nom_ipes;
        }

        $scope.save_adresse_ipes = function()
        {

            data_adresse_ipes.site_web = $scope.site_web;


            data_adresse_ipes.telephone = $scope.telephone;
            data_adresse_ipes.boite_postal = $scope.boite_postal;

            data_adresse_ipes.fax = $scope.fax;

            data_adresse_ipes.mail = $scope.mail;
            data_adresse_ipes.localisation = $scope.localisation;



            service_Add_adresse_ipes.serverRequest(data_adresse_ipes, $scope);
        }
        // controleur pour operation sur etablissements  
    }]).controller('operation_etab', ['$scope', 'service_Add_etab', '$timeout', function($scope, service_Add_etab, $timeout)
    {

        // charge le nom des ipes actif==============================
        var data_ipes_name = 'fidele';
        var promise = service_Add_etab.serverRequest1(data_ipes_name);

        // Simulate loading data
        $timeout(function() {

            promise.then(function()
            {
                $scope.data_ipes_name = service_Add_etab.getData_ipesName();

            });


        }, 2000);

        // fin charge le nom des ipes actif==============================


        var data_etab = {};

        data_etab.ipes_etab = null;

        //on recupere le nom de l'ipes selectionné

        $scope.update = function(data_ipes_name)
        {
            data_etab.ipes_etab = data_ipes_name.nom_ipes;
        }


        $scope.save_etab = function()
        {


            data_etab.label_etab = $scope.label_etab;


            data_etab.sigle_etab = $scope.sigle_etab;
            data_etab.logo_etab = $scope.logo_etab;

            data_etab.etat_etab = $scope.etat_etab;


            service_Add_etab.serverRequest(data_etab, $scope);
        }
        // controleur pour operation sur diplome  
    }]).controller('operation_diplome', ['$scope', 'service_Add_diplome', 'service_Add_etab', '$timeout', function($scope, service_Add_diplome, service_Add_etab, $timeout)
    {

        //gerer par service_Add_etab===========================

        // charge le nom des etablissements en fonction du nom ipes choisi
        $scope.update1 = function(data_ipes_name)
        {
            var promise = service_Add_etab.serverRequest2(data_ipes_name.nom_ipes);

            // Simulate loading data
            $timeout(function() {

                promise.then(function()
                {
                    $scope.data_etab_ipes = service_Add_etab.getData_etab_ipes();

                });


            }, 2000);


        }

        // fin charge le nom des etablissements en fonction du nom ipes choisi

        //gerer par service_Add_etab=============================================================

        // ajoute diplome a un etablissement

        var data_diplome = {};

        data_diplome.nom_etabli = null;

        //on recupere le nom de letablissement selectionné

        $scope.update2 = function(data_etab_name)
        {
            data_diplome.nom_etabli = data_etab_name.labelle_etalissement;
        }


        $scope.save_diplome = function()
        {


            data_diplome.label_diplome = $scope.label_diplome;


            data_diplome.sigle_diplome = $scope.sigle_diplome;
            data_diplome.etat_diplome = $scope.etat_diplome;


            service_Add_diplome.serverRequest(data_diplome, $scope);
        }

        // controleur pour operation sur filiere  
    }]).controller('operation_filiere', ['$scope', 'service_Add_filiere', 'service_Add_etab', '$timeout', function($scope, service_Add_filiere, service_Add_etab, $timeout)
    {

        //gerer par service_Add_etab=============================================================

        // charge le nom des diplome en fonction du nom des etablissements choisi
        $scope.update3 = function(data_etab_ipes)
        {
            var promise = service_Add_etab.serverRequest3(data_etab_ipes.labelle_etalissement);

            // Simulate loading data
            $timeout(function() {

                promise.then(function()
                {
                    $scope.data_diplome_etab = service_Add_etab.getData_dipome_etab();

                });


            }, 2000);


        }

        // fin charge le nom des etablissements en fonction du nom ipes choisi

        //gerer par service_Add_etab=============================================================



        // ajoute une filiere a un diplome======================================================
        var data_filiere = {};

        data_filiere.diplome_filiere = null;

        //on recupere le nom du diplome selectionné

        $scope.update4 = function(data_diplome_name)
        {
            data_filiere.diplome_filiere = data_diplome_name.labelle_diplome;
        }

        $scope.save_filiere = function()
        {

            data_filiere.label_filiere = $scope.label_filiere;


            data_filiere.sigle_filiere = $scope.sigle_filiere;
            data_filiere.etat_filiere = $scope.etat_filiere;


            service_Add_filiere.serverRequest(data_filiere, $scope);
        }
        // controleur pour operation sur specialite   
    }]).controller('operation_specialite', ['$scope', 'service_Add_specialite', 'service_Add_etab', '$timeout', function($scope, service_Add_specialite, service_Add_etab, $timeout)
    {

        //gerer par service_Add_etab=============================================================

        // charge le nom des filiere en fonction des diplome choisi
        $scope.update5 = function(data_diplome_etab)
        {
            var promise = service_Add_etab.serverRequest4(data_diplome_etab.labelle_diplome);

            // Simulate loading data
            $timeout(function() {

                promise.then(function()
                {
                    $scope.data_filiere_diplome = service_Add_etab.getData_filiere_dipome();

                });


            }, 2000);


        }

        // fin charge le nom des filiere en fonction des diplome choisi

        //gerer par service_Add_etab=============================================================


        var data_specialite = {};

        data_specialite.filiere_specialite = null;

        //on recupere le nom du diplome selectionné

        $scope.update6 = function(data_diplome_name)
        {
            data_specialite.filiere_specialite = data_diplome_name.labelle_filiere;
        }

        $scope.save_specialite = function()
        {

            data_specialite.label_specialite = $scope.label_specialite;
            data_specialite.forme_suivi = $scope.forme_suivi;


            data_specialite.sigle_specialite = $scope.sigle_specialite;
            data_specialite.etat_specialite = $scope.etat_specialite;


            service_Add_specialite.serverRequest(data_specialite, $scope);
        }
        // controleur pour operation sur planing 
    }]).controller('operation_planing', ['$scope', 'service_Add_planing', 'service_Add_etab', '$timeout', function($scope, service_Add_planing, service_Add_etab, $timeout)
    {

        //gerer par service_Add_etab=============================================================

        // charge le nom des specialite en fonction des filieres choisies
        $scope.update7 = function(data_filiere_diplome)
        {
            var promise = service_Add_etab.serverRequest5(data_filiere_diplome.labelle_filiere);

            // Simulate loading data
            $timeout(function() {

                promise.then(function()
                {
                    $scope.data_specialite_filiere = service_Add_etab.getData_specialite_filiere();

                });


            }, 2000);


        }

        // fin charge le nom des filiere en fonction des diplome choisi

        //gerer par service_Add_etab=============================================================

        var data_planing = {};

        data_planing.specialite_planing = null;

        //on recupere le nom specialite selectionné

        $scope.update8 = function(specialite_filiere)
        {
            data_planing.specialite_planing = specialite_filiere.labelle_specialite;
        }

        $scope.save_planing = function()
        {

            data_planing.cond_acces = $scope.cond_acces;
            data_planing.objectif = $scope.objectif;
            data_planing.labelle_planing = $scope.labelle_planing;


            data_planing.debouche = $scope.debouche;
            data_planing.duree_etude = $scope.duree_etude;
            data_planing.programme = $scope.programme;
            data_planing.frais_etude = $scope.frais_etude;



            service_Add_planing.serverRequest(data_planing, $scope);
        }
        // controleur pour operation sur option  
    }]).controller('operation_option', ['$scope', 'service_Add_option', 'service_Add_etab', '$timeout', function($scope, service_Add_option, service_Add_etab, $timeout)
    {

        //gerer par service_Add_etab=============================================================

        // charge le nom des specialite en fonction des filieres choisies
        $scope.update7 = function(data_filiere_diplome)
        {
            var promise = service_Add_etab.serverRequest5(data_filiere_diplome.labelle_filiere);

            // Simulate loading data
            $timeout(function() {

                promise.then(function()
                {
                    $scope.data_specialite_filiere = service_Add_etab.getData_specialite_filiere();

                });


            }, 2000);


        }

        // fin charge le nom des filiere en fonction des diplome choisi

        //gerer par service_Add_etab=============================================================

        var data_option = {};

        data_option.specialite_filiere = null;

        //on recupere le nom du diplome selectionné

        $scope.update8 = function(specialite_filiere)
        {
            data_option.specialite_filiere = specialite_filiere.labelle_specialite;
        }

        $scope.save_option = function()
        {

            data_option.label_option = $scope.label_option;
            data_option.sigle_option = $scope.sigle_option;
            data_option.etat_option = $scope.etat_option;

            service_Add_option.serverRequest(data_option, $scope);
        }

    }]).controller('operation_tutelle', ['$scope', 'service_Add_tutele', function($scope, service_Add_tutele)
    {


        var data_tutelle = {};

        data_tutelle.filiere_diplome = null;

        //on recupere de la filiere selectionné

        $scope.update6 = function(filiere_diplome)
        {
            data_tutelle.filiere_diplome = filiere_diplome.labelle_filiere;
        }

        $scope.save_tutelle = function()
        {

            data_tutelle.nom_tutelle = $scope.nom_tutelle;
            data_tutelle.logo_tutelle = $scope.logo_tutelle;
            data_tutelle.site_tutelle = $scope.site_tutelle;

            data_tutelle.mail_tutelle = $scope.mail_tutelle;
            data_tutelle.tel_tutelle = $scope.tel_tutelle;
            data_tutelle.etat_tutelle = $scope.etat_tutelle;

            service_Add_tutele.serverRequest(data_tutelle, $scope);
        }

    }]).controller('operation_annonce', ['$scope', 'service_Add_annonce', function($scope, service_Add_annonce)
    {


        var data_annonce = {};

        data_annonce.nom_ipes = null;

        //on recupere de la filiere selectionné

        $scope.name_ipes = function(nom_ipes)
        {
            data_annonce.nom_ipes = nom_ipes.nom_ipes;
        }

        $scope.save_annonce = function()
        {

            data_annonce.titre_annonce = $scope.titre_annonce;
            data_annonce.annonce = $scope.annonce;
            data_annonce.etat_annonce = $scope.etat_annonce;


            service_Add_annonce.serverRequest(data_annonce, $scope);
        }

    }]);