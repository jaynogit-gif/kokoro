function changeSection(){
                var selectMenu = document.getElementById("chapter-select");
                var player = document.getElementById("book-player");

                console.log("Switching audio to: " + selectMenu.value);

                player.src = selectMenu.value;
                player.load();
                player.play();

            }

            var player = document.getElementById("book-player");

            player.addEventListener("ended", function() {
                var selectMenu = document.getElementById("chapter-select")

                if (selectMenu.selectedIndex < selectMenu.options.length - 1) {
                    selectMenu.selectedIndex = selectMenu.selectedIndex + 1;
                    changeSection();
                }
            });