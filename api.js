// CONSTRUCTOR FOR SUBCRIPTION FORM and JOKE
class Form {
    constructor () {}
    render () {
        return `
        <div class="form__container">
            <h1 class="form__title">SUBSCRIBE NOW TO WIN A FREE JOKE</h1>
            <br>
            <p>Sign up for exclusive email offers, loyalty programs and perks! 
            We'll let you know when we are roling out new limited time menu items, contests and giveaways</p>
            <br>
            <div class="form">
                <div class="form__holder">
                    <form id="form">
                        <label class="" for="firstName">FIRST NAME</label><br>
                        <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" value=""><br>
                        <br>
                        <label class="" for="lastName">LAST NAME</label><br>
                        <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" value=""><br>
                        <br>
                        <label class="" for="emailId">E-MAIL ADDRESS</label><br>
                        <input type="text" id="emailId" name="emailId" placeholder="Enter your e-mail address" value=""><br>
                        <br>
                        <label class="" for="contact">CONTACT NUMBER (Optional)</label><br>
                        <input type="text" id="contact" name="contact" placeholder="(123)456-7890" value=""><br>
                        <br>
                        <div class="button__holder">
                            <button id="sub">SUBSCRIBE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <br>            
        <h1 class="joke">
            <!-- JOKE FROM THE API -->
        </h1>
        `;
    }
}
let subscribe = document.querySelector(".subscribe")
let form = new Form();
subscribe.innerHTML = form.render();


class Message {
    constructor () {}
    render () {
        return `
            <h2>Your subscription has been successful. Enjoy your Joke!</h2>  
            <br>
            <form>
                <div class="button__holder">
                    <button id="new">NEW SUBSCRIBER</button>
                </div>
            </form>
            <br>
        `;
    }
}
let replaceForm = document.querySelector(".form__container")
let message = new Message();

// ADD CLICK EVENT
const subscribeButton = document.querySelector("#sub");
subscribeButton.addEventListener('click', (event) => {
	event.preventDefault();
    event.stopPropagation();
    const firstNameValue = document.querySelector("#firstName").value;
    const lastNameValue = document.querySelector("#lastName").value;
    const emailIdValue = document.querySelector("#emailId").value;
    const contactValue = document.querySelector("#contact").value;
    if (firstNameValue.length < 1 ) {
        const firstNameTag = document.querySelector("#firstName");
        firstNameTag.classList.add('error');
        alert("400 Bad Request : Complete all required fields correctly to proceed - first name")
        let clearAll = document.querySelector(".joke");
        clearAll.innerHTML = "";
        return;
    }
    if (lastNameValue.length < 1 ) {
 		const lastNameTag = document.querySelector("#lastName");
        lastNameTag.classList.add('error');
        alert("400 Bad Request : Complete all required fields correctly to proceed - last name")
        let clearAll = document.querySelector(".joke");
        clearAll.innerHTML = "";
        return;
    }
    if ( emailIdValue.length < 1 || emailIdValue.includes("@") == false ) {
        const emailIdTag = document.querySelector("#emailId");
        emailIdTag.classList.add('error');
        alert("400 Bad Request : Complete all required fields correctly to proceed - email")
        let clearAll = document.querySelector(".joke");
        clearAll.innerHTML = "";
        return;
    }
    if ( 1 > contactValue.length > 10 || isNaN(contactValue)) {
        const contactTag = document.querySelector("#contact");
        contactTag.classList.add('error');
        alert("400 Bad Request : Complete all required fields correctly to proceed - contact")
        let clearAll = document.querySelector(".joke");
        clearAll.innerHTML = "";
        return;
    }
    // 	V. On Successful Submission, Remove Error Visual and Clear Input Fields
	const firstNameTag = document.querySelector("#firstName");
	const lastNameTag = document.querySelector("#lastName");
    const emailIdTag = document.querySelector("#emailId");
    const contactTag = document.querySelector("#contact");
    // 	a. Remove Error Visual via removal and addition of classes
	firstNameTag.setAttribute("placeHolder", "Enter your first name");
	firstNameTag.removeAttribute("class");
	lastNameTag.setAttribute("placeholder", "Enter your last name");
	lastNameTag.removeAttribute("class");
    emailIdTag.setAttribute("placeHolder", "Enter your e-mail address");
	emailIdTag.removeAttribute("class");
    contactTag.setAttribute("placeHolder", "(123)456-7890");
	contactTag.removeAttribute("class");
	firstNameTag.value = "";
	lastNameTag.value = "";
    emailIdTag.value = "";
    contactTag.value = "";

    axios.get(`https://icanhazdadjoke.com/slack`)
	.then(function (response) {  
        replaceForm.innerHTML = message.render();
        let clearAll = document.querySelector(".joke");      
        clearAll.innerHTML = `"${response.data.attachments[0].text}"`;
	})
	.catch(function (error) { 
		console.log(error);
	});
    // axios.post(`https://project-1-api.herokuapp.com/comments?api_key=${myKey}`, {firstName: firstNameValue, lastName: lastNameValue, emailId: emailIdValue, contact: contactValue})
    //     .then(function (response) {
    //         clearAll.innerHTML = "";
    //     })
    //     .catch(function (error) { 
    //         console.log(error);
    //     });  
})