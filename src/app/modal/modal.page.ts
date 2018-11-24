import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  messages: any;
  private db: any;

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
    this.db = firebase.firestore();
    this.loadData();
  }

  closeModal()
  {
    this.modalCtrl.dismiss();
  }

  loadData(){
   this.getAllDocuments("celular").then((e)=>{
     this.messages = e;
 });
 }

 getAllDocuments(collection: string): Promise<any> {
    return new Promise((resolve, reject) => {
        this.db.collection(collection)
            .get()
            .then((querySnapshot) => {
                let arr = [];
                querySnapshot.forEach(function (doc) {
                    var obj = JSON.parse(JSON.stringify(doc.data()));
                    obj.$key = doc.id
                    console.log(obj)
                    arr.push(obj);
                });

                if (arr.length > 0) {
                    console.log("Data del documento. soy un logger, ignorenme:", arr);
                    resolve(arr);
                } else {
                    console.log("No hay tal documento!");
                    resolve(null);
                }

            })
            .catch((error: any) => {
                reject(error);
            });
    });
  }
}
