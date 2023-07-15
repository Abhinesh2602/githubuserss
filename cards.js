fetch("https://api.github.com/users")
.then((res)=>res.json())
.then((data)=>{
  data.forEach((userData) => {

    const card = createUserCard(userData);
    document.getElementById("userContainer").appendChild(card);
});
});

   

   function createUserCard(userData){

    //creating the card container element
    const mainCard = document.createElement('div');
    mainCard.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mb-4",'card','user-card');

    //creating the cardbody
    const cardbody = document.createElement("div");
    cardbody.classList.add("card-body")

   //creating the user detail element
   
        const avatar = document.createElement('img');
        avatar.src = userData.avatar_url;
        avatar.alt = userData.login;
        avatar.classList.add("card-img-top");

    //creating the username 
    const username = document.createElement("h5")
    username.textContent = userData.login;
    username.classList.add('card-title');

    //github button
    const profileLink = document.createElement("a");
    profileLink.textContent = "View Profile"
    profileLink.href = userData.html_url;
    profileLink.classList.add("btn","btn-primary");


    //appending the userdetails cards
    cardbody.appendChild(avatar);
    cardbody.appendChild(username);
    cardbody.appendChild(profileLink);

    //appending the cardbody to the maincard container

    mainCard.append(cardbody);
    return mainCard;
   }

