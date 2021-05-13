window.onload = function betöltés() {
    document.getElementById("addButton").addEventListener("click", () => {
       // console.log("asdasd");
        let data = {
            text: document.getElementById("jokeText").value
        }
        fetch("api/jokes",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        ).then(x => {
            if (x.ok) {
                alert("Siker");
                console.log("siker");
            }
            else {
                alert("Kudarc");
                console.log("kudarc");
            }
        });

    });
}