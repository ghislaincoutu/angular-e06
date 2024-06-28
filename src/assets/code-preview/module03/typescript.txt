import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Module03Service {

  constructor() { }

  goods = [
    { name: 'Canon', title: 'Canon EOS 5D Mark III Body' },
    { name: 'Nikon', title: 'Nikon D3100' },
    { name: 'Sony', title: 'Sony CX700' },
    { name: 'Fujifilm', title: 'Fujifilm XT20' },
    { name: 'Sony', title: 'Sony CX500' },
    { name: 'Nikon', title: 'Nikon D750' },
  ];

  brandName = ['Canon', 'Nikon', 'Sony', 'Fujifilm'];

}
