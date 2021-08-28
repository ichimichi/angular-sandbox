import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { SystemService } from '../data/system.service';

@Component({
  selector: 'app-system-info',
  templateUrl: './system-info.component.html',
  styleUrls: ['./system-info.component.scss'],
})
export class SystemInfoComponent implements OnInit {
  info: Observable<string>;

  constructor(
    private systemService: SystemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.info = this.route.parent.paramMap.pipe(
      map((params: ParamMap) => +params.get('id')),
      switchMap((id: number) => this.systemService.getSystemInfo(id))
    );
  }
}
