import"./assets/style-B_B_s1WK.js";import{f as p,i as u}from"./assets/vendor-BbbuE1sJ.js";const n=document.querySelector(".button[data-start]"),d=document.querySelector("[data-days]"),i=document.querySelector("[data-hours]"),l=document.querySelector("[data-minutes]"),m=document.querySelector("[data-seconds]"),s=document.querySelector(".input#datetime-picker");let c,f=null;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];e<=new Date?(u.error({title:"Error",message:"Please choose a date in the future"}),n.disabled=!0):(f=e,n.disabled=!1)}};p(s,b);n.addEventListener("click",x);function x(){n.disabled=!0,s.disabled=!0,c=setInterval(()=>{const t=f-new Date;if(t<=0){clearInterval(c),u.success({title:"Success",message:"Countdown finished!"}),w();return}q(D(t))},1e3)}function D(t){const h=Math.floor(t/864e5),y=Math.floor(t%864e5/36e5),C=Math.floor(t%864e5%36e5/6e4),S=Math.floor(t%864e5%36e5%6e4/1e3);return{days:h,hours:y,minutes:C,seconds:S}}function q({days:t,hours:e,minutes:r,seconds:a}){d.textContent=o(t),i.textContent=o(e),l.textContent=o(r),m.textContent=o(a)}function o(t){return String(t).padStart(2,"0")}function w(){s.disabled=!1,n.disabled=!0,d.textContent="00",i.textContent="00",l.textContent="00",m.textContent="00"}
//# sourceMappingURL=1-timer.js.map
