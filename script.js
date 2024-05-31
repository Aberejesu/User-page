const usersContainer = document.getElementById('users');

async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    displayUsers(data);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

function displayUsers(users) {
  users.slice(0, 10).forEach(user => {
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');

    const userImage = document.createElement('img');
    userImage.src = `https://unsplash.com/photos/man-wearing-henley-top-portrait-7YVZYZeITc8`; // Placeholder image
    
    userCard.appendChild(userImage);
        

    const userInfo = document.createElement('p');
    userInfo.classList.add('user-info');
    userInfo.textContent = `
      ${user.name}

      ${user.email}
      
      ${user.phone}
      
      ${user.address.street}, ${user.address.city}
      
      Website: ${user.website}
      
      Company: ${user.company.name}
    `;

    userCard.appendChild(userImage);
    userCard.appendChild(userInfo);
    usersContainer.appendChild(userCard);
  });
}

fetchUsers();
