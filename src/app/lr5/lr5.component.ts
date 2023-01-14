import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MyValidator} from "../my.validator";

@Component({
  selector: 'app-lr5',
  templateUrl: './lr5.component.html',
  styleUrls: ['./lr5.component.scss']
})
export class Lr5Component implements OnInit {
  form: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required, MyValidator.restrictedEmails]),
      password: new FormControl(null, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10)
        ]
      ),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('Запорожье', [Validators.required, Validators.minLength(3)])
      }),
      skills: new FormArray([])
    })
  }

  setCapital() {
    const mapCity = {
      ua: "Киев",
      pl: "Варшава",
      de: "Берлин"
    }
    const getCity = this.form.get('address')!.value.country
    // @ts-ignore
    this.form.get('address')!.patchValue({city: mapCity[getCity]});
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    (<FormArray>this.form.get('skills')).push(control);
  }

  get getSkills() {
    return this.form.get('skills') as FormArray
  }

  removeSkill(index: number) {
    let form = this.form.get('skills') as FormArray
    form.removeAt(index);
  }

  submit() {
    const formControl = {...this.form.value}
    console.log(formControl)
    this.form.reset()
  }
}
