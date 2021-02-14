document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }

    const changeDevouredBtns = document.querySelectorAll('.change-devour');

    // Set up the event listener for the create button
    if (changeDevouredBtns) {
      changeDevouredBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
          // Grabs the id of the element that goes by the name, "id"
          const id = e.target.getAttribute('data-id');
          const newDevour = e.target.getAttribute('data-new');
  
          const newDevourState = {
            devoured: newDevour,
          };
  
          fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            // make sure to serialize the JSON body
            body: JSON.stringify(newDevourState),
          }).then((response) => {
            // Check that the response is all good
            // Reload the page so the user can see the new quote
            if (response.ok) {
              console.log(`changed devour to: ${newDevour}`);
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
        });
      });
    }
  

const createBurgerBtn = document.querySelector("#submit")

createBurgerBtn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event)
  const newBurger = {
    burger_name: document.querySelector('#ca').value.trim(),
    devoured: document.getElementById('devoured').checked,
  }
  console.log(newBurger)
  fetch('/api/burgers', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
       body: JSON.stringify(newBurger),
           }).then(() => {
      // Empty the form
      console.log(newBurger)
      document.getElementById('ca').value = '';

      // Reload the page so the user can see the new quote
      console.log('Created a new burger!');
      location.reload();
    });
  });



    

const deleteBurger = document.querySelectorAll('.delete-burger');

  // Set up the event listeners for each delete button
  deleteBurger.forEach((button) => {
    button.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-id');

      // Send the delete request
      fetch(`/api/burgers/${id}`, {
        method: 'DELETE',
      }).then((res) => {
        console.log(res);
        console.log(`Deleted burger: ${id}`);

        // Reload the page
        location.reload();
      });
    });
  });
});
