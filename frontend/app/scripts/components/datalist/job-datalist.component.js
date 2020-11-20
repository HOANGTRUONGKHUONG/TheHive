(function() {
    'use strict';

    angular.module('theHiveComponents')
        .component('jobDatalist', {
            controller: function() {

                // this.updateField = function(newValue) {
                //     this.onUpdate({
                //         fieldName: ['customFields', this.field.reference, this.field.type].join('.'),
                //         value: newValue
                //     });
                // };

            },
            controllerAs: '$cmp',
            templateUrl: 'views/components/datalist/job.datalist.component.html',
            bindings: {
                data: '<'
            }
        });
})();
