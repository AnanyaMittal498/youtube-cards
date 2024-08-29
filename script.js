function createcard (title,cname,views,monthsold,duration,thumbnail) {
    if(views >= 1000000) {
        views = (views / 1000000) + "M";
    } else if (views >= 1000) {
        views = (views / 1000) + "K";
    }
    
    let html = ` <div class="card">
    <div class="img">
            <img class="thumbnail" src="${thumbnail}" alt="" >
            <div class="duration">${duration}</div>
        </div>
        <div class="others">
            <div class="title">${title}</div>
            <div class="details">${cname} . ${views} views . ${monthsold} months ago</div>
        </div>
        </div>`
   
   document.querySelector(".container").innerHTML = (document.querySelector(".container").innerHTML) + html
   
}


createcard("Sigma Web Development Course #4", "Code with Harry", 155, 12, "19:52", "https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDVLIUfmrskNAha1yNa-7ygsEeNEA");
createcard("Sigma Web Development Course #5", "Code with Harry", 7200000, 2, "3:22", "https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDVLIUfmrskNAha1yNa-7ygsEeNEA");