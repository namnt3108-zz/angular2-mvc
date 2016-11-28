using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(angular_quickstart.Startup))]
namespace angular_quickstart
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
