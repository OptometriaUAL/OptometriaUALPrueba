import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {PostComponent} from './post/post.component';
import { FormBuilder,Validators } from '@angular/forms';
import {noSpace} from './validators/nospace.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
     form:any;
  constructor(fb:FormBuilder){
    this.form = fb.group({

  username:['',[
   Validators.required,
   Validators.minLength(5),
   noSpace.noSpaceValidations

  ]],
  password:['',Validators.required]
})


  }
 get fc (){
  return this.form.controls;
 }


}


/*
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {PostComponent} from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'y';
  parentMessage:string="Message changed";
  message?:string;
  items=['item1','item2'];
  fromChildOutput?:string;
  message:string = 'Message from Typescript component file';
  ImageUrl:string= 'https://cie.spacefoundation.org/wp-content/uploads/2022/07/Astronaut.jpg';
  @ViewChild(PostComponent) childComp:any;

  constructor(){
    console.log(this.childComp)
  }

  ngAfterViewInit(){
    console.log(this.childComp.childMessage)
    this.message=this.childComp.childMessage;
  }


  reciveMessage($event:any){
this.fromChildOutput= $event;
  }


addItem(newItem:string){
  this.items.push(newItem);
  console.log("items : ", this.items)
}


  bool:boolean = false;
  bool2:boolean = false;

  userName!: string;
  textValue: string = "Value"
  PostForm!: string;
  PostDetails!: string;
  ImageURL!: string;
  url!: string;
  hola: string = "Hola1";


  buttonClick(){
    console.log('Button Click Event worked')
  }


  onKeyup(){

console.log(this.textValue);

}

}



stepForm?: string = "something else";

isActive: boolean= true;
postArray: Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5' ];
objectArray: Array<any>=[
  
 
  {id:1,postTitle:'Post 1'},
  {id:2,postTitle:'Post 2'},
  {id:3,postTitle:'Post 3'},
  {id:4,postTitle:'Post 4'},
  {id:5,postTitle:'Post 5'},



]
addNew(){
  this.objectArray.push({id:6,postTitle:'Post 6'})
}

onDelete(index:any)
{
this.objectArray.splice(index, 1);

}
onClick(status:any){
  this.stepForm = status;

}


Name?: string;
Email?:string;
Address?:string;
Tabla:Array<any>=[];



save(){

  this.Tabla?.push({Name:this.Name,Email:this.Email,Address:this.Email})
}
onDelete(index:any){
  this.Tabla?.splice(index, 1);

}
  title:string = "Angular Course";
  count:number=285645;
  dcValue:number=3.85674;
  price:number=99.99;
today:Date = new Date();
postObject: object = {
  id:1,
  postTitle:"Post 1"
}

postArray: Array<string>=[
"post 1",
"post 2"


]

userdetails={
  name:"User 1",
  city:"Newyork",
  countryCode:"US"
}

dummyText:string ="AAAAA BBBBB CCCCCCC DDDDDDD EEEEEEE FFFFFF GGGGG HHHHHHHH IIIIIIIIIII JJJJJJJJJJJJ KKKKK LLLLLLL MMMMMMMMMMMMMM NNNNNNNNNNNNNNN"
















import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {PostComponent} from './post/post.component';
import {FormControl,NgModel,FormGroup,NgForm, Validators, FormArray, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  form:any;
  emailRegex:string = '[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$';
  contactRegex:string="[789][0-9]{9}";

  constructor(){


    this.form = new FormGroup({
      fullName:new FormControl('',[
        Validators.required,
        Validators.minLength(5),

      ]),
      email:new FormControl('',[
        Validators.required,
        //Validators.pattern(this.emailRegex)
        Validators.email
      ]),
contactDetails: new FormGroup({
        address:new FormControl('',
        Validators.required,
      ),
      shippingAddress: new FormControl('',Validators.required),
      contactNo: new FormControl('',[
        Validators.required,
        Validators.pattern(this.contactRegex)
      ])
}),
skills: new FormArray([])

    })


  
  }
  get fullname(){

    return this.form.get('fullName')
  }
  get Email(){

    return this.form.get('email')
  }
  get Address(){

    return this.form.get('contactDetails.address')
  }
  get ShippingAddress(){

    return this.form.get('contactDetails.shippingAddress')
  }

  get Contact(){

    return this.form.get('contactDetails.contactNo')
  }
get Skills(){
  return this.form.get('skills') as FormArray;

}
 
    onSubmit(f:NgForm){
      console.log(f.value)
  
}
     
onSubmit2(){
  console.log(this.form.value)

}

addSkills(skills: HTMLInputElement){

  this.Skills.push(
    new FormControl(skills.value)
  )
  skills.value='';
  console.log(this.form.value)
}


removeSkills(index:any){
this.Skills.removeAt(index)
}

getValue(model:NgModel){
  console.log(model.value)
}



}

*/
/*
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {PostComponent} from './post/post.component';
import {FormControl,NgModel,FormGroup,NgForm, Validators, FormArray, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  form:any;
  emailRegex:string = '[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$';
  contactRegex:string="[789][0-9]{9}";

  constructor(fb: FormBuilder){

    this.form = fb.group({

      fullName:['',
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ],
      email:['',[
        Validators.required,
        Validators.email
      ]],
      contactDetails: fb.group({
        address:['',Validators.required],
        shippingAddress:['',Validators.required],
        contactNo:['',[
          Validators.required,
          Validators.pattern(this.contactRegex)
        ]]
      }),
      skills:fb.array([])
    })


  }
  get fullname(){

    return this.form.get('fullName')
  }
  get Email(){

    return this.form.get('email')
  }
  get Address(){

    return this.form.get('contactDetails.address')
  }
  get ShippingAddress(){

    return this.form.get('contactDetails.shippingAddress')
  }

  get Contact(){

    return this.form.get('contactDetails.contactNo')
  }
get Skills(){
  return this.form.get('skills') as FormArray;

}
 
    onSubmit(f:NgForm){
      console.log(f.value)
  
}
     
onSubmit2(){
  console.log(this.form.value)

}

addSkills(skills: HTMLInputElement){

  this.Skills.push(
    new FormControl(skills.value)
  )
  skills.value='';
  console.log(this.form.value)
}


removeSkills(index:any){
this.Skills.removeAt(index)
}

getValue(model:NgModel){
  console.log(model.value)
}



}


/*
*/