const setProfile = (profile) => {
  const id = document.getElementById("profile-id")
  const username = document.getElementById("profile-username")
  const name = document.getElementById("profile-name")
  const email = document.getElementById("profile-email")
  const phone = document.getElementById("profile-phone")
  const website = document.getElementById("profile-website")
  const address = document.getElementById("profile-address")
  const company = document.getElementById("profile-company")
  const avt = document.getElementById("profile-avt")
  const location = document.getElementById("profile-location")
  const link = document.getElementById("link-location")

  id.innerHTML = profile.id
  username.innerHTML = profile.username
  name.innerHTML = profile.name
  email.innerHTML = profile.email
  phone.innerHTML = profile.phone
  website.innerHTML = profile.website
  location.innerHTML = `${profile.address.geo.lat} ${profile.address.geo.lng}`
  company.innerHTML = `${profile.company.name}, ${profile.company.catchPhrase}, ${profile.company.bs}`
  address.innerHTML = `${profile.address.street}, ${profile.address.suite}, ${profile.address.city}, ${profile.address.zipcode}`
  avt.src = `https://api.dicebear.com/8.x/bottts/svg?seed=${profile.name}`
  link.href = `https://www.google.com/maps/place/${profile.address.geo.lat} ${profile.address.geo.lng}`
}

const fetchUser = async (number) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${number}`
  );
    // console.log(await res.json())
  return await res.json();
}

// fetchUser(5)

//refresh
const run = async () => {
  const random = Math.floor(Math.random() * 10) + 1;
  const profile = await fetchUser(random);
  setProfile(profile);
};
run();

//btn
const generate = async () => {
  const random = Math.floor(Math.random() * 10) + 1;
  const profile = await fetchUser(random);
  setProfile(profile);
};
