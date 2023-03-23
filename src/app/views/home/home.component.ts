import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      console.log('passou')
      console.log(params);
    }
  );
  }

  public async sharedAction(): Promise<void> {
    try {
      await navigator.share({
        title: 'titulo de teste',
        url: 'https://www.thisdot.co/blog/share-in-a-pwa-like-a-native-app-using-the-web-share-api',
        text: 'texto de teste para ver como funciona'
      });
      alert(`Thanks for Sharing!`);
    } catch (err) {
      alert(`Couldn't share ${err}`);
    }
  }
}
