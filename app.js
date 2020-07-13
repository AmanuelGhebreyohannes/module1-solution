(function(){
'use strict';
angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope','$filter'];
function LunchCheckController($scope,$filter){
  $scope.items="";
  $scope.message="";

  console.log($scope.items);

  /***********this function doesn't count empty items thus comma separated empty item like item1,,item2********/
  $scope.displayMessage=function(){

    //outputing the items to the console
    console.log($scope.items);

      var str=$scope.items;
      var str1=str.split(',');

      var strArray=[];
      var j=0;
      for(var i=0;i<str1.length;i++){
        if(str1[i].trim()!="")
        {
          strArray[j]=str1[i];
          j++;
        }
      }
        //outputting the actual number of items ignoring empty items
      console.log(strArray.length);

      if($scope.items==""||$scope.items==null||strArray.length==0)
          $scope.message="Please enter data first!";

      else
        {
          if(strArray.length<=3)
            $scope.message= "Enjoy!";
          else if(strArray.length>3)
            $scope.message="Too much!";
        }

    $scope.items="";


  }


}})();
