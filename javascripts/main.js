requirejs(["dom-access", "populate-songs", "get-more-songs"], 
  function (domAccess, populateSongs, getMoreSongs){
  var outputHTML = domAccess.getOutputElement();
  // console.log("outputEl!!", outputHTML);
  // console.log("songs1", songs1);
  // console.log("songs2", songs2);
// });


populateSongs.getSongs(displaySongData);


function displaySongData (songArray) {
  outputHTML.html("");
  for (var i = 0; i < songArray.length; i++) {
    var song = songArray[i];
    var newSong = createNewSongElement(song);
    outputHTML.append(newSong);
  }
  displayMoreButton(outputHTML);
}


function createNewSongElement (song) {
  var playlistHTML = document.getElementById("right-flex-item");
  var newSong = document.createElement("DIV");
  var newHeader = document.createElement("H3");
  var newSongParagraph = document.createElement("P");
  var newDeleteButton = document.createElement("BUTTON");
  $(newDeleteButton).attr("type", "button");
  $(newDeleteButton).text("Remove");
  newDeleteButton.id = "deleteButton";
  newSong.appendChild(newHeader);
  newSong.appendChild(newSongParagraph);
  newSong = updateSongElement(song, newSong);
  newSong.appendChild(newDeleteButton);
  return newSong;
}

function displayMoreButton(playlistHTML) {
  var moreButton = document.createElement("BUTTON");
  moreButton.id = "moreButton";
  $(moreButton).attr("type", "button");
  $(moreButton).text("More");
  outputHTML.append(moreButton);
};


function displayMoreSongs (songArray) {
  for (var i = 0; i < songArray.length; i++) {
      var song = songArray[i];
      var newSong = createNewSongElement(song);
      $("#moreButton").before(newSong);
  }
}

$(document).on("click", "#moreButton", function(){
  getMoreSongs.getMoreSongs(displayMoreSongs);
})

$(document).on("click", "#deleteButton", function(){
  $("#deleteButton").parent().remove();
});




//
// Update a single song element with information from a song object
// Accepts an existing song object and an existing song element
// Returns updated song element
//
function updateSongElement(song, songHTML) {
  var songName = song.songName;
  var artistName = song.artistName;
  var albumName = song.albumName;
  var songHeader = songHTML.firstElementChild;
  var songParagraph = songHTML.lastElementChild;
  songHeader.innerHTML = songName;
  songParagraph.innerHTML = artistName + " | " + albumName + " | " + "Genre";
  return songHTML;
}

});

//
// Update the playlist DOM element with a song
// Accepts a single existing song object and 
// an index value specifying which playlist child element to update
//
// function updatePlaylist(song, whichChild) {
//   var song = song;
//   var childNumber = whichChild;
//   var playlistHTML = document.getElementById("right-flex-item");
//   var songHTML = playlistHTML.children[childNumber];
//   songHTML = updateSongElement(song, songHTML);
// }

//
// Parse through new song array and add/update songs to playlist
// Update existing playlist children song elements
// Add new playlist children song elements if needed
//
// for (var i = 0; i < songArray.length; i++) {
//   var song = songArray[i];
//   var playlistHTML = document.getElementById("right-flex-item");
//   var childrenCount = playlistHTML.children.length;
//   if (i < childrenCount) {
//     updatePlaylist(song, i);
//   } else {
//     var newSong = document.createElement("DIV");
//     var newHeader = document.createElement("H3");
//     var newSongParagraph = document.createElement("P");
//     newSong.appendChild(newHeader);
//     newSong.appendChild(newSongParagraph);
//     playlistHTML.appendChild(newSong);
//     updatePlaylist(song, i);
//   }
// }