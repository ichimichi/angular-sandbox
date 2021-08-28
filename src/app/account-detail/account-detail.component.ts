import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss'],
})
export class AccountDetailComponent implements OnInit {
  id: Observable<string>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('id'))
    );
  }
}
