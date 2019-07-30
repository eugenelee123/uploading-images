$docBody=$(document.body);
let test;

$docBody.ready(function(){
    console.log("Loaded");
    
    getImages(function(results){
        console.log(results);
        
        let obj=results;
        let test= results;
        obj.forEarch(insertImg);
    })
})

function getImages(callback){
    var parameters={
        url:"https://localhost:3000/images",
        method:"GET",
        dataType:"json"
    };
    
    $.ajax(parameters).done(function(results){
        if(callback){
            console.log(results);
        }
    })
};

function insertImg(item)
{
    console.log(item.id + item.caption + item.src);
    var htmlTemplate = $("#templateImg").text();
    
    $("#orderedList").append(htmlTemplate);
    $("#orderedList").last("img").attr("id", item.id);
    $("#orderedList").find(item.id).text(item.caption);
    $("#orderedList").find(item.id).attr("src", item.src);
    
    
}
