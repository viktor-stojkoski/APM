import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;

    constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

    ngOnInit() {
        // the plus is javascript shortcut to convert the parametar to number
        let par = this.route.snapshot.paramMap.get('id');
        if (par) {
            let id = +par;
            this.getProduct(id);
        }
    }

    getProduct(id: number) {
        this.productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error
        )
    }

    onBack(): void {
        this.router.navigate(['/products']);
    }

}