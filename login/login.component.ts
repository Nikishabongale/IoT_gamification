import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginGroup: any;
  userData: any;
  messageSuccess='';
 
  constructor(public form: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm()
  {
    this.loginGroup = this.form.group({
     // name:['',Validators.required],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      //repassword: ['', [Validators.required]],
    });
  }
  fieldTextType!: boolean;
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  get f() { return this.loginGroup.controls; }
  
  submit()
  {
    if(this.loginGroup.invalid)
    {
        for (const control of Object.keys(this.loginGroup.controls)) {
          this.loginGroup.controls[control].markAsTouched();
        }
    }
    else
    {
      this.userData = this.loginGroup.value;
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
