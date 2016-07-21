app.controller('jsonController', function ($scope, $http) {

    $scope.swaggerJson = [];
    $scope.swaggerEditorJson = [];
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

    $scope.ViewJson = function () {
        $scope.swaggerJson = [];
        if ($scope.models.length !== 0) {
            var value = $scope.GenerateJson();
            $scope.jsonObject = JSON.stringify($scope.swaggerJson, null, 2);
            console.log($scope.jsonObject);
        }
    };

    $scope.SwaggerJsonGeneration = function () {
        debugger;
        $scope.swaggerEditorJson = [];
        angular.forEach($scope.models, function (model) {
            var index = $scope.swaggerEditorJson.length;
            $scope.swaggerEditorJson.push({
                    [model.model]:
                        {
                            "type": "object",
                            "required": [],
                            "properties": []
                        }
            });
            //var required = _.where(model.properties, { required: true });
            //var requiredFields = _.where(model.properties, {required: true});
            angular.forEach(model.properties, function (property) {
                var propertyscript = '$scope.swaggerEditorJson[index].' + model.model + '.properties.push({ [property.name]: { "type": property.dataType } });';
                eval(propertyscript);
                if (property.required === true) {
                    var requiredScript = '$scope.swaggerEditorJson[index].' + model.model + '.required.push(property.name);';
                    eval(requiredScript);
                }
            });
        });
        console.log(JSON.stringify($scope.swaggerEditorJson, null, 2));
        $scope.swaggerEditorJson = JSON.stringify($scope.swaggerEditorJson, null, 2);
    };

    $scope.GenerateJson = function () {
        angular.forEach($scope.models, function (model) {
            var modelName = model.model;
            $scope.swaggerJson.push({
                "model": model.model,
                "required": [],
                "properties": []
            });
            var index = $scope.swaggerJson.findIndex(x => x.model == model.model);
            angular.forEach(model.properties, function (prop) {
                var propName = prop.name;
                if (prop.required === true) {
                    $scope.swaggerJson[index].required.push(propName);
                }
                $scope.swaggerJson[index].properties.push({
                    "name": prop.name,
                    "type": prop.dataType,
                    "required": prop.required
                });
            });
        });
        return $scope.swaggerJson;
    };

    $scope.EditProperty = function () {

    };

    $scope.DeleteProperty = function () {

    }

    $scope.AddPropertyToModel = function () {
        if (JSON.stringify($scope.models).indexOf(JSON.stringify($scope.modelName)) == -1) {
            $scope.dataTypes.push({ value: $scope.modelName, name: $scope.modelName })
            $scope.models.push({
                "model": $scope.modelName,
                "properties": [{
                    "name": $scope.propertyName,
                    "dataType": $scope.dataType,
                    "required": $scope.required == null ? false : $scope.required
                }]
            });
        }
        else {
            var index = $scope.models.findIndex(x => x.model.toLowerCase() == $scope.modelName.toLowerCase());
            if (index != -1) {
                var propIndex = $scope.models[index].properties.findIndex(x => x.name.toLowerCase() == $scope.propertyName.toLowerCase());
                if (propIndex == -1) {
                    $scope.models[index].properties.push({
                        "name": $scope.propertyName,
                        "dataType": $scope.dataType,
                        "required": $scope.required == null ? false : $scope.required
                    });
                }
                else {
                    alert("Duplicate property !~!!");
                }
            }

        }
        $scope.propertyName = '';
        $scope.dataType = "";
        $scope.required = null;
    };
});