import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIConstants } from '../_configs/url-config'
@Injectable({
  providedIn: 'root'
})
export class AppService {
  httpOptions: any = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',

    })
  };
  //  apiURL: string = 'http://10.210.60.195:8085/execution/getAllExecution?startedBy=';
  apiURL1: string = 'http://10.210.60.195:8086/almexecution/fetchExecutionTestCases?runId=';
  //   apiURLProfile:string='http://10.210.60.195:8085/execution/getAllEligibleProfiles';
  //  apiTestKeyProfile:string='http://10.210.60.195:8085/execution/fetchTestCaseKeysForProfiles?scenarioIds=';
  apiOrgDest = 'http://10.210.60.195:8085/execution/getAllEdiConByOriginAndDestination?';
  apiSaveProf = 'http://10.210.60.195:8085/execution/saveMultiProfileExecution';
  apiSaveScheduleProf = ' http://10.210.60.195:8090/schedule/saveMultiProfileScheduleExecution';
  apiUpdateSchedule ='http://10.210.60.195:8090/schedule/updateMultiProfileScheduleExecution/';
  

  constructor(private httpClient: HttpClient) { }
  public getAllExecution(logName) {
    return this.httpClient.get<any[]>(`${APIConstants.getAllExecution}` + `${logName}`);
  }
  public fetchExecutionTestCases(tiid) {
    return this.httpClient.get<any[]>(`${this.apiURL1}` + `${tiid}`);
  }
  public getAllEligibleProfiles() {
    return this.httpClient.get<any[]>(`${APIConstants.getAllEligibleProfiles}`);
  }
  public fetchTestCaseKeysForProfiles(isSequential, profileId) {
    return this.httpClient.get<any[]>(`${APIConstants.fetchTestCaseKeysForProfiles}isSequential=${isSequential}&scenarioIds=${profileId}`);
  }
  public getAllEdiConByOriginAndDestination(org, dest) {
    return this.httpClient.get<any[]>(`${this.apiOrgDest}destination=${dest}&origin=${org}`);

  }
  public saveProfileExecution(data: any) {
    return this.httpClient.post<any>(this.apiSaveProf, data, this.httpOptions);
  }
  public saveMultiProfileScheduleExecution(data: any) {
    return this.httpClient.post<any>(this.apiSaveScheduleProf, data, this.httpOptions);
  }

  public loadScheduleRunner() {
    return this.httpClient.get<any[]>(`${APIConstants.fetchScheduleRunner}`);
  }
  public loadScheduledProfile() {
    return this.httpClient.get<any[]>(`${APIConstants.fetchScheduledProfile}`);
  }
  public fetchAllScheduleRunsForScheduleId(id){
    return this.httpClient.get<any[]>(`${APIConstants.fetchAllScheduleRunsForScheduleId}` + `${id}`);

  }
public forceStartSchedule(id){
  http://10.210.60.195:8090/schedule/forceStartSchedule/956761
  return this.httpClient.get<any[]>(`${APIConstants.forceStartSchedule}` + `${id}`);

}
public deleteSchedule(id:any){
  return this.httpClient.delete<any>(`${APIConstants.deleteScheduleProfile}` + `${id}`);

}
public updateMultiProfileScheduleExecution(data:any){
  return this.httpClient.put<any>((`${this.apiUpdateSchedule}`+`${data.scheduleId}`),data,this.httpOptions);

}
public fetchAllWorkItems(){
  return this.httpClient.get<any[]>(`${APIConstants.fetchAllWorkItems}`);

}
} 