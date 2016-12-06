using System.Web;
using System.Web.Optimization;

namespace angular_quickstart
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/js/jquery").Include(
                        "~/assets/libs/jquery/dist/jquery.js"));

            bundles.Add(new ScriptBundle("~/bundles/js/bootstrap").Include(
                      "~/assets/libs/bootstrap/dist/js/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/js/polyfill").Include(
                      "~/assets/libs/core-js/client/shim.min.js",
                      "~/assets/libs/zone.js/dist/zone.js",
                      "~/assets/libs/reflect-metadata/Reflect.js",
                      "~/assets/libs/systemjs/dist/system.src.js"));

            bundles.Add(new StyleBundle("~/bundles/css/site").Include(
                      "~/assets/libs/bootstrap/dist/css/bootstrap.css",
                      "~/assets/css/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/js/full-calendar").Include(
                      "~/assets/libs/moment/moment.js",
                      "~/assets/libs/fullcalendar/dist/fullcalendar.js"));

            bundles.Add(new StyleBundle("~/bundles/css/full-calendar").Include(
                      "~/assets/libs/fullcalendar/dist/fullcalendar.css"));

            bundles.Add(new StyleBundle("~/bundles/css/primeng").Include(
                        "~/assets/libs/primeng/resources/primeng.min.css").Include(
                        "~/assets/libs/primeng/resources/themes/bootstrap/theme.css", new CssRewriteUrlTransform()));
        }
    }
}
