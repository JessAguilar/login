import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/firestore';
let data;
@Component({
  selector: 'app-tabla-ing-egr',
  templateUrl: './tabla-ing-egr.page.html',
  styleUrls: ['./tabla-ing-egr.page.scss'],
})
export class TablaIngEgrPage implements OnInit {

  messages: any;
  messages2: any;
  compras: any;
  iva: number;
  iue: number;
  it: number;
  tiendas: any;
  private db: any;
  model: any = {};
  isEditing: boolean = false;
  ingresos: any = 0;


  constructor() {

  }

  ngOnInit() {
    this.db = firebase.firestore();
    this.loadData();
  }

  loadData(){
     this.getAllDocuments("venta").then((e)=>{
         this.messages = e;
     });
     this.getAllDocuments("empleado").then((e)=>{
         this.messages2 = e;
     });
     this.getAllDocuments("compra").then((e)=>{
         this.compras = e;
     });
     this.getAllDocuments("tienda").then((e)=>{
         this.tiendas = e;
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
                     arr.push(obj);
                 });

                 if (arr.length > 0) {
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
