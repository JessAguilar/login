import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'app-inventario2',
  templateUrl: './inventario2.page.html',
  styleUrls: ['./inventario2.page.scss'],
})
export class Inventario2Page implements OnInit {

    messages: any;
    private db: any;
    model: any = {};
    isEditing: boolean = false;
  
  constructor() {}

  ngOnInit() {
    this.db = firebase.firestore();
    this.loadData();
  }

  loadData(){
    this.getAllDocuments("celular").then((e)=>{
      this.messages = e;
  });
  }

  addMessage(){
    if(!this.isEditing){
    this.addDocument("celular", this.model).then(()=>{
      this.loadData();//refresh!
    });
  }else{
    this.updateDocument("celular", this.model.$key, this.model).then(()=>{
      this.loadData();//refresh!
    });
  }
  this.isEditing = false;
  //Borra de
  this.model.color = '';
  this.model.imagen = '';
  this.model.marca = '';
  this.model.modelo = '';
  this.model.precioCompra = '';
  this.model.precioVenta = '';
  this.model.descripcion = '';
}

updateMessage(obj){
    this.model = obj;
    this.isEditing = true;
  }
  
  deleteMessage(key){
    this.deleteDocument("celular", key).then(()=>{
      this.loadData();//refresh!
      this.isEditing = false;
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



deleteDocument(collectionName: string, docID: string): Promise<any> {
    return new Promise((resolve, reject) => {
        this.db
            .collection(collectionName)
            .doc(docID)
            .delete()
            .then((obj: any) => {
                resolve(obj);
            })
            .catch((error: any) => {
                reject(error);
            });
    });
    }

    addDocument(collectionName: string, dataObj: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.db.collection(collectionName).add(dataObj)
                .then((obj: any) => {
                    resolve(obj);
                })
                .catch((error: any) => {
                    reject(error);
                });
        });
        }
        
        updateDocument(collectionName: string, docID: string, dataObj: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.db
                .collection(collectionName)
                .doc(docID)
                .update(dataObj)
                .then((obj: any) => {
                    resolve(obj);
                })
                .catch((error: any) => {
                    reject(error);
                });
        });
        }
}
