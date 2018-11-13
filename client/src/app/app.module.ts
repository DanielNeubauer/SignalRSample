import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SignalRModule } from 'ng2-signalr';
import { SignalRConfiguration } from 'ng2-signalr';
import { ConnectionResolver } from './service/signalR.service';

export function createConfig(): SignalRConfiguration {
  const c = new SignalRConfiguration();
  c.hubName = 'ChatHub';
  c.qs = { user: 'donald' };
  c.url = 'http://localhost:56403';
  c.logging = true;
  
  // >= v5.0.0
  c.executeEventsInZone = true; // optional, default is true
  c.executeErrorsInZone = false; // optional, default is false
  c.executeStatusChangeInZone = true; // optional, default is true
  return c;
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SignalRModule.forRoot(createConfig)
  ],
  providers: [
    ConnectionResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
