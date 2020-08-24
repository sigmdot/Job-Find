import { Injectable } from '@angular/core';
import { AngularFirestore, SETTINGS, AngularFirestoreCollection} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class AvisosTrabajosService {
  private avisospath = '/avisodetrabajos';
  avisosRef: AngularFirestoreCollection<any> = null;

  constructor(private db: AngularFirestore) {
    this.avisosRef = db.collection(this.avisospath);
    console.log(this.avisosRef);
  }

  getListaAvisosTrabajos(): AngularFirestoreCollection<any> {
    return this.avisosRef;
  }
}
