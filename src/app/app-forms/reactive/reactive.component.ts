import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
// can use from bulder to create from control, rather creating ne from control
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  genders = ['male', 'female'];

  //  first we need to create our from by formgroup
  signupForm: FormGroup;


  forbiddenUsernames = ['Chris', 'Anna'];

// inject from builder
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    
    // this.signupForm = new FormGroup({

    //   // can crated from grop with in from group as ngmodelgroup in templatedriven
    //   'userData': new FormGroup({

    //     // input field as  formcontrol takes as( defaultvalue, [sync validators], [async validtors] )
    //     // key name must be match with form control name
       
    //     // need bind current fordidden name as js using only for sync
    //     'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]), 
    //     'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
    //   }),
    //   'gender': new FormControl('male'),

    //   // from array , hold array of form control 
    //   'hobbies': new FormArray([])
    // });

    //From builder

    this.signupForm = this.fb.group({
      userData:this.fb.group({
        username : [null,[Validators.required,this.forbiddenNames.bind(this)]],
        email: [null, [Validators.required, Validators.email], this.forbiddenEmails]
      }),
      gender: ['male'],
      hobbies: this.fb.array([])
    })

   // can reactive form when ever value chaged
     
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );


    // can react to from when ever status chang

    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );

    // set and patch same as template driven
    this.signupForm.setValue({
      'userData': {
        'username': 'Max',
        'email': 'max@test.com'
      },
      'gender': 'male',
      'hobbies': []
    });
    this.signupForm.patchValue({
      'userData': {
        'username': 'Bob',
      }
    });
  }

  // using get method , can use contol as directly in *ngFor

  get controls() {

    // need type explicalty as form,to know angular  (hobbies as from array).tofromcontrol
    // return (this.signupForm.get('hobbies') as FormArray).controls;

    //from builder
    
    return (this.signupForm.get('hobbies') as FormArray).controls
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset({
      gender:'male'
    });
  }

  onAddHobby() {
    // create a from conntrol
    // const control = new FormControl(null, Validators.required);

    // casting normal arry to form arrayand  pushing 
    // (<FormArray>this.signupForm.get('hobbies')).push(control);

    //from builder
     const control = this.fb.control(null,[Validators.required]);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }


  // contaol can fromcontaol or abstact control ehich does explicty type cast
  // sync custom validator
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  //async custom validatros
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

}
