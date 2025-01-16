import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit {
  list: string[] = [];
  title: string = '';

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; list: string[] }
  ) {}

  ngOnInit(): void {
    const { title, list } = this.data;
    this.title = title;
    this.list = list;
  }

  onClose(): void {
    this.dialogRef.close(true);
  }
}
