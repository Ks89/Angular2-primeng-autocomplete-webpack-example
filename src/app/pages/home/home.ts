import {Component, AfterViewInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ValuesService} from '../../common/services/values.service';

@Component({
  selector: 'home-page',
  template: require('./home.html')
})
export default class HomeComponent {
  text: string;
  results: string[];

  search(event) {
      this.results = ['Example 1','Example 2', 'Exaple 3'];
  }
}
