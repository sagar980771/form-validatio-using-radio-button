function onSubmit() {
  let rolemodal = document.getElementsByName('radio');
  console.log(rolemodal);
   for (let i = 0; i < rolemodal.length; i++) {
    if (rolemodal[i].checked) {
      switch (rolemodal[i].value) {
        case 'role1':
          alert('You selected ' + rolemodal[i].value)
          break;
        case 'role2':
          alert('You selected ' + rolemodal[i].value)
          break;
        case 'role3':
          alert('You selected ' + rolemodal[i].value)
          break;
        case 'role4':
          alert('You selected ' + rolemodal[i].value)
          break;
        case 'role5':
          alert('You selected ' + rolemodal[i].value)
          break;
        default:
          alert('nothing selected')
          break;
       }
     }
//      else{
// alert('this is not a valid button');
//      }
     
  }
}
// var x = 3;
// switch (x){
//   case 1:
//     alert(x);
//     break;
//     case 2:
//       alert(x);
//       break;
//       default:
//         alert("this is a alt");
//   }