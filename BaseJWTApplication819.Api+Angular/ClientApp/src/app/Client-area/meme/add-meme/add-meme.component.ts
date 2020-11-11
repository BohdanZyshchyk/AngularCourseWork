import { Component, Input, OnInit } from '@angular/core';
import { MemeService } from 'src/app/Services/meme.service';

@Component({
  selector: 'app-add-meme',
  templateUrl: './add-meme.component.html',
  styleUrls: ['./add-meme.component.css']
})
export class AddMemeComponent implements OnInit {

  constructor(private memeService: MemeService) {
   
  }
  @Input() isVisible = false;
  isOkLoading = false;
  title:string;

  ngOnInit() {
  }
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
      this.memeService.onAdd.emit(true);
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
    this.memeService.onAdd.emit(true);
  }
  
}
