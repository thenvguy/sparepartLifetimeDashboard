import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sparepart-form',
  templateUrl: './sparepart-form.component.html',
  styleUrls: ['./sparepart-form.component.css'],
})
export class SparepartFormComponent {
  constructor() {}

  @Input() title: string | undefined;
  @Output() closeModalEvent = new EventEmitter<boolean>();

  closeModal() {
    this.closeModalEvent.emit(true);
  }
}
