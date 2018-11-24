import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';


@Component({
  selector: 'app-pag-venta',
  templateUrl: './pag-venta.page.html',
  styleUrls: ['./pag-venta.page.scss'],
})
export class PagVentaPage implements OnInit {

  messages: any;
  private db: any;

  constructor(public modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }

  ngOnInit() {
    this.db = firebase.firestore();
    this.loadData();
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
