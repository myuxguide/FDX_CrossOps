import { environment } from '../environments/environment.local';
export class APIConstants {
    public static getAllExecution = environment.apiURL + "/execution/getAllExecution?startedBy=";
    public static getAllEligibleProfiles = environment.apiURL + "/execution/getAllEligibleProfiles";
    public static fetchTestCaseKeysForProfiles = environment.apiURL + "execution/fetchTestCaseKeysForProfiles?";
    public static fetchScheduleRunner = environment.apiURLScedule + "schedule/fetchScheduleRunner";
    public static fetchScheduledProfile = environment.apiURLScedule + "schedule/fetchAllScheduleProfiles";
    public static fetchAllScheduleRunsForScheduleId = environment.apiURLScedule + "schedule/fetchAllScheduleRunsForScheduleId/";
    public static forceStartSchedule = environment.apiURLScedule + "schedule/forceStartSchedule/";
    public static deleteScheduleProfile= environment.apiURLScedule + "schedule/deleteScheduleProfile/";
    public static fetchAllWorkItems = environment.apiURLWorkItem + "workItem/fetchAllWorkItems"


}