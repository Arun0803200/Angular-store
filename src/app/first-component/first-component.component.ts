import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { StudentsService } from '../students.service';
import { NgToastService } from 'ng-angular-popup';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  constructor(private formBuilder: FormBuilder, private userService:StudentsService, private router: Router, private ngToastService: NgToastService) {
};
images: string[] = ["../../assets/slide-1.jpeg"]; // Update with your image URLs
imgArr = [1,2,3]
currentImageIndex: number = 0;

ngOnInit() {
  this.startImageRotation();
}

startImageRotation() {
  setInterval(() => {
    this.changeToNextImage();
  }, 5000);
}

changeToNextImage() {
  this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
}

changeImage(index: number) {
  this.currentImageIndex = index;
}

spar = [{
  image: '../../assets/brand-1.png',
  brandName: 'AIMPARTS'
},
{
  image: '../../assets/brand-2.png',
  brandName: 'WINGINGINE'
},
{
  image: '../../assets/brand-3.png',
  brandName: 'TURBOELECTRONIC'
},
{
  image: '../../assets/brand-4.png',
  brandName: 'STARTONE'
},
{
  image: '../../assets/brand-5.png',
  brandName: 'BRANDIX'
},
{
  image: '../../assets/brand-6.png',
  brandName: 'ABS-BRAND'
},
{
  image: '../../assets/brand-7.png',
  brandName: 'GREATCIRCLE'
},
{
  image: '../../assets/brand-8.png',
  brandName: 'JUSTROMB'
},
{
  image: '../../assets/brand-9.png',
  brandName: 'FASTWHEELS'
},
{
  image: '../../assets/brand-10.png',
  brandName: 'STROYKS-X'
},
{
  image: '../../assets/brand-11.png',
  brandName: 'MISSION-51'
},
{
  image: '../../assets/brand-12.png',
  brandName: 'FUELCORP'
},
{
  image: '../../assets/brand-13.png',
  brandName: 'REDGATE'
},
{
  image: '../../assets/brand-14.png',
  brandName: 'BLOCKS'
},
{
  image: '../../assets/brand-15.png',
  brandName: 'BLACKBOX'
},
{
  image: '../../assets/brand-16.png',
  brandName: 'SQUAERGARRAGE'
}];

featureProduct = [
  {
    image: '../../assets/product-1.jpeg',
    productName: `Glossy Gray 19' Aluminium Whell AR-19`,
    sku: 'A43-44328-B',
    ratting: [1,1,1,1,0],
    reviewCounts: 26,
    price: '598.00',
    isHot: 1
  },
  {
    image: '../../assets/product-2.jpeg',
    productName: 'Twin Exhaust Pipe From Brandix Z54',
    sku: '729-51203-B',
    ratting: [1,1,1,1,0],
    reviewCounts: 9,
    price: '749.00',
    isHot: 0
  },
  {
    image: '../../assets/product-3.jpeg',
    productName: 'Motor Oil Level 5',
    sku: '573-49386-C',
    ratting: [1,1,1,1,1],
    reviewCounts: 2,
    price: '23.00',
    isHot: 0
  },
  {
    image: '../../assets/product-4.jpeg',
    productName: 'Brandix Engine Block Z4',
    sku: '753-38573-B',
    ratting: [0,0,0,0,0],
    reviewCounts: 0,
    price: '452.00',
    isHot: 0
  },
  {
    image: '../../assets/product-5.jpeg',
    productName: 'Brandix Cluth Discs Z175',
    sku: '472-67382-Z',
    ratting: [1,1,1,0,0],
    reviewCounts: 7,
    price: '345.00',
    isHot: 0
  }
]

topRatedProduct = [
  {
    image: '../../assets/product-6.jpeg',
    productName: 'Fantastic 12-Stroke Engine With A Power of 1991 hp',
    ratting: [1,1,1,0,0],
    reviewCounts: 17,
    price: '2579.00',
    stickOutPrice: ''
  },
  {
    image: '../../assets/product-7.jpeg',
    productName: 'Set of Four 19 Inch Spiked Tires',
    ratting: [1,1,1,1,0],
    reviewCounts: 9,
    price: '327.00',
    stickOutPrice: ''
  },
  {
    image: '../../assets/product-8.jpeg',
    productName: '40 Megawatt Low Beam Lamp',
    ratting: [1,1,1,1,0],
    reviewCounts: 31,
    price: '4.00',
    stickOutPrice: '8.00' 
  }
]

specialOffers = [
  {
    image: '../../assets/product-9.jpeg',
    productName: 'Brandix Manual Five Speed Gearbox',
    ratting: [1,1,1,1,0],
    reviewCounts: 6,
    price: '879.00',
    stickOutPrice: ''
  },
  {
    image: '../../assets/product-10.jpeg',
    productName: 'Set of Car Floor Mats Brandix Z4',
    ratting: [1,1,1,1,0],
    reviewCounts: 16,
    price: '78.00',
    stickOutPrice: '94.00'
  },
  {
    image: '../../assets/product-11.jpeg',
    productName: 'Taillights Brandix Z54',
    ratting: [1,1,0,0,0],
    reviewCounts: 31,
    price: '60.00',
    stickOutPrice: '' 
  }
]

Bestsellers = [
  {
    image: '../../assets/product-4.jpeg',
    productName: 'Brandix Engine Block Z4',
    ratting: [0,0,0,0,0],
    reviewCounts: 0,
    price: '452.00',
    stickOutPrice: '573.00'  },
  {
    image: '../../assets/product-5.jpeg',
    productName: 'Brandix Cluth Discs Z175',
    ratting: [1,1,1,0,0],
    reviewCounts: 7,
    price: '345.00',
    stickOutPrice: ''
  },
  {
    image: '../../assets/product-9.jpeg',
    productName: 'Brandix Manual Five Speed Gearbox',
    ratting: [1,1,1,1,0],
    reviewCounts: 6,
    price: '879.00',
    stickOutPrice: ''
  }
]
logo = [
  {
    image: '../../assets/svg/free-delivery.svg',
    name: 'Free Shipping',
    descriptions: 'For orders from $50'
  },
  {
    image: '../../assets/svg/24-hours.svg',
    name: 'Support 24/7',
    descriptions: 'Call us anytime'
  },
  {
    image: '../../assets/svg/payment-security.svg',
    name: '100% Safety',
    descriptions: 'Only secure payments'
  },
  {
    image: '../../assets/svg/tag.svg',
    name: 'Hot Offers',
    descriptions: 'Discounts up to 90%'
  },
]
}
