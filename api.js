// CONSTRUCTOR FOR SUBCRIPTION FORM and JOKE
class Form {
    constructor () {}
    render () {
        return `
        <div class="form__container">
            <h1 class="form__title">SUBSCRIBE NOW TO WIN A FREE JOKE</h1>
            <p>Sign up for exclusive email offers, loyalty programs and perks! 
            We'll let you know when we are roling out new limited time menu items, contests and giveaways</p>
            <div class="form">
                <div class="form__holder">
                    <form id="form">
                        <label class="" for="firstName">FIRST NAME</label><br>
                        <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" value=""><br>
                        <label class="" for="lastName">LAST NAME</label><br>
                        <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" value=""><br>
                        <label class="" for="emailId">E-MAIL ADDRESS</label><br>
                        <input type="text" id="emailId" name="emailId" placeholder="Enter your e-mail address" value=""><br>
                        <label class="" for="contact">CONTACT NUMBER</label><br>
                        <input type="text" id="contact" name="contact" placeholder="(123)456-7890" value=""><br>
                        <div class="button__holder">
                            <button id="sub">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>            
        <div class="joke">
            <!-- JOKE FROM THE API -->
        </div>
        `;
    }

}
let subscribe = document.querySelector(".subscribe")
let form = new Form();
subscribe.innerHTML = form.render();

// ADD CLICK EVENT
const subscribeButton = document.querySelector("#sub");


// GET RANDOM DAD JOKE


// ADD THE DAD JOKE