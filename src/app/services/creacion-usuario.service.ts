import { Injectable } from '@angular/core';
import { AngularFirestore, SETTINGS, AngularFirestoreCollection} from '@angular/fire/firestore'
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CreacionUsuarioService {
  private path = 'usuarios';
  constructor(private db: AngularFirestore) { }
  // tslint:disable-next-line: typedef
  createUser(uid: string, dato2: FormGroup){
    if (uid){
      this.db.collection(this.path).doc(uid).set({
        nombres: dato2.value.nombres,
        apellidos: dato2.value.apellidos,
        region: dato2.value.region,
        telefono: dato2.value.telefono,
        sobreMi: dato2.value.sobreMi,
        foto: null
      });
    }
  };
}
