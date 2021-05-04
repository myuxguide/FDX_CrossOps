import { environment } from '../../environments/environment';

export class APIConstants {
    public static productMetadata = environment.apiURL + "ui/product-metadata";
    public static rateScaleType = environment.apiURL + "ui/ratescaletype";
    public static serviceOption = environment.apiURL + "ui/service-options";
    public static searchResults = environment.apiURL + "rRD/zone/search";
    public static structureSearchResults = environment.apiURL + "rRD/zone/structure/search";
    public static baseChargeSearchResults = environment.apiURL + "rRD/basecharge/search";
    public static surchargeSearchResults = environment.apiURL + "rRD/surcharge/search";
    public static geoSurchargeSearchResults = environment.apiURL + "ui/geography-surcharge/search";
    public static zoneDetails = environment.apiURL + "geographyGroupStructure/search";
    public static rateDetails = environment.apiURL + "ratetable";
    public static surchargeRateDetails = environment.apiURL + "ratetable/formulaIdList";
    public static chargeCode = environment.apiURL + "ui/charge-codes";
    public static surchargeType = environment.apiURL + "ui/surcharge-types";
    public static policyGrid = environment.apiURL + "refresh-grids";
    public static fileUpload = environment.apiURL + "file-upload";
    public static history = environment.apiURL + "file-upload/history";
    public static errorMsg = environment.apiURL + "file-upload/error-messages";
}