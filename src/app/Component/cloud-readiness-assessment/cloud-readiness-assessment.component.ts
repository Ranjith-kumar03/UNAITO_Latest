import { Component, OnInit } from '@angular/core';

export interface CloudReadinessAssessment{
  id:number;
  title:String;
  image:String;
  duration:String;
}

@Component({
  selector: 'app-cloud-readiness-assessment',
  templateUrl: './cloud-readiness-assessment.component.html',
  styleUrls: ['./cloud-readiness-assessment.component.css']
})
export class CloudReadinessAssessmentComponent implements OnInit {

  cra:CloudReadinessAssessment[]=[
    {id: 1, title:'Avantor - Cloud Readiness Assessment',image:'../assets/Images/UNAITO/Icon/calendar.svg',duration:"4 Weeks (27 Jan ’22 to 24 Feb ’22)"},
    {id: 2, title:'Avantor - Cloud Readiness Assessment',image:'../assets/Images/UNAITO/Icon/calendar.svg',duration:"4 Weeks (27 Jan ’22 to 24 Feb ’22)"},
    {id: 3, title:'Avantor - Cloud Readiness Assessment',image:'../assets/Images/UNAITO/Icon/calendar.svg',duration:"4 Weeks (27 Jan ’22 to 24 Feb ’22)"},
   
];

 

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
