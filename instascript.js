// for scrrolling

//** Find the account who didn't Follow you back section */

//  GET the Followers data
followersbtn = document.querySelectorAll("a.-nal3 ")[0];
followersbtn.click();

await new Promise((r) => setTimeout(r, 3000));

FS1 = document.querySelector(".isgrP");
/*
count = iteration;
while (count != 0) {
  FS1.scrollTop += FS1.scrollHeight;
  await new Promise((r) => setTimeout(r, 1000));
  count--;
  console.log(count);
}*/

do  {count=4
  FS1.scrollTop += FS1.scrollHeight;
 //  we capturing  the same element(the refresh icon) 4 times in time series  of 60 millesecond  
 //this because the system is fast  , MAYBE there is better way
 while(count){  arr.push(document.querySelector(".By4nA")) 
                 await new Promise((r)=>setTimeout(r,60));count--}
//then testing  all those 4 elemnt if they are all null  we stop 
  bool=arr.every((v)=>!!v==false)
}while(!bool);

await new Promise((r) => setTimeout(r, 1500));

followers = Array.from(
  document.querySelectorAll("a.FPmhX.notranslate._0imsa ")
);

followersName = Array.from(
  document.querySelectorAll("a.FPmhX.notranslate._0imsa ")
).map((v) => v.innerText);

await new Promise((r) => setTimeout(r, 500));

// quit button sections
quitbtn = document.querySelector(".WaOAr button.wpO6b  ");
//quit
quitbtn.click();

//***END  of the  followers section */

await new Promise((r) => setTimeout(r, 1500));

//***Getting the  Following data   */
followingsbtn = document.querySelectorAll("a.-nal3 ")[1];
followingsbtn.click();

await new Promise((r) => setTimeout(r, 1500));

FS2 = document.querySelector(".isgrP");

// the scrolling  for the followings
do  {count=4
  FS2.scrollTop += FS2.scrollHeight;
 //  we capturing  the same element(the refresh icon) 4 times in time series  of 60 millesecond  
 //this because the system is fast  , MAYBE there is better way
 while(count){  arr.push(document.querySelector(".By4nA")) 
                 await new Promise((r)=>setTimeout(r,60));count--}
//then testing  all those 4 elemnt if they are all null  we stop 
  bool=arr.every((v)=>!!v==false)
}while(!bool);

followings = Array.from(
  document.querySelectorAll("a.FPmhX.notranslate._0imsa ")
);
followingsName = Array.from(
  document.querySelectorAll("a.FPmhX.notranslate._0imsa ")
).map((v) => v.innerText);

await new Promise((r) => setTimeout(r, 1000));

//**END of retrieving the following data */

// Display the account who didn't follow you
h1 = document.querySelector(".m82CD");
for (following of followings) {
  followingName = following.innerText;
  if (followersName.indexOf(followingName) >= 0) {
    following.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
  }
}
h1.innerText = "Account who didn't follow you back !";

// THE END of Display the account who didn't follow you

await new Promise((r) => setTimeout(r, 1500));

//** THE END OF The section above */

//*****Unfollow action  */
//** THIS PART STILL WORKING ON IT  */
/*
if (confirm("do you want to remove them? ")) {
  await new Promise((r) => setTimeout(r, 1500));

  //remove follow
  count = 15;
  for (following of followings) {
    followingName = following.innerText;

    if (followersName.indexOf(followingName) < 0 && count != 0) {
      highParent=following.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[0];
      highParent.click()
      await new Promise((r) => setTimeout(r, 1500));

      unfollow = document.querySelector(".aOOlW.-Cab_   ");
      unfollow.click();
      await new Promise((r) => setTimeout(r, 1500));

      count--;
    }
  }
  location.reload();
}
*/
