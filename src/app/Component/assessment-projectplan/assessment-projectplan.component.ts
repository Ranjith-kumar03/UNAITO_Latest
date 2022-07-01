import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-assessment-projectplan',
  templateUrl: './assessment-projectplan.component.html',
  styleUrls: ['./assessment-projectplan.component.css']
})
export class AssessmentProjectplanComponent implements OnInit {
excelData:any
  constructor() { }

  ngOnInit(): void {
  }

  onFileInput(event:any)
  {
    console.log("see the file",event.target.files[0])
    let file = event.target.files[0]
    console.log("see the file",file)
    let fileReader = new FileReader()
    fileReader.readAsBinaryString(file)

    fileReader.onload =(e)=>{
     let workBook = XLSX.read(fileReader.result,{type:'binary'})
     
     let sheetNames = workBook.SheetNames
     
     this.excelData=XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]])
    
    }
  }

}
