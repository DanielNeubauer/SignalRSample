using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Cors;
using Microsoft.AspNet.SignalR;

[assembly: OwinStartup(typeof(SignalRSampleServer.Startup))]

namespace SignalRSampleServer
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // Weitere Informationen zum Konfigurieren Ihrer Anwendung finden Sie unter https://go.microsoft.com/fwlink/?LinkID=316888.
            app.Map("/signalr", map =>
            {
                map.UseCors(CorsOptions.AllowAll);
                var hubConnection = new HubConfiguration { };
                map.RunSignalR(hubConnection);
            });
        }
    }
}
