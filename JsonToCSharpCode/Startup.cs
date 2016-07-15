using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(JsonToCSharpCode.Startup))]
namespace JsonToCSharpCode
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
