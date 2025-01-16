import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MenuItem } from './../../../../../core/models/menu-item';

@Component({
  selector: 'app-mobile-nav-list',
  templateUrl: './mobile-nav-list.component.html',
  styleUrl: './mobile-nav-list.component.scss',
})
export class MobileNavListComponent implements OnInit {
  menu: MenuItem[] = [];

  constructor(
    private bottomSheetRef: MatBottomSheetRef<MobileNavListComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { menuList: MenuItem[] }
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.menu = this.data?.menuList;
    }
  }

  openLink() {
    this.bottomSheetRef.dismiss();
  }
}
