import { Component, Inject, OnInit } from '@angular/core';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';
import { Observable } from 'rxjs/Observable';
import { REQUEST } from '@nguniversal/express-engine/dist/src/tokens';

@Component({
  selector: 'home-view',
  template: `<h3>{{subs | async}}</h3>`
})
export class HomeView implements OnInit {
  public subs: Observable<string>;

  constructor(private http: TransferHttp,
              @Inject(REQUEST) private request: any) {
    console.log(request);
  }

  ngOnInit() {
    this.subs = this.http.get('http://localhost:8000/data').map(data => {
      return `${data.greeting} ${data.name}`;
    });
  }
}
