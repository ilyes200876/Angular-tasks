import { Component, OnInit} from '@angular/core';
import { BitcoinService } from '../services/bitcoin.service';
import { IBitcoin } from '../IBitcoin';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit{

  bitcoins: IBitcoin[] = [];

  constructor(private bitcoinService: BitcoinService){}

  ngOnInit(){
    this.getBitcoins();
  }

  getBitcoins(){
    this.bitcoinService.fetchAllBitcoins().subscribe((data: any) => {
      this.bitcoins = data.data;
    })
  }

}
