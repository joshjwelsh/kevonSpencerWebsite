// var count = 0;
// function addFixedNavbar(){
//     let node1 = document.getElementById("my_navbar-div");
//     let node2 = document.getElementById("my_navbar");
//     if(node1 && node2){
//         if(count == 0){
//             node1.className += " ";
//             node2.className += " fixed-top";
//             count++;
//         }
//     }
// }

function changeOpacity(){
  let uh = $(this).scrollTop();
  let screen = uh/ 500; 
  if(screen == 0){
         document.getElementById("my_navbar-div").style.opacity = 0.001;
      document.getElementById("my_navbar").style.opacity = 0.001;
  }
  if(screen < 2){
     document.getElementById("my_navbar-div").style.opacity *= screen;
      document.getElementById("my_navbar").style.opacity *= screen;
  }
  if(screen >= 2){
     document.getElementById("my_navbar-div").style.opacity = 1;
      document.getElementById("my_navbar").style.opacity = 1;
  }

 
}