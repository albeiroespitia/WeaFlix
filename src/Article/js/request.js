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
	console.log(successPosts);
	let bannerTemplate = `<img src="${successPosts.post.principalImage}" alt="" >`;
	let titleTemplate = successPosts.post.title;
	let articleTemplate = `<p>${successPosts.post.article}</p>`;

	document.getElementById("thumb").innerHTML = bannerTemplate;
	document.getElementById("titleArticle").innerHTML = titleTemplate;
	document.getElementById("bodyArticle").innerHTML = articleTemplate;

	document.title = 'WeaFlix - ' + successPosts.post.title;




}

getPosts();
