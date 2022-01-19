fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCHH2vhhi45Ar3fOl7SmUvnA&maxResults=1&order=date&key=AIzaSyCbjLLC4xzE0v8hyovx2xdFkp2DXuQDSWI")
.then((result)=>{
	return result.json()
}).then((data)=>{
	console.log(data)
	let videos = data.items
	let videoContainer = document.querySelector(".youtube-container")

	for(video of videos){

		//document.write(video.snippet.title)
	videoContainer.innerHTML += '<img src=" ${video.snippet.thumbnails.default.url}">'
	}
	 })