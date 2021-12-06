$("input[type=submit]").on("click", function(e){
    if(!isTxt('message',1)) e.preventDefault();
})

function isTxt(name, len){
    if(len === undefined) len = 1;

    let txt = $("[name = "+name+"]").val();

    if(txt.length >= len){
        $("[name = "+name+"]").parent().find("p").remove();
        return true;
    }else{
        $("[name = "+name+"]").parent().find("p").remove();
        $("[name = "+name+"]").parent().find("p").append(
            "<p>메세지를 "+len+"자 이상 입력하세요</p>"
        )
        return false;
    }
}