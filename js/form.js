
function MyForm(selector, options){

    if(!selector){
       console.error("form 선택자는 필수 입력사항입니다"); 
       return;
    }
    this.init(selector); 
    this.bindingEvent(options); 
 }

 MyForm.prototype.init = function(selector){
    this.form = $(selector); 
    this.btnSubmit = this.form.find("input[type='submit']"); 
 }

 MyForm.prototype.bindingEvent = function(options){
    options.forEach(function(opt){
        this.btnSubmit.on("click", function(e){
            if(opt.type==="text"){
                if(!this.isTxt(opt.name, opt.len)) e.preventDefault(); 
             }
        }.bind(this));
    }.bind(this));
}

MyForm.prototype.isTxt = function(name, len){
    if(len === undefined ) len = 1; 
    
    let txt = $("[name = "+name+"]").val(); 
     
    if(txt.length >= len){
       $("[name = "+name+"]").parent().find("p").remove(); 
       return true; 
    }else{
        $("[name = "+name+"]").parent().find("p").remove(); 
        $("[name = "+name+"]").parent().append(
            "<p>아이디를 "+len+"자 이상 입력하세요</p>"
        )
       return false; 
    }
}

