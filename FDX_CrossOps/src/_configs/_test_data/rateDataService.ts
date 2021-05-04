export const rateDataService = [{
  "tableName" : "NL001DFA_IC_01_YOUR_PACKAGING",
  "formula" : {
    "id" : "93effa46-41bc-6c90-e053-de2356aaac37",
    "chargeName" : "Base Charge",
    "chargeSubType" : "LIST",
    "zoneStructureName" : "NL001D_IC_01_YOUR_PACKAGING",
    "zoneId" : "A",
    "discountTypeCode" : "IC",
    "rateScaleNumber" : "001",
    "outputUnit" : "EUR",
    "heavyWeightBase" : 71,
    "maxDiscountPercent" : 45,
    "minCharge" : 26,
    "startDate" : "2019-10-10",
    "endDate" : "9999-12-31",
    "maxDiscount" : 0,
    "perPieceMinimum" : 0,
    "perAddressMinimum" : 0,
    "maxAddressDiscountPercent" : 0,
    "discountWeightThreshold" : 0,
    "discountEnabledFlag" : true,
    "discountExceptionInterlineCustomerFlag" : null,
    "listRateDifferential" : 0,
    "description" : "INTRA NL ZONE A",
    "formulaTemplateId" : 1,
    "formulaNode" : {
      "nodeType" : "OperatorNode",
      "formulaBlockId" : null,
      "left" : {
        "nodeType" : "ReferenceNode",
        "referenceFieldName" : "Rated Weight",
        "referenceFieldUnit" : "KG",
        "positionName" : "REF",
        "formulaBlockId" : "93effa46-41c0-6c90-e053-de2356aaac37"
      },
      "operatorName" : "APPLY",
      "right" : {
        "nodeType" : "OperatorNode",
        "formulaBlockId" : null,
        "left" : {
          "nodeType" : "ReferenceNode",
          "referenceFieldName" : "Rated Weight",
          "referenceFieldUnit" : "KG",
          "positionName" : "REF",
          "formulaBlockId" : "93effa46-41c0-6c90-e053-de2356aaac37"
        },
        "operatorName" : "FILTER",
        "right" : {
          "nodeType" : "StepwiseFunctionListNode",
          "formulaBlockId" : "93effa46-41c1-6c90-e053-de2356aaac37",
          "rangedFunctions" : [ {
            "functionType" : "StepwiseFunctionNode",
            "rangedStepwiseFunctionId" : "93effa46-41cb-6c90-e053-de2356aaac37",
            "lowerBound" : 0.5,
            "upperBound" : 2.5,
            "flatValue" : 26,
            "incrementalValue" : 0.7,
            "incrementGranularity" : 0.5,
            "deficitWeightFlag" : false,
            "nodeType" : "StepwiseFunctionNode"
          }, {
            "functionType" : "StepwiseFunctionNode",
            "rangedStepwiseFunctionId" : "93effa46-41cc-6c90-e053-de2356aaac37",
            "lowerBound" : 3,
            "upperBound" : 10,
            "flatValue" : 29.2,
            "incrementalValue" : 0.4,
            "incrementGranularity" : 0.5,
            "deficitWeightFlag" : false,
            "nodeType" : "StepwiseFunctionNode"
          }, {
            "functionType" : "StepwiseFunctionNode",
            "rangedStepwiseFunctionId" : "93effa46-41cd-6c90-e053-de2356aaac37",
            "lowerBound" : 10.5,
            "upperBound" : 45,
            "flatValue" : 35.1,
            "incrementalValue" : 0.3,
            "incrementGranularity" : 0.5,
            "deficitWeightFlag" : false,
            "nodeType" : "StepwiseFunctionNode"
          }, {
            "functionType" : "StepwiseFunctionNode",
            "rangedStepwiseFunctionId" : "93effa46-41ce-6c90-e053-de2356aaac37",
            "lowerBound" : 45.5,
            "upperBound" : 70.5,
            "flatValue" : 56.5,
            "incrementalValue" : 0.5,
            "incrementGranularity" : 0.5,
            "deficitWeightFlag" : false,
            "nodeType" : "StepwiseFunctionNode"
          }, {
            "functionType" : "StepwiseFunctionNode",
            "rangedStepwiseFunctionId" : "93effa46-41cf-6c90-e053-de2356aaac37",
            "lowerBound" : 71,
            "upperBound" : 99,
            "flatValue" : 99.4,
            "incrementalValue" : 1.4,
            "incrementGranularity" : 1,
            "deficitWeightFlag" : false,
            "nodeType" : "StepwiseFunctionNode"
          }, {
            "functionType" : "StepwiseFunctionNode",
            "rangedStepwiseFunctionId" : "93effa46-41d0-6c90-e053-de2356aaac37",
            "lowerBound" : 100,
            "upperBound" : 299,
            "flatValue" : 140,
            "incrementalValue" : 1.4,
            "incrementGranularity" : 1,
            "deficitWeightFlag" : false,
            "nodeType" : "StepwiseFunctionNode"
          }, {
            "functionType" : "StepwiseFunctionNode",
            "rangedStepwiseFunctionId" : "93effa46-41d1-6c90-e053-de2356aaac37",
            "lowerBound" : 300,
            "upperBound" : 499,
            "flatValue" : 420,
            "incrementalValue" : 1.4,
            "incrementGranularity" : 1,
            "deficitWeightFlag" : false,
            "nodeType" : "StepwiseFunctionNode"
          }, {
            "functionType" : "StepwiseFunctionNode",
            "rangedStepwiseFunctionId" : "93effa46-41d2-6c90-e053-de2356aaac37",
            "lowerBound" : 500,
            "upperBound" : 999,
            "flatValue" : 700,
            "incrementalValue" : 1.4,
            "incrementGranularity" : 1,
            "deficitWeightFlag" : false,
            "nodeType" : "StepwiseFunctionNode"
          }, {
            "functionType" : "StepwiseFunctionNode",
            "rangedStepwiseFunctionId" : "93effa46-41d3-6c90-e053-de2356aaac37",
            "lowerBound" : 1000,
            "upperBound" : 99999,
            "flatValue" : 1400,
            "incrementalValue" : 1.4,
            "incrementGranularity" : 1,
            "deficitWeightFlag" : false,
            "nodeType" : "StepwiseFunctionNode"
          } ],
          "positionName" : "FUNCLIST"
        }
      }
    },
    "createdBy" : "3814668",
    "createdDate" : "2019-09-09T00:00:00.000+0000",
    "lastModifiedBy" : "3814668",
    "lastModifiedDate" : "2019-09-09"
  },
  "rateScaleNumber" : "001"
}];