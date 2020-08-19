import { Component, OnInit } from '@angular/core';
import {
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
  faPuzzlePiece,
  faGraduationCap,
  faIdCard
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  faEnvelope = faEnvelope;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  faPuzzlePiece = faPuzzlePiece;
  faGraduationCap = faGraduationCap;
  faIdCard = faIdCard;
  constructor() {}

  ngOnInit(): void {}
}
