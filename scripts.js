document.addEventListener("DOMContentLoaded", function(){
    main();
})

function main()
{
    var btn = document.getElementsByTagName("button")[0];
    var email = document.getElementById("email");
    var mes = document.getElementsByClassName("message")[0];
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        if (email.value === "" || email.value === null)
        {
            mes.innerHTML = "Please enter a valid email address.";
        }
        else
        {
            mes.innerHTML = "Thank you! Your email address, " + email.value + ", has been added to our mailing list.";
        }
 });
}