const incrementButton = document.getElementById("incrementButton");
const decrementButton = document.getElementById("decrementButton");
        const countSpan = document.getElementById("numberSpan");

        // Initialize the count value to 0
        let count = 0;

        // Function to update the count and display it in the span element
        function updateCount() {
            count++;
            countSpan.textContent = count;
        }

        function lessCount() {
          count = count - 1;
          countSpan.textContent = count;
        }

        // Add a click event listener to the button
        incrementButton.addEventListener("click", updateCount);
        decrementButton.addEventListener("click", lessCount);
