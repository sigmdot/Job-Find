import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class SubirFotoService {
  private basePath: string = '/usuarios';
  private uploadTask: firebase.storage.UploadTask;

  constructor(private storage: AngularFireStorage) { }
  upload(nombre: String, upload: any, porcentaje: any, url: any){
    let storageRef = firebase.storage().ref();
    this.uploadTask = storageRef.child(`${this.basePath}/${nombre}`).put(upload);
    this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        porcentaje = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(porcentaje);
      },
      (error)=>{
        console.log(error);
      },
      () =>{
        // tslint:disable-next-line: deprecation
        url = this.uploadTask.snapshot.downloadURL;
      });
  }
}
