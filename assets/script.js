$( document ).ready(function() {

	
		$(".thumbnail-container img").click(function(){

			var thumbnail = $(this).attr("src");
			var imageTitle = $(this).attr("title");
			var caption = $(this).attr("data-caption");
			$("#main_image").fadeOut(800, function() {
				$("#main_image").attr('src',thumbnail);
				$("#image_title .title-heading").text(imageTitle);
				$("#image_title .caption").text(caption);
			}).fadeIn(800);
		});
	$(function () {
  // Grab the template script
  var theTemplateScript = $("#masonry-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // This is the default context, which is passed to the template
  var context = {
    tiles: [
		{
			"heading": "Etiam Ipsum Euismod",
			"content": "Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.",
			"image": "images/photo01.jpg",
			"meta": "Fringilla Commodo"
		},
		{
			"heading": "Dolor Ipsum Sollicitudin",
			"content": "Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur.",
			"image": "images/photo01.jpg",
			"meta": "Pharetra Ultricies"
		},
		{
			"heading": "Aenean lacinia bibendum nulla sed consectetur.",
			"content": "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper.",
			"image": "",
			"meta": "Tristique Sem"
		},
		{
			"heading": "Elit Porta Tellus Ultricies",
			"content": "Vestibulum id ligula porta felis euismod semper. Etiam porta sem malesuada magna mollis euismod.",
			"image": "images/photo01.jpg",
			"meta": "Parturient Ipsum"
		},
		{
			"heading": "Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
			"content": "Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
			"image": "",
			"meta": "Mollis Adipiscing"
		},
		{
			"heading": "Mattis Ridiculus",
			"content": "Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.",
			"image": "images/photo01.jpg",
			"meta": ""
		},
		{
			"heading": "Vehicula Mattis Fringilla",
			"content": "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue.",
			"image": "images/photo01.jpg",
			"meta": "Aenean Lorem"
		},
		{
			"heading": "Venenatis Pharetra Purus Nullam",
			"content": "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
			"image": "",
			"meta": "Vulputate Mollis"
		},
		{
			"heading": "Risus Tristique Cras",
			"content": "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui.",
			"image": "images/photo01.jpg",
			"meta": "Bibendum Condimentum"
		}
	]
  };

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $(document.body).append(theCompiledHtml);
});

$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: 220
});

});

