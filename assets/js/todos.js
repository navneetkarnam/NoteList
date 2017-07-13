//check off specific todos by clicking
$("ul").on("click", "li", function(){
	//if grey then turn black else turn grey
	$(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});

	event.stopPropagation();
});

//listener to the text input

$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +"</li>");
	}
});

$(".fa-pencil").click(function(){
	$("input[type='text']").slideToggle();
});