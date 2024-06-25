import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'poopDogProgressbar',
  templateUrl: './poop-dog-progress-bar.component.html',
  styleUrls: ['./poop-dog-progress-bar.component.css']
})
export class PoopDogProgressBarComponent implements OnInit {

  @Input() maxImage = 8;
  @Input() marginLeftSize = 30;
  @Input() dogPath= '../../poop-dog/src/assets/images/dog.png';
  @Input() poopPath = '../../poop-dog/src/assets/images/poop.png';

  /**
   * Example of use
   * [containerStyle]="{ 'background-color': 'green' }"
   */
  @Input() containerStyle : any = {};
  @Input() loadPoop = 2000; // ms
  @Input() restartInterval = 1000; //ms

  imageDog: { src: string, alt: string, position: number, type: string } | null = null;
  images: { src: string, alt: string, position: number, type: string }[] = [];
  imageCount = 0;
  intervalId: any;
  containerWidth: number = 500;//px
  widthPoopSize = 20;

  ngOnInit(): void 
  {
    this.containerWidth = (this.widthPoopSize+(this.marginLeftSize/2))*this.maxImage;
    this.containerStyle['width'] = `${this.containerWidth}px`;
    //this.containerStyle['background-color'] = 'red'; // Example dynamic style

    this.intervalId = setInterval(() => this.createImage(), this.loadPoop);
  }

  createImage(): void {
    if (this.imageCount === 0 && this.imageDog==null) 
    {
      this.imageDog ={ src: this.dogPath, alt: 'Dog', position: 0, type: 'dog' };
    } 
    this.images.push({ src: this.poopPath, alt: 'Poop', position: this.imageCount, type: 'poop' });
    

    this.imageCount++;

    if (this.imageCount === this.maxImage) 
    {
      setTimeout(() => {
        this.images = [];
        this.imageCount = 0;
      }, this.restartInterval);
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
