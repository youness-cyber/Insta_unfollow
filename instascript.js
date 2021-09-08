
//** function part */
function creatingDiv(){body=document.body
  div=document.createElement("div")
  div.style="position: fixed; width: 100%; height: 100%; top: 0; left: 0; order: 100000000; z-index: 1000000000000;"
  body.append(div)
}
const  scrolling = async (FS1)=>{ 
  await sleep(2000);
  arr=[]
  note=10
    do  {count=4;
      FS1.scrollTop += FS1.scrollHeight;
     //  we capturing  the same element(the refresh icon) 4 times in time series  of 60 millesecond
     //this because the system is fast  , MAYBE there is better way
     while(count){  arr.push(document.querySelector(".By4nA")) 
                     await sleep(60);count--}
    //then testing  all those 4 elemnt if they are all null  we stop
      bool=arr.every((v)=>!!v==false)
       arr=[];
     if(!note){console.log("fetching....");note=10}
       note--;
    }while(!bool ||FS1.scrollTop+400<FS1.scrollHeight);
  await sleep(1000);

}

function sleep(delay){
return  new Promise((r) => setTimeout(r, delay));
}
const  getAccounts= () => {return [Array.from(document.querySelectorAll("a.FPmhX.notranslate._0imsa ")),
                                  Array.from(document.querySelectorAll("a.FPmhX.notranslate._0imsa ")).map((v) => v.innerText)]}
const  btnsClick = async (btn)=>{
       if(btn<2){
      followersbtn = document.querySelectorAll("a.-nal3 ")[btn];
      followersbtn.click();}
      else if (btn==2){
      quitbtn = document.querySelector(".WaOAr button.wpO6b  ");
      //quit
      quitbtn.click();
     }
   await sleep(1000);
}
function removefollowers(followings,followersName){
 h1 = document.querySelector(".m82CD");
for (following of followings) {
  followingName = following.innerText;
  if (followersName.indexOf(followingName) >= 0) {
    following.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
  }
}
h1.innerText = "Account who didn't follow you back !";
}
//START HERE 
//** Find the account who didn't Follow you back section */

// for scrrolling
div=null

//  GET the Followers data
await btnsClick(0)
//await sleep(500);
FS1 = document.querySelector(".isgrP");
FS1.parentElement.style.opacity=1
creatingDiv()
console.log("starting")
await scrolling(FS1);
console.log("getting the folowers......");
[followers , followersName] = getAccounts();
console.log("done..");
// quit button sections
await btnsClick(2)


//***END  of the  followers section */
//await sleep(500);
console.log("getting the followings......")

//***Getting the  Following data   */
await btnsClick(1)

//await sleep(1500);

FS2 = document.querySelector(".isgrP");

// the scrolling  for the followings
await scrolling(FS2);
[followings , followingsName] = getAccounts();
console.log("done");
console.log("filttring")
//**END of retrieving the following data */

// Display the account who didn't follow you
removefollowers(followings,followersName)
 div.remove()
console.log("done")


// THE END of Display the account who didn't follow you
//await sleep(1000);

//** THE END OF The section above */

//*****Unfollow action  */
//** THIS PART STILL WORKING ON IT  */

if (confirm("do you want to remove them? ")) {
  await new Promise((r) => setTimeout(r, 1500));

  //remove follow
  count = 15;
  for (following of followings) {
    followingName = following.innerText;

    if (followersName.indexOf(followingName) < 0 && count != 0) {
      followingBtn=following.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[0];
      followingBtn.click()
      await new Promise((r) => setTimeout(r, 1500));

      unfollow = document.querySelector(".aOOlW.-Cab_   ");
      unfollow.click();
      await new Promise((r) => setTimeout(r, 1500));

      count--;
    }
  }
 
}

