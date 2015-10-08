ipescam.controller('head_Controler', ['$scope', function($scope)

    {
        $scope.title = 'IPES - Cam';
        $scope.title_region = 'Région';
 
        $scope.aller = function()
        {
            // window.loggedIn = 'region';
        }

        //  appelle template action differees
        $scope.ActionDifferees = function()
        {
            // alert('tokus');
            window.loggedIn = 'action';
        }
        // fin template recherche

        //deconnexion sur template region

        $scope.deconnexion = function()
        {
            window.loggedIn = 'home';
        }
        //fin deconnexion sur template region

        // retourne a la liste des Region
        $scope.region = function()
        {
            window.loggedIn = 'region';
        }
        
        
         // retourne a la liste des Region
        $scope.ipes_region = function()
        {
            window.loggedIn = 'liste_ipes_region';
        }
        
          // retourne a la liste de tous les ipes
        $scope.ipes_region_all = function()
        {
             window.loggedIn = 'recherhce';
        }
        
        // fin retourne a la liste des Region  
   
 

  }]);
