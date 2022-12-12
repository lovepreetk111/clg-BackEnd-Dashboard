import { Component, OnInit } from '@angular/core';
interface Product {
  id:any;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  products: Product[];
  submitted: any;
  productDialog: any;
  product: any;
  dialog: any;
  personsService: any;
  

  constructor() {
    this.products = [
     
    ]
  }

  ngOnInit(): void {
  }
  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }
  // deleteSelectedProducts() {
  //       this.confirmationService.confirm({
  //           message: 'Are you sure you want to delete the selected products?',
  //           header: 'Confirm',
  //           icon: 'pi pi-exclamation-triangle',
  //           accept: () => {
  //               this.products = this.products.filter(val => !this.selectedProducts.includes(val));
  //               this.selectedProducts = null;
  //               this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
  //           }
  //       });
  //   }
  

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    console.log(this.product);
    this.products.push({
     id:this.product.id
    });
    console.log(this.products)
  }

}
