import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  show:boolean = true;
 hide:boolean = false;
  ngOnInit(): void {
  }

  // invalidDetails = '';
  submitted=false
  constructor(private r:Router,private fb:FormBuilder) { }
  get f(){ return this.form.controls}
form=this.fb.group({
  uname:['',Validators.required],
  pwd:['',Validators.required]
})
login(){
this.submitted=true
if(this.form.invalid){
return
}else{
  if(this.form.controls['uname'].value=='admin' && this.form.controls['pwd'].value=='admin'){
localStorage.setItem('user',this.form.value.uname)
this.r.navigate(['home'])
  }else{
    // alert('username & password are incorrect');
  //   this.toastrService.warning(' Username & Password are incorrect', '' , {
  //     closeButton: true,
  //      timeOut: 1500, // 15 seconds
  //      progressBar: true,
       
  //  });
    // this.invalidDetails = 'Username & Password are incorrect';
    this.form.reset()
    this.submitted=false
}
}
}
forgetpassword(){
this.show = false;
this.hide = true;
}

}
