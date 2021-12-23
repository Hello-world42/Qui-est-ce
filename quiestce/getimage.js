image_array = [
    'adam.jfif',
    'agash.jfif',
    'charles.jfif',
    'clement.jfif',
    'coco.jfif',
    'erwan.jfif',
    'fernand.jfif',
    'francois.jfif',
    'hamza.jfif',
    'irene.jfif',
    'jessy.jfif',
    'johanna.jfif',
    'julieb.jfif',
    'julieh.jfif',
    'leo.jfif',
    'malcolm.jfif',
    'mohamed.jfif',
    'moi.jfif',
    'nathan.jfif',
    'nino.jfif',
    'sarah.jfif',
    'scotty.jfif',
    'vincent.jfif',
    'yacine.jfif'
]

function get_random_image() {
    random_index = Math.floor(Math.random() * image_array.length);
    selected_image = image_array[random_index]
    document.getElementById('image_shower').src = `./images/${selected_image}`
    setTimeout(function () {
        window.location.href = 'jeu.html';
    }, 3000);
    const element = document.getElementById("myBar");
    let width = 0;
    const id = setInterval(frame, 30);
    function frame() {
        if (width == 100) {
            clearInterval(id);
        } else {
            width++;
            element.style.width = width + '%';
        }
    }
}