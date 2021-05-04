export interface profile {
  order:string;
  checked:boolean;
  name: string;
  id: number;
  description: string;
  input:any;
}
export interface viewsteps {
  expand:string;
  profileId: number;
  scriptKey: string;
  for: number;
  inputData: string;
  outputData:string;
  critical:string;
  execute:string;
  type:String;
  status:string;
  add:string;

}
export interface consignment {
  key:string;
  value: string;
  
}
export interface scenario {
  checked:boolean;
  scenarioId:string;
  senderCountry:string;
  senderPostCode:string;
  senderAccountId:string;
  senderCity:string;
  recieverAccountId:string;
  receiverComName:string;
  receiverCountry:string;
  receiverPostCode:string;
  itemDesc:string;
  itemQuantity:string;
  articleCondition:string;
  isCustControlled:string;
  tariffCode:string;
  senderDepot:string;
  itemWeight:string;
  itemLength:string;
  itemWidth:string;
  itemHeight:string;
  isDangerousGoods:string;
  description:string;
  
}
export interface saveExecutionObj{
  sequential:boolean;
  emails: string;
  e2eScenarioForProfileExecutionList:any[];
};