import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Item } from '../data/system';
import { SystemService } from '../data/system.service';

@Component({
  selector: 'app-system-items',
  templateUrl: './system-items.component.html',
  styleUrls: ['./system-items.component.scss'],
})
export class SystemItemsComponent implements OnInit {
  items: Observable<Item[]>;

  constructor(
    private systemService: SystemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.items = this.route.paramMap.pipe(
      map((params: ParamMap) => +params.get('id')),
      switchMap((id: number) => this.systemService.getSystemItems(id))
    );
  }
}
