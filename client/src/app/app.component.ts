import { Component, OnInit } from '@angular/core';
import { ConnectionResolver } from './service/signalR.service';
import { BroadcastEventListener, SignalRConfiguration, SignalRConnection } from 'ng2-signalr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public chat: string[] = [];
  public connection: SignalRConnection;
  constructor(private _service: ConnectionResolver) {
  }
  ngOnInit() {
    this.init()
  }
  private async init() {
    let onMessageSent$ = new BroadcastEventListener<any>('broadcastMessage');
    this._service.resolve().then((con: any) => {
      this.connection = con;
      con.listen(onMessageSent$);
      onMessageSent$.subscribe((user: any) => {
        this.chat.push(user);
      });
    });
  }
  public send() {
    this.connection.invoke('send', 'Hannes', 'Neu')
      .catch((err: any) => console.log('Failed to invoke . Error occured. Error:' + err));
  }
}
