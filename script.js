document.getElementById('joinForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  alert(`Thank you for joining, ${name}! We will reach out to you at ${email}.`);
  e.target.reset();
});
