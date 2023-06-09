var menuButton = document.getElementById("menuButton")
            var sideNav = document.getElementById("sideNav")
            var menu = document.getElementById("menu")

            sideNav.style.right = "-250px";

            menuButton.onclick = function(){
                if(sideNav.style.right == "-250px"){
                    sideNav.style.right = "0";
                }
                else{
                    sideNav.style.right = "-250px";
                }
            }

            var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});