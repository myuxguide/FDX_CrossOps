
export const HISTORY_DATA: HistoryElements [] =[
    {serialNumber: 1,fileName: 'ZONE.xls', fileType:'zone' ,  date:'22-10-2019 5PM' , status:'Success', user:'test-user' },
    {serialNumber: 2,fileName: 'rateScale.xls', fileType:'Rate scale' ,  date:'22-10-2019 6PM' , status:'failure', user:'test-user' },
    {serialNumber: 3,fileName: 'geographySurcharge.xls', fileType:'Geography Surcharge' ,  date:'22-10-2019 4PM' , status:'Success' , user:'test-user' },
    {serialNumber: 4,fileName: 'geographySurcharge.xls', fileType:'Geography Surcharge' ,  date:'22-10-2019 4PM' , status:'Success' , user:'test-user'},
    {serialNumber: 5,fileName: 'geographySurcharge.xls', fileType:'Geography Surcharge' ,  date:'22-10-2019 4PM' , status:'Success' , user:'test-user'},
    {serialNumber: 6,fileName: 'geographySurcharge.xls', fileType:'Geography Surcharge' ,  date:'22-10-2019 4PM' , status:'Success', user:'test-user' },
    {serialNumber: 7,fileName: 'geographySurcharge.xls', fileType:'Geography Surcharge' ,  date:'22-10-2019 4PM' , status:'Success' , user:'test-user'},
    {serialNumber: 8,fileName: 'geographySurcharge.xls', fileType:'Geography Surcharge' ,  date:'22-10-2019 4PM' , status:'Success' , user:'test-user'},
    {serialNumber: 9,fileName: 'geographySurcharge.xls', fileType:'Geography Surcharge' ,  date:'22-10-2019 4PM' , status:'Success' , user:'test-user'},
    {serialNumber: 10,fileName: 'geographySurcharge.xls', fileType:'Geography Surcharge' ,  date:'22-10-2019 4PM' , status:'Success' , user:'test-user'},
    {serialNumber: 11,fileName: 'geographySurcharge.xls', fileType:'Geography Surcharge' ,  date:'22-10-2019 4PM' , status:'Success', user:'test-user' },
    {serialNumber: 12,fileName: 'geographySurcharge.xls', fileType:'Geography Surcharge' ,  date:'22-10-2019 4PM' , status:'Success', user:'test-user' }
];
export interface HistoryElements {
    serialNumber : number;
    fileName : string;
    fileType : string;
    date : string;
    status : string;
    user : string;
    
    }