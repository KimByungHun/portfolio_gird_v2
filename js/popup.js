const main = document.querySelector("main"); 
const frame = document.querySelector(".contact");

frame.addEventListener("click", e=>{
    e.preventDefault();

    let pop = document.createElement("aside");

    let htmls ="";

    htmls+=`    

                    <form action="#" method="get" id="myForm">
                        <fieldset>
                            <legend>Contact</legend>

                            <div class="name">
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name">
                            </div>
                            <div class="phonenumber">
                                <label for="phonenumber">phonenumber</label>
                                <input type="text" name="phonenumber" id="phonenumber" placeholder="ex)010-0000-0000">
                            </div>
                            <div class="message">
                                <label for="name">message</label>
                                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                            </div>
                            <div class="submit">
                                <input type="submit" value="SEND">
                            </div>

                        </fieldset>
                    </form>
                
                <span class="close">CLOSE</span>
    `
    pop.innerHTML = htmls;
    document.querySelector("main").append(pop);
});

main.addEventListener("click", e=>{
    let target = e.target.closest("aside"); 
 
    if(target !== null){
       let close = target.querySelector(".close"); 
       if(e.target == close) target.remove(); 
    }
 })