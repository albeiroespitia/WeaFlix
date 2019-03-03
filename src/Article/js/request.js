async function getPosts(){
	let postIdArray = window.location.href.split('/');
	let postId = postIdArray[postIdArray.length-1];

	const postsHTTPData = await fetch(`/api/post/${postId}`,{
		method: 'GET',
		headers:{
		  'Content-Type': 'application/json'
	  	}
	})


	const successPosts = await postsHTTPData.json();
	let bannerTemplate = `<img src="${successPosts.post.principalImage}" alt="" >`;
	let titleTemplate = successPosts.post.title;
	let articleTemplate = `<p>${successPosts.post.article}</p>`;

	document.getElementById("thumb").innerHTML = bannerTemplate;
	document.getElementById("titleArticle").innerHTML = titleTemplate;
	document.getElementById("bodyArticle").innerHTML = articleTemplate;

	document.title =  successPosts.post.title + ' - WeaFlix';

	shareOverrideOGMeta(window.location.href,document.title,successPosts.post.article,successPosts.post.principalImage);


}

getPosts();

function shareOverrideOGMeta(overrideLink, overrideTitle, overrideDescription, overrideImage)
{
	FB.ui({
		method: 'share_open_graph',
		action_type: 'og.likes',
		action_properties: JSON.stringify({
			object: {
				'og:url': overrideLink,
				'og:title': overrideTitle,
				'og:description': overrideDescription,
				'og:image': overrideImage
			}
		})
	},
	function (response) {
	// Action after response
	});
}
