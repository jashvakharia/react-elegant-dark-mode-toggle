# React Elegant Dark Mode Toggle

A sleek and customizable dark/light mode toggle for React applications.

## 🌟 Features

- Smooth, animated dark/light mode toggle
- Fully customizable colors and icons
- TypeScript support
- Lightweight and easy to integrate
- Uses Lucide icons for a clean, modern look

## 📦 Installation

```bash
npm install react-elegant-dark-mode-toggle
```

## 🚀 Quick Start

```jsx
import React from 'react';
import { DarkModeToggle } from 'react-elegant-dark-mode-toggle';

function App() {
  const handleModeChange = (mode) => {
    console.log(`Switched to ${mode} mode`);
  };

  return (
    <DarkModeToggle 
      onChange={handleModeChange}
      initialMode="light"
    />
  );
}
```

## 🛠 Props

| Prop           | Type                           | Default   | Description                          |
|----------------|--------------------------------|-----------|--------------------------------------|
| `onChange`     | `(mode: 'light' | 'dark') => void` | -         | Callback function when mode changes  |
| `initialMode`  | `'light' | 'dark'`             | `'light'` | Initial mode of the toggle           |
| `className`    | `string`                       | -         | Additional CSS classes               |
| `iconSize`     | `number`                       | `18`      | Size of sun/moon icons               |
| `trackColor`   | `{ light: string, dark: string }` | Default colors | Customize track colors       |
| `thumbColor`   | `{ light: string, dark: string }` | Default colors | Customize thumb colors       |

## 🎨 Customization

```jsx
<DarkModeToggle 
  trackColor={{
    light: '#e0e0e0',
    dark: '#2c2c2c'
  }}
  thumbColor={{
    light: 'white',
    dark: '#4a4a4a'
  }}
  iconSize={20}
/>
```

## 🔧 Global Dark Mode Styling

To apply global dark mode styles, add a class to your body:

```css
body.dark {
  background-color: #1a202c;
  color: white;
}
```

## 💡 Tips

- The component adds a 'dark-mode' class to the body when in dark mode
- Easily integrate with existing design systems
- Works with server-side rendering

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


## 🐛 Issues

Found a bug? Please email me.