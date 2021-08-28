import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { System } from '../data/system';
import { SystemService } from '../data/system.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-system-detail',
  templateUrl: './system-detail.component.html',
  styleUrls: ['./system-detail.component.scss'],
})
export class SystemDetailComponent implements OnInit {
  system: Observable<System>;

  constructor(
    private systemService: SystemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.system = this.route.paramMap.pipe(
      map((params: ParamMap) => +params.get('id')),
      switchMap((id: number) => this.systemService.getSystemDetail(id))
    );
  }
}
