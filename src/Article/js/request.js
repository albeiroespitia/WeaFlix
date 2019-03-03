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

	document.title =  successPosts.post.title + ' - WeaFlix';


	var link=document.createElement('meta');
	link.name="og:url";
	link.content="WEAFLIX.TK";
	document.getElementsByTagName('head')[0].appendChild(link);

	var link2=document.createElement('meta');
	link2.name="og:type";
	link2.content="article";
	document.getElementsByTagName('head')[0].appendChild(link2);


	var link3=document.createElement('meta');
	link3.name="og:title";
	link3.content=document.title;
	document.getElementsByTagName('head')[0].appendChild(link3);





}

getPosts();
