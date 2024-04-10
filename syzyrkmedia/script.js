let importedData = null;

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
            return 'Error';
        });
}

function changeData() {
    var filmList = importedData.split("\n");
    filmList.pop();
    console.log(filmList);
    document.getElementById("data").innerHTML = filmList;
    let i = 0;

    while (i < filmList.length) {
        var info = filmInfo(filmList[i]);
        addRow(info);
        i++;
    }

}

function filmInfo(id){
    var thumbnail = "https://img.youtube.com/vi/"+id+"/hqdefault.jpg"
    var url = "<a href='https://www.youtube.com/watch?v="+id+"'></a>";
    var ytApiKey = "AIzaSyBzMqxtwRGw3XtTtTxunyoBk_riXH1vyhU";
    var date = "";
    var title = "";
    fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id='+id+'&key='+ytApiKey)
    .then(res =>{
        return res.json();
    })
    .then(data=>{
        data.items.forEach(curr => {
            title = curr.snippet.title;
            date = curr.snippet.publishedAt;
        });
    })
    var result = [];
    result.push("1", title, url, thumbnail, date);
    alert(title);
    alert(date);
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
