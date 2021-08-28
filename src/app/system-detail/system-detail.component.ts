import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { System } from '../data/system';
import { SystemService } from '../data/system.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-system-detail',
  templateUrl: './system-detail.component.html',
  styleUrls: ['./system-detail.component.scss'],
})
export class SystemDetailComponent implements OnInit {
  system: System;
  id: any;

  constructor(
    private systemService: SystemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.id = +params.get('id');
          return this.systemService.getSystemDetail(this.id);
        })
      )
      .subscribe((data) => {
        this.system = data;
      });
  }
}
