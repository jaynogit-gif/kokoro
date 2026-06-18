function changeSection(){
                var selectMenu = document.getElementById("chapter-select");
                var player = document.getElementById("book-player");

                player.pause();
                player.src = selectMenu.value;
                player.load();

                var playPromise = player.play();
                if(playPromise !== undefined) {
                  playPromise.then(_ => {
                    console.log("Stream verified and playing successfully!");
                  }).caatch(error => {
                    console.log("Browser safety trigger caught.Retrying stream manually.");

                    player.play()
                  });
                }




var player = document.getElementById("book-player");
player.addEventListener("ended", function() {
  var selectMenu = document.getElementById("chapter-select");
  if (selectMenu.selectedIndex < selectMenu.options.length - 1) {
    selectMenu.selectedIndex = selectMenu.selectedIndex + 1;
    changeSection();
  }
});


