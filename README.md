# Website Revamp - Interactive Landing Page

A modern, responsive landing page featuring dynamic text rotation and an infinite scrolling logo carousel. Built with vanilla HTML, CSS, and JavaScript.

**Live Demo:** [https://asfand6417.github.io/Website-Revamp/](https://asfand6417.github.io/Website-Revamp/)

## Features

- 🎯 Dynamic rotating headline with smooth transitions
- 🎪 Auto-scrolling logo gallery (pauses on hover)
- 📱 Fully responsive design
- ♿ Accessible (ARIA labels, keyboard navigation)
- ⚡ Vanilla JS - no frameworks or dependencies

## Tech Stack

- HTML5
- CSS3 (Flexbox, CSS Animations, Custom Properties)
- JavaScript (ES6+)

## Quick Start

```bash
# Clone the repository
git clone https://github.com/Asfand6417/Website-Revamp.git

# Open index.html in your browser
open index.html
```

## Project Structure

```
Website-Revamp/
├── index.html      # Main HTML structure
├── styles.css      # Styling and animations
├── script.js       # Interactive functionality
└── README.md       # Documentation
```

## Key Implementation Details

**Rotating Text Animation**
- Cycles through phrases every 3 seconds
- Smooth fade transition with CSS transforms
- Screen reader accessible with aria-live regions

**Logo Carousel**
- CSS keyframe animation for seamless infinite loop
- JavaScript calculates optimal animation duration
- Pause/resume on hover and touch events

**Responsive Design**
- Mobile-first approach
- Fluid typography using `clamp()`
- Hamburger menu for mobile navigation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

---

Built with ❤️ by [Asfand](https://github.com/Asfand6417)
