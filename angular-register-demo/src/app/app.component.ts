import { Component } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  constructor(private routerService: Router,
    private translate: TranslateService) {
      translate.setDefaultLang('en');
    routerService.events.subscribe((event) => {
      if (event instanceof RoutesRecognized) {
        this.title = event.state.root.children[0].data.title ||
          event.state.root.children[0].children[0].data.title;
      }
  });
}
}
