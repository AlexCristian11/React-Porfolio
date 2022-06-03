# Portofolio Project

## About

This is my first portofolio project that I made, only that now is made using React. It follows a simple recipe with a 'about me', 'projects', 'skills' section. Compared to the old project, I added a dark mode functionality to use some of the power of React.

## Components

Each section is divided into it’s respective component such as Navbar, About, Projects, Skills. 

## Dark Mode Functionality

I added a dark mode functionality which toggles the website between light and dark mode.

```jsx
// App.js
const [toggle, setToggle] = useState(true);

  function handleToggle() {
    setToggle(prevState => !prevState);
  }
```

```jsx
// Navbar.jsx
<nav className={props.darkMode ? "dark" : ""}>
</nav>
// the slider
<div className="toggler">
  <p className="toggler--light">Light</p>
  <div className="toggler--slider" onClick={props.toggleDarkMode}>
     <div className="toggler--slider--circle"></div>
  </div>
  <p className="toggler--dark">Dark</p>
```