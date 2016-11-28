using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using angular_quickstart.Models;

namespace angular_quickstart.Controllers
{
    public class DoctorController : Controller
    {
        private static readonly IList<DoctorModel> Doctors;

        static DoctorController()
        {
            Doctors = new List<DoctorModel>
            {
                new DoctorModel
                {
                    Id = 1,
                    Name = "Mr. Nice"
                },
                new DoctorModel
                {
                    Id = 2,
                    Name = "Narco"
                },
                new DoctorModel
                {
                    Id = 3,
                    Name = "Bombasto"
                }
            };
        }

        [Route("doctor/doctors")]
        public ActionResult GetHeros()
        {
            return Json(Doctors, JsonRequestBehavior.AllowGet);
        }

        [Route("doctor/new")]
        [HttpPost]
        public ActionResult AddDoctor(DoctorModel doctor)
        {
            var id = GetLatestId(Doctors);
            Doctors.Add(new DoctorModel
            {
                Id = id,
                Name = doctor.Name
            });
            return Json(Doctors, JsonRequestBehavior.AllowGet);
        }

        [Route("doctor/edit")]
        [HttpPost]
        public ActionResult EditDoctor(DoctorModel doctor)
        {
            var curHero = Doctors.First(w => w.Id == doctor.Id);
            curHero.Name = doctor.Name;
            return Json(Doctors, JsonRequestBehavior.AllowGet);
        }

        private int GetLatestId(IList<DoctorModel> list)
        {
            return !list.Any() ? 1 : list.OrderByDescending(o => o.Id).FirstOrDefault().Id + 1;
        }
    }
}