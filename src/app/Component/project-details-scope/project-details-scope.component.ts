import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-project-details-scope',
  templateUrl: './project-details-scope.component.html',
  styleUrls: ['./project-details-scope.component.css']
})
export class ProjectDetailsScopeComponent implements OnInit {
  projectId: Number
  scopeData: any;

  determineTargeCP: String
  appFitReadAss: String
  security: String
  security_radio: String
  risk: String
  risk_radio: String
  toBeStateArch: String
  migrationPlan: String
  totalCostOwner: String
  roi: String
  legalEntity: String
  bussinessUnit: String
  applications: String
  databases: String
  servers: String
  locations: String

  addScopeForm: FormGroup;
  constructor(private fb: FormBuilder,private router: Router, private projectService: ProjectService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.projectId = params['id'];

    })

    this.addScopeForm = this.fb.group({

      determineTargeCP: ['',],
      appFitReadAss: ['',],
      security: [''],
      security_radio: [''],
      risk: ['',],
      risk_radio: ['',],
      toBeStateArch: ['',],
      migrationPlan: ['',],
      totalCostOwner: ['',],
      roi: ['',],
      legalEntity: ['',],
      bussinessUnit: ['',],
      applications: [''],
      databases: ['',],
      servers: ['',],
      locations: ['']
    });

  }


  GetStats1(event: Event, isChecked: any) {
    if (isChecked) {
      this.determineTargeCP = (event.target as HTMLInputElement).value;
    } else {
      this.determineTargeCP = null
    }
  }
  GetStats2(event: Event, isChecked: any) {
    if (isChecked) {
      this.appFitReadAss = (event.target as HTMLInputElement).value;
    } else {
      this.appFitReadAss = null
    }
  }
  GetStats3(event: Event, isChecked: any) {
    if (isChecked) {
      this.security = (event.target as HTMLInputElement).value;
    } else {
      this.security = null
    }
  }
  // GetStats4(event: Event, isChecked: any) {
  //   if (isChecked) {
  //     this.security_radio = (event.target as HTMLInputElement).value;
  //   } else {
  //     this.security_radio = null
  //   }
  // }
  GetStats5(event: Event, isChecked: any) {
    if (isChecked) {
      this.risk = (event.target as HTMLInputElement).value;
    } else {
      this.risk = null
    }
  }
  // GetStats6(event: Event, isChecked: any) {
  //   if (isChecked) {
  //     this.risk_radio = (event.target as HTMLInputElement).value;
  //   } else {
  //     this.risk_radio = null
  //   }
  // }
  GetStats7(event: Event, isChecked: any) {
    if (isChecked) {
      this.toBeStateArch = (event.target as HTMLInputElement).value;
    } else {
      this.toBeStateArch = null

    }
  }
  GetStats8(event: Event, isChecked: any) {
    if (isChecked) {
      this.migrationPlan = (event.target as HTMLInputElement).value;
    } else {
      this.migrationPlan = null
    }
  }
  GetStats9(event: Event, isChecked: any) {
    if (isChecked) {
      this.totalCostOwner = (event.target as HTMLInputElement).value;
    } else {
      this.totalCostOwner = null
    }
  }
  GetStats10(event: Event, isChecked: any) {
    if (isChecked) {
      this.roi = (event.target as HTMLInputElement).value;
    } else {
      this.roi = null
    }
  }
  
  addScopes() {

    this.scopeData = {
      "scopes": {
        "functional-scopes": {
          "scope-name": [
            this.determineTargeCP,
            this.appFitReadAss,
            this.security,
            this.addScopeForm.get('security_radio').value,
            this.risk,
            this.addScopeForm.get('risk_radio').value,
            this.toBeStateArch,
            this.migrationPlan,
            this.totalCostOwner,
            this.roi,
          ]
        },
        "quantitative-scopes": {
          "scope-name": [
            this.addScopeForm.get('legalEntity').value,
            this.addScopeForm.get('bussinessUnit').value,
            this.addScopeForm.get('applications').value,
            this.addScopeForm.get('databases').value,
            this.addScopeForm.get('servers').value,
            this.addScopeForm.get('locations').value,
          ]
        }
      }
    }

    this.projectService.addScopestobackend(this.projectId, this.scopeData).subscribe((data) => {
      console.log(data)
      this.router.navigate(['overview'])
    }, (err) => {
      console.log(err)
    })
  }

}
