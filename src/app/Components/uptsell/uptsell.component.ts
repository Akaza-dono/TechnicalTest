import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SellsService } from '../../Services/sells.service';
import { SellsInterface } from '../../Interfaces/sells.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-uptsell',
  templateUrl: './uptsell.component.html',
  styleUrls: ['./uptsell.component.sass'],
  imports:[CommonModule]
})
export class UptsellComponent implements OnInit {
  sellId: number;
  sellData: SellsInterface; 
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private sellsService: SellsService) {
    this.sellData = {} as SellsInterface; 
    this.sellId = 0 ;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.sellId = id !== null ? +id : 0;

    this.sellsService.getSellById(this.sellId).subscribe({
      next: (data: SellsInterface) => {
        this.sellData = data; 
        this.loading = false; 
      },
      error: (err) => {
        console.error('Error fetching sell data:', err);
        this.loading = false; 
      }
    });
  }
}
