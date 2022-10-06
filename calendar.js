const data = [
  {
    name: "Alex",
    color: "#1e90ff",
    data:{"133":true,"134":true,"135":true,"136":true,"137":true,"140":true,"141":true,"142":true,"143":true,"144":true,"147":true,"148":true,"149":true,"150":true,"151":true,"154":true,"155":true,"156":true,"157":true,"158":true,"161":true,"162":true,"163":true,"164":true,"165":true,"168":true,"169":true,"170":true,"171":true,"172":true,"203":true,"204":true,"205":true,"206":true,"207":true,"210":true,"211":true,"212":true,"213":true,"214":true,"217":true,"218":true,"219":true,"220":true,"221":true,"224":true,"225":true,"226":true,"227":true,"228":true,"231":true,"232":true,"233":true,"234":true,"235":true,"238":true,"239":true,"240":true,"241":true,"242":true}
  },
  {
    name: "Carla",
    color: "gray",
    data:{"1":true,"2":true,"4":true,"5":true}
  },
  {
    name: "Carlos",
    color: "#0C1832",
    data:{"133":true,"134":true,"135":true,"136":true,"137":true,"140":true,"141":true,"142":true,"143":true,"144":true,"238":true,"240":true,"241":true,"242":true,"245":true,"246":true,"247":true,"248":true,"249":true,"252":true,"253":true,"254":true,"255":true,"256":true,"259":true,"260":true,"261":true,"262":true,"263":true,"266":true,"267":true,"268":true,"269":true,"270":true,"273":true,"275":true,"276":true,"277":true,"280":true,"287":true}
  },
  {
    name: "Luiza",
    color: "#d9baf5",
    data:{"117":true,"124":true,"131":true,"138":true,"145":true,"152":true,"253":true,"255":true,"256":true,"259":true,"260":true,"261":true,"262":true,"263":true,"267":true,"269":true,"270":true,"274":true,"276":true,"277":true,"280":true,"282":true,"283":true,"284":true,"287":true,"289":true,"290":true,"291":true,"294":true,"296":true,"297":true,"298":true,"301":true,"303":true,"304":true,"305":true,"308":true,"310":true,"311":true,"312":true}
  },
  {
    name: "Rafa",
    color: "#800080",
    data:{"112":true,"113":true,"116":true,"119":true,"120":true,"123":true,"126":true,"127":true,"130":true,"133":true,"134":true,"137":true,"140":true,"141":true,"144":true,"147":true,"148":true,"151":true,"154":true,"155":true,"158":true,"161":true,"162":true,"168":true,"169":true,"196":true,"203":true,"210":true,"217":true,"218":true,"222":true,"224":true,"225":true,"229":true,"231":true,"232":true,"236":true,"243":true,"248":true,"250":true,"255":true,"257":true,"262":true,"264":true,"269":true,"271":true,"278":true}
  },
]

const ds = document.querySelectorAll(".d")
ds.forEach((d, i) => {
  if(data[i%5].data[`${Math.floor(i/5)}`])
    d.style.backgroundColor= data[i%5].color
})