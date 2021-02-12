import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name:  this.formBuilder.control('Brenner', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category:  this.formBuilder.control(''),
      year:  this.formBuilder.control('', this.yearValidator),
    });
  }

  yearValidator(control: FormControl){
    if(control.value.trim().length === 0){
      return null;
    }

    const year = parseInt(control.value);
    const minYear = 1800;
    const maxYear = 2500;

    if(year >= minYear && year <= maxYear){
      return null;
    }
    else{
      return { year: {
        min: minYear,
        max: maxYear
      }};
    }

  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
}
