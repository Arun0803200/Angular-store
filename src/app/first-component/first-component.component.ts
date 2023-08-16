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

banner: any;
brand: any;
topRatedProduct: any;
featureProduct: any;
specialOffers: any;
Bestsellers: any;

ngOnInit() {
  this.startImageRotation();
  this.getBanner();
  this.getBrand();
  this.getTopRatedProduct();
  this.getFeatureProduct();
  this.getSpecialOffers();
  this.getBestProduct();
}

getBestProduct() {
  this.userService.getBestProduct().subscribe(data => {
    const value: any = data;
    this.Bestsellers = value.data.map((value: any) => {
      const temp: any = value;
      temp.image = `../../assets/${temp.image}`;
      return temp;
    });
  });
}

getSpecialOffers() {
  this.userService.getSpecialOffers().subscribe(data => {
    const value: any = data;
    this.specialOffers = value.data.map((value: any) => {
      const temp: any = value;
      temp.image = `../../assets/${temp.image}`;
      return temp;
    });
  });
}

getTopRatedProduct() {
  this.userService.getTopRatedProduct().subscribe(data => {
    const value: any = data;
    this.topRatedProduct = value.data.map((value: any) => {
      const temp: any = value;
      temp.image = `../../assets/${temp.image}`;
      return temp;
    });
  });
}

getFeatureProduct() {
  this.userService.getFeatureProduct().subscribe(data => {
    const value: any = data;
    this.featureProduct = value.data.map((value: any) => {
      const temp: any = value;
      temp.image = `../../assets/${value.image}`;
      return temp;
    });
  });
}

getBanner() {
  this.userService.getBanner().subscribe(data => {
    const value: any = data;
    this.banner = value.data.map((value: any) => {
      const temp: any = value;
      temp.image = `../../assets/${temp.image}`;
      return temp;
    });
  });
}

getBrand() {
  this.userService.getBrand().subscribe(data => {
    const value: any = data;
    this.brand = value.data.map((value: any) => {
      const temp: any = {};
      temp.image = `../../assets/${value.image}`;
      temp.brandName = value.name
      return temp;
    });;
    console.log(this.banner, 'banner')
  });
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
