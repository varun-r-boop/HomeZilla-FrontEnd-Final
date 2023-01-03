import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

  @Input() public user: any;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  date?: Date;
  time = {
    hour: 0,
    minute: 0
  };

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    console.log(this.user);
  }

  passBack() {
    this.passEntry.emit(this.user);
    this.activeModal.close(this.user);
  }
}
