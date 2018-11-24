import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage implements OnInit {
  messages: any;
  private db: any;
  model: any = {};
  isEditing: boolean = false;
  constructor() {

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
