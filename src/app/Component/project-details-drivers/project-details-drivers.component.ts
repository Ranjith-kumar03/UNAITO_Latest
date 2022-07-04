import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-project-details-drivers',
  templateUrl: './project-details-drivers.component.html',
  styleUrls: ['./project-details-drivers.component.css']
})
export class ProjectDetailsDriversComponent implements OnInit {
  driverData: any;
  addDriversForm: FormGroup;

  financeModel: String
  fasterTimetoMarket: String
  innv_exp_lowcost: String
  business_agility_flex: String
  others_BD: String
  others_BD_Text: String
  Ease_of_operation: String
  Scalability: String
  Automation: String
  others_IT: String
  others_IT_Text: String
  projectId: Number
  constructor(private fb: FormBuilder,private router: Router, private activatedRoute: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.projectId = params['id'];

    })


    this.addDriversForm = this.fb.group({

      financeModel: ['',],
      fasterTimetoMarket: ['',],
      innv_exp_lowcost: [''],
      business_agility_flex: ['',],
      others_BD: ['',],
      others_BD_Text: ['',],
      Ease_of_operation: ['',],
      Scalability: ['',],
      Automation: ['',],
      Others_IT: ['',],
      Others_IT_Text:['']
    });

  }

  GetStats1(event: Event, isChecked: any) {
    if (isChecked) {
      this.financeModel = (event.target as HTMLInputElement).value;
    } else {
      this.financeModel = null
    }
  }
  GetStats2(event: Event, isChecked: any) {
    if (isChecked) {
      this.fasterTimetoMarket = (event.target as HTMLInputElement).value;
    } else {
      this.fasterTimetoMarket = null
    }
  }
  GetStats3(event: Event, isChecked: any) {
    if (isChecked) {
      this.innv_exp_lowcost = (event.target as HTMLInputElement).value;
    } else {
      this.innv_exp_lowcost = null
    }
  }
  GetStats4(event: Event, isChecked: any) {
    if (isChecked) {
      this.business_agility_flex = (event.target as HTMLInputElement).value;
    } else {
      this.business_agility_flex = null
    }
  }
  GetStats5(event: Event, isChecked: any) {
    if (isChecked) {
      this.others_BD = (event.target as HTMLInputElement).value;
    } else {
      this.others_BD = null
      this.others_BD_Text =null
    }
  }
  GetStats6(event: Event, isChecked: any) {
    if (isChecked) {
      this.Ease_of_operation = (event.target as HTMLInputElement).value;
    } else {
      this.Ease_of_operation = null
    }
  }
  GetStats7(event: Event, isChecked: any) {
    if (isChecked) {
      this.Scalability = (event.target as HTMLInputElement).value;
    } else {
      this.Scalability = null
    }
  }
  GetStats8(event: Event, isChecked: any) {
    if (isChecked) {
      this.Automation = (event.target as HTMLInputElement).value;
    } else {
      this.Automation = null
    }
  }
  GetStats9(event: Event, isChecked: any) {
    if (isChecked) {
      this.others_IT = (event.target as HTMLInputElement).value;
    } else {
      this.others_IT = null
      this.others_IT_Text =null
    }
  }
  GetStats10(event: Event) {

    this.others_IT_Text = (event.target as HTMLInputElement).value;

  }
  GetStats11(event: Event) {

    this.others_BD_Text = (event.target as HTMLInputElement).value;

  }

  addDrivers() {

    this.driverData = {
      "drivers": {
        "business-drivers": {
          "driver-name": [
            this.financeModel,
            this.fasterTimetoMarket,
            this.innv_exp_lowcost,
            this.business_agility_flex,
            this.others_BD? this.addDriversForm.get('others_BD_Text').value : this.addDriversForm.get('others_BD_Text').setValue('')

          ]
        },
        "it-drivers": {
          "driver-name": [
            this.Ease_of_operation,
            this.Scalability,
            this.Automation,
            this.others_IT? this.addDriversForm.get('Others_IT_Text').value : this.addDriversForm.get('Others_IT_Text').setValue('')
          ]
        }
      }
    }

    console.log("see the drivers form value", this.addDriversForm.value)
    console.log("see the drivers form value", this.driverData)

    this.projectService.addDriverstobackend(this.projectId, this.driverData).subscribe((data) => {
      console.log(data)
      this.router.navigate(['overview'])

    }, (err) => {


      console.log(err)
    })
  }

}
