/*****************************************************
**
**                SOCIALPIC JS
**
** Jquery for the socialpic jquery plugin
**
** Author: Andrew Hartnett
**   Date: November 2014
**
*****************************************************/

$(function(){
	$('body').on('click', 'a.socialclick', function(){
			var socialimage = $(this).closest('div.api-detail_container').find('img').attr('src');
			var socialnameString = encodeURIComponent($(this).closest('div.api-detail_container').find('img').attr('title'));
			var socialname = socialnameString.replace(/\"/g,'');
			var socialurl = encodeURIComponent("http://a-galerie.fr"+socialimage)
			
			console.log(socialname)

			if($(this).hasClass('facebook-share')){
				window.open('https://www.facebook.com/dialog/feed?app_id=145634995501895&display=popup&caption='+socialname+'&picture='+socialurl+'&description=&link=http%3A%2F%2Fa-galerie.fr%2F&redirect_uri=https%3A%2F%2Fwww.facebook.com', 'Share Facebook', config='height=300, width=500');
			}

			if($(this).hasClass('twitter-share')){
				window.open('http://twitter.com/home?status=A. Galerie - Galerie de photographies contemporaines %C3%A0 Paris '+socialurl, 'Share Twitter', config='height=300, width=500');
			}

			if($(this).hasClass('google-share')){
				window.open('https://plus.google.com/share?url='+encodeURIComponent(socialurl), 'Share Google +', config='height=300, width=500');
			}

			if($(this).hasClass('pinterest-share')){
				window.open('http://www.pinterest.com/pin/create/button/?url='+socialurl+'&media='+socialurl+'&description='+encodeURIComponent(socialname), 'Share Pinterest', config='height=400, width=600');
			}
			
			if($(this).hasClass('instagram-share')){
				window.open('http://www.pinterest.com/pin/create/button/?url='+socialurl+'&media='+socialurl+'&description='+encodeURIComponent(socialname), 'Share Pinterest', config='height=400, width=600');
			}


	});
});