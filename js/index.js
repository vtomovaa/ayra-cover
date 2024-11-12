// NAVBAR TOGGLE
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');
const dropbtn = document.querySelector('.dropbtn');

dropbtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent the click from bubbling up to the document
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    dropdownContent.style.display = 'none';
  }
});

// ACCORDION TOGGLE
function myFunction(event) {
  const clickedHeader = event.target.closest('.accordion-header');
  const parentItem = clickedHeader.parentElement;
  const isAlreadyOpen = parentItem.classList.contains('show');
  const allItems = document.getElementsByClassName('accordion-item');
  for (let i = 0; i < allItems.length; i++) {
    allItems[i].classList.remove('show'); // Close all items
    allItems[i].querySelector('.arrow').classList.remove('rotate'); // Reset arrow rotation
  }

  // If the clicked item wasn't open, open it
  if (!isAlreadyOpen) {
    parentItem.classList.add('show'); // Open this accordion item
    clickedHeader.querySelector('.arrow').classList.add('rotate'); // Rotate arrow for this item
  }
}


function toggleVote(voteType, commentId) {
  let upVoteCount = parseInt(document.getElementById('upCount' + commentId).innerText);
  let downVoteCount = parseInt(document.getElementById('downCount' + commentId).innerText);
  let upVoted = document.querySelector(`#upVoteBtn${commentId}`).classList.contains('active');
  let downVoted = document.querySelector(`#downVoteBtn${commentId}`).classList.contains('active');

  if (voteType === 'up') {
    if (upVoted) {
      upVoteCount--;
      upVoted = false;
    } else {
      upVoteCount++;
      upVoted = true;
      if (downVoted) {
        downVoteCount--;
        downVoted = false;
      }
    }
  } else if (voteType === 'down') {
    if (downVoted) {
      downVoteCount--;
      downVoted = false;
    } else {
      downVoteCount++;
      downVoted = true;
      if (upVoted) {
        upVoteCount--;
        upVoted = false;
      }
    }
  }

  // Update the counts in the UI
  document.getElementById('upCount' + commentId).innerText = upVoteCount;
  document.getElementById('downCount' + commentId).innerText = downVoteCount;

  // Toggle active class for visual feedback
  document.getElementById('upVoteBtn' + commentId).classList.toggle('active', upVoted);
  document.getElementById('downVoteBtn' + commentId).classList.toggle('active', downVoted);
}



let faqItems = document.querySelectorAll(".faq-content");

const onClickFaq = (e) => {
  const answer = e.currentTarget.querySelector(".a");
  const symbol = e.currentTarget.querySelector(".toggle-symbol");

  // Close all other answers
  faqItems.forEach(item => {
    const itemAnswer = item.querySelector(".a");
    const itemSymbol = item.querySelector(".toggle-symbol");
    if (itemAnswer !== answer) {
      itemAnswer.style.display = "none";
      itemSymbol.textContent = "+";
    }
  });

  // Toggle the clicked answer
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
    symbol.textContent = "-";
  } else {
    answer.style.display = "none";
    symbol.textContent = "+";
  }

};

faqItems.forEach(item => {
  item.addEventListener("click", onClickFaq);
});



// popup

function openPopup(popupId) {
  document.getElementById(popupId).style.display = 'block';
}

function closePopup(popupId) {
  document.getElementById(popupId).style.display = 'none';
}


