// Code Here!
 document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('input');
  
    
    function clickAlert() {
      alert('I was clicked!');
    }
  
    input.addEventListener('click', clickAlert);
  
    
    input.addEventListener('click', function() {
      console.log('input listener clicked!');
    });

    addingEventListener();
  });
  
  function addingEventListener() {
    let input = document.getElementById('input');
  
    if (input) {
      input.addEventListener('click', function() {
        console.log('input listener clicked!');
      });
      return true;
    } else {
      console.log('input listener not found');
      return false;
    }
  };

