import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Socket.IO Lock-Item App';

  items = [
    {
      id: 1,
      name: "Pharrell Williams",
      locked: false
    },
    {
      id: 2,
      name: "David Bowie",
      locked: false
    },
    {
      id: 3,
      name: "John Lennon",
      locked: false
    }
  ];
}
