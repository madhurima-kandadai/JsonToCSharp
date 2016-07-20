app.controller('jsonController', function ($http, $scope) {

    $scope.models = [
        {
            "modelName": "",
            "required": [{}],
            "properties":
                    [{
                        "propertyName": "",
                        "type": "",
                        "required": ""
                    }]
        }
    ];

    $scope.dataTypes = [{
        value: 'int',
        name: 'Integer'
    },
    {
        value: 'string',
        name: 'String'
    },
    {
        value: 'DateTime',
        name: 'Date Time'
    }
    ];

    $scope.SaveModelDetails = function () {

    };

    $scope.AddPropertyToModel = function () {

    };

});