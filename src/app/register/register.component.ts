import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { ConfirmPasswordValidator } from '../customValidations/confirm-password.validator';

//import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationGroup!:FormGroup;
  userData!:any;
  messageSuccess!:string;
  messageError!: string;
  errorVisible=false;
  successVisible=false;
  
  constructor(
    public router: Router,public form: FormBuilder,//private _service:RestapiService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm()
  {
    this.registrationGroup = this.form.group({
      name:['',Validators.required],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      repassword: ['', [Validators.required]],
    },
    {
      validator: ConfirmPasswordValidator("password", "repassword")
    }
    );

    if (this.registrationGroup.valid) {
        console.log(this.registrationGroup);
      }
      else
      {
        //alert("not valid");
      }
  }
  
  fieldTextType!: boolean;
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  get f() { return this.registrationGroup.controls; }


  submit()
  {
    if(this.registrationGroup.invalid)
    {
        for (const control of Object.keys(this.registrationGroup.controls)) {
          this.registrationGroup.controls[control].markAsTouched();
        }
    }
    else
    {
      this.userData = this.registrationGroup.value;
      const jsonUserdata = JSON.stringify(this.userData);
      const jsonObjUser = JSON.parse(jsonUserdata);
      console.log(jsonObjUser);

    try
    {
      /*this._service.postData(jsonObjUser).subscribe((data:any)=>{
      console.log("data "+JSON.stringify(data));
        if(data.error==true)
        {
          this.messageError=data.message["sqlMessage"];
          this.messageSuccess='';
          this.errorVisible=true;
          this.successVisible=false;
        }
        else
        {
          this.messageSuccess=data.message;
          this.messageError='';
          this.successVisible=true;
          this.errorVisible=false;
          alert("User inserted succesfully!");
          this.router.navigateByUrl('/login');
        }
      });*/ 
      console.log("submitted");
      }
      catch(e)
      {
        console.log(e);
        this.messageSuccess="Some error occured!";

      }
    }
  }
}