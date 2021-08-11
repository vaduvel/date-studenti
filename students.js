let textArea = document.getElementById("my-text-area");







getData()

async function getData() {
    try {
        let response = await fetch('https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt')
        if (response.status !== 200) {
            throw new Error('ERROR WHILE READING FILE')
        }
        var lines = textArea.value.split('\n')
        let text = await response.text()


        let array = ['Name: ', 'Address: ', 'Phone: ', 'Course: ', 'Name: ', 'Address: ', 'Phone: ', 'Course: ', 'Name: ', 'Address: ', 'Phone: ', 'Course: ', 'Name: ', 'Address: ', 'Phone: ', 'Course: ', 'Name: ', 'Address: ', 'Phone: ', 'Course: ', ]

        array.forEach((item, index) => {
            textArea.innerHTML += array[index] +
                text.split('\n')[index]
        })




    } catch (err) {
        textArea.innerHTML = 'problem: ' + err.message
    }

}