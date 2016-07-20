app.controller('jsonController', function ($http, $scope) {

    $scope.models = [];

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

});