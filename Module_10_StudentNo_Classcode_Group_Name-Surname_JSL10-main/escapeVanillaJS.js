document.addEventListener("DOMContentLoaded", () => {
    // 🪲 Bug: Incorrect ID used for attaching the event listener
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                  // 🪲 Bug: Incorrect element ID
                if (mostRecentBook) {
                    document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
                } else {
                    document.getElementById("room1Result").textContent = "No books available.";
                }
            });
    });

     document.getElementById("solveRoom2").addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'callbacks']);
        // 🪲 Bug: What's mssing from JS concepts?
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
         // 🪲 Bug: Incorrect function call
        const commonConcepts = findIntersection(reactConcepts, jsConcepts);

        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    // 🪲 Bug: Asynchronous function ?
    document.getElementById("solveRoom3").addEventListener("click", () => {
        fetch('directions.json') 
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText); 
                }
                return response.json();
            })
            .then(directions => {
            
                if (!directions || typeof directions !== 'object') {
                    throw new Error('Invalid directions data'); 
                }
                return navigateLabyrinth(directions);
            })
            .then(message => {  
                        // 🪲 Bug: Incorrect method
                document.getElementById("room3Result").innerHTML = `<p>${message}</p>`;
            })
            .catch(error => {
                console.error('Error:', error); 
                document.getElementById("room3Result").innerHTML = `<p>Error: ${error.message}</p>`; 
            });
    });
});


function findMostRecentBook(books) {
    if (books.length === 0) {
        return null;
    }
    
    return books.reduce((mostRecent, book) => {
    // 🪲 Bug: Logic error
        return new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent;
    });
}

function findIntersection(setA, setB) {
    // 🪲 Bug: Incorrect logic
    const intersection = new Set([...setA].filter(item => setB.has(item))); 
    return intersection;
}

async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // 🪲 Bug: No delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}

