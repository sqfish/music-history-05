define(function getMoreSongs(callback) {

  // $.ajax({
  //       url: "songs2.json"
  //     }).done(function(data) {
  //       callback.call(this, data.songs);
  //     });

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      callback.call(this, data.songs);
    }
  };
  xhr.open("GET", 'songs2.json');
  xhr.send();
  return {
    getMoreSongs
  }
});