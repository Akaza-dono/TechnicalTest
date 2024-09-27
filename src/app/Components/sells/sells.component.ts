import { Component, OnInit } from '@angular/core';
import { SellsService } from '../../Services/sells.service';
import { SellsInterface } from '../../Interfaces/sells.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sells',
  standalone: true,
  imports: [],
  templateUrl: './sells.component.html',
  styleUrl: './sells.component.sass'
})
export class SellsComponent implements OnInit {
  sellsList: SellsInterface[]=[];
  constructor(private sellsServices: SellsService,private router: Router ) {}

  ngOnInit(): void {
    this.getSells()
  }

  getSells(){
    this.sellsServices.getSells().subscribe({
      next: (result =>{
        this.sellsList = result.value
      }),
      error: e => {
        console.log(e)
      }
    })
  }

  updateSell(sell: SellsInterface) {
    this.router.navigate(['/uptsell', sell.sellId]);
  }

  deleteSell(sellId: number) {
    this.sellsServices.deleteSell(sellId).subscribe({
      next: (response) => {
        this.sellsList = this.sellsList.filter(sell => sell.sellId !== sellId);
      },
      error: (error) => {
        console.error('Error deleting sell:', error);
      }
    });
  }
}
