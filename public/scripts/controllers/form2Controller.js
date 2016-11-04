myApp.controller("form2Controller", ['$scope', '$http', function($scope, $http){
  console.log('In form2Controller');
    // set form to edit and submit status
    //show submit button, hide update and pdf
  var bike = JSON.parse(sessionStorage.getItem('selectedBike'));
  var employee = JSON.parse(sessionStorage.getItem('employee'));
  var formTwo = JSON.parse(sessionStorage.getItem('formTwo'));
  var obj = JSON.parse(sessionStorage.getItem('customer'));

  $scope.date= new Date();
  $scope.showHideSubmitFormTwo = true;
    //keep all input fields active
    $scope.submittedTwo=false;

    // focus / blur properties for inputs
   $scope.saddleHeightFocus = function(){
     document.getElementById("saddleHeightMeasure").className.baseVal = "showMeasurement";
   };
   $scope.saddleHeightBlur= function(){
     document.getElementById("saddleHeightMeasure").className.baseVal = "hideMeasurement";
   };
   $scope.saddleOverBarsFocus = function(){
     document.getElementById("saddleHeightOverBarsMeasure").className.baseVal = "showMeasurement";
   };
   $scope.saddleOverBarsBlur = function(){
     document.getElementById("saddleHeightOverBarsMeasure").className.baseVal = "hideMeasurement";
   };
   $scope.handleBarReachFocus = function(){
    document.getElementById("handleBarReach").className.baseVal = "showMeasurement";
  };
  $scope.handleBarReachBlur = function(){
    document.getElementById("handleBarReach").className.baseVal = "hideMeasurement";
  };
  $scope.saddleAngleFocus= function(){
    document.getElementById("saddleAngle").className.baseVal = "showMeasurement";
  };
  $scope.saddleAngleBlur = function(){
    document.getElementById("saddleAngle").className.baseVal = "hideMeasurement";
  };
  $scope.saddleForeAftFocus = function(){
    document.getElementById("saddleForeAft").className.baseVal = "showMeasurement";
  };
  $scope.saddleForeAftBlur = function(){
    document.getElementById("saddleForeAft").className.baseVal = "hideMeasurement";
  };
  $scope.saddleBrandFocus = function(){
  document.getElementById("saddleBrand").className.baseVal = "showMeasurement";
  };
  $scope.saddleBrandBlur = function(){
  document.getElementById("saddleBrand").className.baseVal = "hideMeasurement";
  };
  $scope.stemLengthFocus= function(){
  document.getElementById("stemLengthMeasure").className.baseVal = "showMeasurement";
  };
  $scope.stemLengthBlur= function(){
    document.getElementById("stemLengthMeasure").className.baseVal = "hideMeasurement";
  };
  $scope.stemAngleFocus= function(){
  document.getElementById("stemAngleMeasure").className.baseVal = "showMeasurement";
  };
  $scope.stemAngleBlur= function(){
    document.getElementById("stemAngleMeasure").className.baseVal = "hideMeasurement";
  };
  $scope.handleBarWidthFocus= function(){
  document.getElementById("handleBarWidthMeasure").className.baseVal = "showMeasurement";
  };
  $scope.handleBarWidthBlur= function(){
    document.getElementById("handleBarWidthMeasure").className.baseVal = "hideMeasurement";
  };
  $scope.handleBarBrandFocus= function(){
  document.getElementById("handleBarBrandMeasure").className.baseVal = "showMeasurement";
  };
  $scope.handleBarBrandBlur= function(){
    document.getElementById("handleBarBrandMeasure").className.baseVal = "hideMeasurement";
  };
  $scope.pedalBrandFocus= function(){
  document.getElementById("pedalBrandMeasure").className.baseVal = "showMeasurement";
  };
  $scope.pedalBrandBlur= function(){
    document.getElementById("pedalBrandMeasure").className.baseVal = "hideMeasurement";
  };
  $scope.brakeLevelFocus= function(){
  document.getElementById("brakeLevelPositionMeasure").className.baseVal = "showMeasurement";
  };
  $scope.brakeLevelBlur= function(){
    document.getElementById("brakeLevelPositionMeasure").className.baseVal = "hideMeasurement";
  };
  $scope.crankLengthFocus= function(){
  document.getElementById("crankLengthMeasure").className.baseVal = "showMeasurement";
  };
  $scope.crankLengthBlur= function(){
    document.getElementById("crankLengthMeasure").className.baseVal = "hideMeasurement";
  };
  $scope.standoverFocus = function(){
   document.getElementById("standoverMeasure").className.baseVal = "showMeasurement";
  };
  $scope.standoverBlur= function(){
   document.getElementById("standoverMeasure").className.baseVal = "hideMeasurement";
  };
  $scope.stackFocus= function(){
    document.getElementById("stackMeasure").className.baseVal = "showMeasurement";
  };
  $scope.stackBlur= function(){
    document.getElementById("stackMeasure").className.baseVal = "hideMeasurement";
  };
  $scope.submitButton = function(){
    if (formTwo == undefined) {
      console.log('starting new');
    } else if(formTwo[0] !== undefined) {
    $scope.showHideSubmitFormTwo = false;
    $scope.submittedTwo = true;
  }
  };

  $scope.formTwoLoad = function(){
    if (formTwo == undefined){
      console.log('starting new bike');
    }else if (formTwo[0] == undefined){
      alert('form two has no data');
    } else {
    console.log("form 2 session:", formTwo[0]);
    $scope.saddleHeight = formTwo[0].saddleheight;
    $scope.saddleHeightOverBars = formTwo[0].saddleheightoverbars;
    $scope.saddleToHandlebarReach = formTwo[0].saddletohandlebarreach;
    $scope.saddleAngle = formTwo[0].saddleangle;
    $scope.saddleForeAft = formTwo[0].saddleforeaft;
    $scope.saddleBrandAndWidth = formTwo[0].saddlebrandandwidth;
    $scope.stemLength = formTwo[0].stemlength;
    $scope.stemAngle = formTwo[0].stemangle;
    $scope.handleBarWidth = formTwo[0].handlebarwidth;
    $scope.handleBarBrandAndModel = formTwo[0].handlebarbrandandmodel;
    $scope.pedalBrandAndModel = formTwo[0].pedalbrandandmodel;
    $scope.shoeBrandModelSize = formTwo[0].shoebrandmodelsize;
    $scope.brakeLevelPosition = formTwo[0].brakelevelposition;
    $scope.crankLength = formTwo[0].cranklength;
    $scope.standover = formTwo[0].standover;
    $scope.stack = formTwo[0].stack;
    $scope.notes = formTwo[0].notes;
  }
  };
  $scope.formTwoLoad();

  $scope.submitButton();

  $scope.addForm2NewFit = function () {
    console.log('in addForm2NewFit');
    var addForm2NewFitObject = {
      employeeCreated: employee,
      bikeId: bike.bikeid,
      date: $scope.date.toString().substring(0,15),
      saddleHeight: $scope.saddleHeight,
      saddleHeightOverBars:$scope.saddleHeightOverBars,
      saddleToHandlebarReach:$scope.saddleToHandlebarReach,
      saddleAngle:$scope.saddleAngle,
      saddleForeAft:$scope.saddleForeAft,
      saddleBrandAndWidth:$scope.saddleBrandAndWidth,
      stemLength:$scope.stemLength,
      stemAngle:$scope.stemAngle,
      handleBarWidth:$scope.handleBarWidth,
      handleBarBrandAndModel:$scope.handleBarBrandAndModel,
      pedalBrandAndModel:$scope.pedalBrandAndModel,
      shoeBrandModelSize:$scope.shoeBrandModelSize,
      brakeLevelPosition:$scope.brakeLevelPosition,
      crankLength:$scope.crankLength,
      standover:$scope.standover,
      stack:$scope.stack,
      notes: $scope.notes
    };
    if (addForm2NewFitObject.saddleHeight == undefined) {
        alert("Please indicate saddle height - all fields are required");
    } else if (addForm2NewFitObject.saddleHeightOverBars == undefined) {
      alert("Please indicate saddle height over bars - all fields are required");
    } else if (addForm2NewFitObject.saddleToHandlebarReach == undefined) {
      alert("Please indicate saddle to handlebar reach - all fields are required");
    } else if (addForm2NewFitObject.saddleAngle == undefined) {
      alert("Please indicate saddle angle - all fields are required");
    } else if (addForm2NewFitObject.saddleForeAft == undefined) {
      alert("Please indicate saddle fore-aft - all fields are required");
    } else if (addForm2NewFitObject.saddleBrandAndWidth == undefined) {
      alert("Please indicate saddle brand and width - all fields are required");
    } else if (addForm2NewFitObject.stemLength == undefined) {
      alert("Please indicate stem length - all fields are required");
    } else if (addForm2NewFitObject.handleBarWidth == undefined) {
      alert("Please indicate handle bar width - all fields are required");
    } else if (addForm2NewFitObject.handleBarBrandAndModel == undefined){
      alert("Please indicate handle bar brand and model - all fields are required");
    } else if (addForm2NewFitObject.brakeLevelPosition == undefined){
      alert("Please indicate brake level position - all fields are required");
    } else if (addForm2NewFitObject.crankLength == undefined){
      alert("Please indicate crank length - all fields are required");
    } else if (addForm2NewFitObject.standover == undefined){
      alert("Please indicate standover - all fields are required");
    } else if (addForm2NewFitObject.stack == undefined){
      alert("Please indicate stack - all fields are required");
    } else {
        console.log('addForm2NewFitObject to send to DB:', addForm2NewFitObject);
      //hide submit, show update and pdf
      $scope.showHideSubmitFormTwo = false;
        //disable input fields
        $scope.submittedTwo = true;
    $http({
      method: 'POST',
      url: '/addForm2NewFit',
      data: addForm2NewFitObject
    }).then(function(form2Response){
      console.log('success from server', form2Response);
      sessionStorage.setItem('formTwo', JSON.stringify(form2Response.data));
    });
  }
  };

  ////////////////FORM 2 PUT(Update) Route to DB///////////////////////////////////////
  $scope.saveFormTwo = function(){
    console.log('complete clicked');
    //show update
    $scope.hideUpdate = true;
    //hide save
    $scope.showSaveTwo = false;
    // lock form
    $scope.submittedTwo=true;

    var editFormTwoObject = {
      employeeUpdated: employee,
      bikeId: bike.bikeid,
      date: $scope.date.toString().substring(0,15),
      saddleHeight: $scope.saddleHeight,
      saddleHeightOverBars:$scope.saddleHeightOverBars,
      saddleToHandlebarReach:$scope.saddleToHandlebarReach,
      saddleAngle:$scope.saddleAngle,
      saddleForeAft:$scope.saddleForeAft,
      saddleBrandAndWidth:$scope.saddleBrandAndWidth,
      stemLength:$scope.stemLength,
      stemAngle:$scope.stemAngle,
      handleBarWidth:$scope.handleBarWidth,
      handleBarBrandAndModel:$scope.handleBarBrandAndModel,
      pedalBrandAndModel:$scope.pedalBrandAndModel,
      shoeBrandModelSize:$scope.shoeBrandModelSize,
      brakeLevelPosition:$scope.brakeLevelPosition,
      crankLength:$scope.crankLength,
      standover:$scope.standover,
      stack:$scope.stack,
      notes: $scope.notes
    };

    console.log('object to send:', editFormTwoObject);
    //hide submit, show update and pdf
    $scope.showHideSubmitFormTwo = false;
      //disable input fields
      $scope.submittedTwo = true;

    $http({
      method: 'PUT',
      url: '/editFormTwo',
      data: editFormTwoObject
    }).then(function(editForm2Response){
      console.log('success from server', editForm2Response);
      sessionStorage.setItem('formTwo', JSON.stringify(editForm2Response.data));
    });
  }; //End saveFormTwo


  //update form 2 on click
  $scope.updateFormTwo = function(){
    //hide update
    $scope.hideUpdate = false;
    //show save
    $scope.showSaveTwo = true;
    // unlock
    $scope.submittedTwo=false;
  };

  // // save form 2 on click
  // $scope.saveFormTwo= function(){
  //     //show update
  //     $scope.hideUpdate = true;
  //     //hide save
  //     $scope.showSaveTwo = false;
  //     // lock form
  //     $scope.submittedTwo=true;
  // };

  //
  // $scope.updateFormTwo = function(){
  //   //reset form to submit staus
  //   $scope.submittedTwo = false;
  //   $scope.showHideSubmitFormTwo = true;
  // };

  $scope.downloadFormTwoPdf = function(){
    console.log("In the PDF click");
    var docDefinition =
      {pageOrientation: 'landscape',
      content: [
        {
          text: 'New Fit',
          style: 'header',
          bold: true,
          margin: [ 1, 2, 5, 5 ]
        },
        {text: "Name:" },
        {text: '' + obj.firstname + ' ' + obj.lastname, margin: [ 1, 2, 5, 5 ], bold: true},

        {text: "Phone:" },
        {text: '' + obj.phonenumber, margin: [ 1, 2, 5, 5 ], bold: true},

        {text: "Email:" },
        {text: '' + obj.email, margin: [ 1, 2, 5, 5 ], bold: true},

        {text: "Address:"},
        {text: '' + obj.streetaddress + ' ' + obj.unitnumber + ' ' + obj.city + ' ' + obj.state + ' ' + obj.zip, margin: [ 1, 2, 5, 5 ], bold: true},

        {text:"Date: " + '' + '' + $scope.date.toString().substring(0,15), margin: [ 1, 2, 5, 5 ], bold: true},

        {text: "Saddle Height: "},
        {text: '' + $scope.saddleHeight, margin: [ 1, 2, 5, 5 ], bold: true},

        {text: "Saddle Height Over Bars: "},
        {text: '' + $scope.saddleHeightOverBars, margin: [ 1, 2, 5, 5 ], bold: true},

        {text: "Saddle to Handlebar reach: "},
        {text: '' + $scope.saddleToHandlebarReach, margin: [ 1, 2, 5, 5 ], bold: true},

        {text: "Saddle Angle: "},
        {text: '' + $scope.saddleAngle, margin: [ 1, 2, 5, 5 ], bold: true},

        {text: "Saddle Fore-aft: "},
        {text: '' + $scope.saddleForeAft, margin: [ 1, 2, 5, 5 ], bold: true},

        {text: "Saddle Brand/Width: "},
        {text: '' + $scope.saddleBrandAndWidth, margin: [ 1, 2, 5, 5 ], bold: true},

        {text: "Stem Length: "},
        {text: '' + $scope.stemLength, margin: [ 1, 2, 5, 5 ], bold: true},

        {text: "Stem Angle: "},
        {text: '' + $scope.stemAngle, margin: [ 1, 2, 5, 5 ], bold: true},

        {text: "Handle Bar Width: "},
        {text: '' + $scope.handleBarWidth, margin: [ 1, 2, 5, 5 ], bold: true},

        {text: "Handle Bar Brand and Model: "},
        {text: '' + $scope.handleBarWidth, margin: [ 1, 2, 5, 5 ], bold: true},

        {text: "Pedal Brand and Model:  "},
        {text: '' + $scope.pedalBrandAndModel, margin: [ 1, 2, 5, 5 ], bold: true},

        {text: "Shoe Brand/Model/Size:  "},
        {text: '' + $scope.shoeBrandModelSize, margin: [ 1, 2, 5, 5 ], bold: true},

        {text: "Brake Level Position:  "},
        {text: '' + $scope.brakeLevelPosition, margin: [ 1, 2, 5, 5 ], bold: true},

        {text: "Crank Length:  "},
        {text: '' + $scope.crankLength, margin: [ 1, 2, 5, 5 ], bold: true},

        {text: "Standover: "},
        {text: '' + $scope.standover, margin: [ 1, 2, 5, 5 ], bold: true},

        {text: "Stack: "},
        {text: '' + $scope.stack, margin: [ 1, 2, 5, 5 ], bold: true},
      ]// end pdf content
    }; // end docDefinition
    pdfMake.createPdf(docDefinition).download('newFitForm.pdf');
  };// end downloadFormTwoPdf

}]);//end form2Controller
