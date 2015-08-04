define(function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", 'javascripts/songs.json');
  xhr.send();
    
  function getSongs(callback) {
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        callback.call(this, data.songs);
      }
    };
  }
  return {
    getSongs
  };
});