// const gnb_lis = document.querySelectorAll("#gnb > li");
// gnb_lis.forEach((el) =>{
//     el.addEventListener("mouseenter", (e) => {
//         const subs = document.querySelectorAll("#gnb .sub");
        
//         subs.forEach((sub) => {
//             sub.style.height = "0";
//             sub.style.display = "none";
//         });

//         const sub = el.querySelector(".sub");
//         let isBlock = window.getComputedStyle(sub).getPropertyValue("display");
//         sub.style.height = "0";

//         if (isBlock === "none") {
//             sub.style.display = "block";
//             let subHeight = sub.scrollHeight;
//             sub.style.height = subHeight + "px";
//             e.stopPropagation();
//         }
//     });

//     el.addEventListener("mouseleave", (e) => {
//         const sub = el.querySelector(".sub");
//         let isBlock = window.getComputedStyle(sub).getPropertyValue("display");
//         sub.style.height = "0";
//         e.stopPropagation();

//         if (isBlock === "block") {
//             sub.style.display = "0";
//             sub.addEventListener("transitionend", function end(e) {
//                 sub.removeEventListener("transitionend", end);  
                
//                 sub.style.display = "none";
//                 e.stopPropagation();
//             });
//         }
//     });
// });