let importedData = null;
let x = 1;

function importList() {
    fetch('https://syzyrk.github.io/syzyrkmedia/list.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(value => {
            importedData = value;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            alert('There was a problem with the fetch operation:', error);
            return 'Error';
        });
}

function changeData() {
    var filmList = importedData.split("\n");
    filmList.pop();
    console.log(filmList);
    let i = 0;

    while (i < filmList.length) {
        var info = filmInfo(filmList[i]);

        var bodyContent = "<a href='"+info[2]+"' alt='Tytuł: "+info[1]+">"+info[3]+"</a>"; 
        document.getElementById("content").innerHTML += bodyContent;
        
        i++;
    }

}

function filmInfo(id){
    var thumbnail = "<img src='https://img.youtube.com/vi/"+id+"/hqdefault.jpg' width='150px'>"
    var url = "<a href='https://www.youtube.com/watch?v="+id+"' target='blank'>Link</a>";
    var ytApiKey = "AIzaSyBzMqxtwRGw3XtTtTxunyoBk_riXH1vyhU";
    fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id='+id+'&key='+ytApiKey)
    .then(res =>{
        return res.json();
    })
    var title, date;
    .then(data=>{
        data.items.forEach(curr => {
            title = curr.snippet.title;
            date = curr.snippet.publishedAt;
        });
    })
    var result = [];
    result.push(x.toString(), title, url, thumbnail, date);
    x += 1;
    return result;

}

function addRow(content) {
    var row = "<tr>";
    for (var i = 0; i < content.length; i++) {
        row += "<td>" + content[i] + "</td>";
    }
    row += "</tr>";
    document.getElementById("data").innerHTML += row;
}


importList();
