async function getPosts(){
	const postsHTTPData = await fetch('/api/posts',{
		method: 'GET',
		headers:{
		  'Content-Type': 'application/json'
	  	}
	})

	const successPosts = await postsHTTPData.json();
	let template = '';
	successPosts.posts.forEach(function(item,idx){
		template += `<div class="box">
					 <a href="/post/${item._id}">
						<img src="${item.miniatura}" alt="Avatar" style="width:100%">
						<div class="containerCard">
						  <h4>${item.title}</h4>
						  <div class="containerDescription"><p>${item.article}</p></div>
						</div>
					</a>
					</div>`
	})

	document.getElementById("reviews").innerHTML = template;

}

getPosts();
