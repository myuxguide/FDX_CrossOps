export var LocationOptions = [
    { label: 'Postal Code', value: 'postal' },
    { label: 'Location Code', value: 'location' },
    { label: 'State', value: 'state' },
    { label: 'City', value: 'city' }
];

export var  ServiceOptions = [
    'ATA',
    'ATD',
    'DTA',
    'DTD'
];

export class AppConfig {
    public static zoneDetailPageSize = 5;
    public static searchResultsPageSize = 5;
    public static fullRateScaleTemplateDownloadPath = "assets/templates/RRD_Upload_Template_Full_RateScale.xlsx";
    public static zoneGroupTemplateDownloadPath = "assets/templates/RRD_Upload_Template_Geo_Group.xlsx";
}

export class SnackbarConfigs {
    public static uploadSuccessMessage = "Data has been submitted successfully";
    public static zoneRateErrorMessage = "No Rate Data Found!!";
    public static snackbarDuration = 5000;
  }
  export class LocalizationConfigs {
    public static defaultLanguage = "English";
}