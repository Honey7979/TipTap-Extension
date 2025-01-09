# Text Editor with Highlight Mark Extension

A simple text editor built with React and TipTap, featuring a custom `HighlightMark` extension for highlighting text in yellow. Users can easily highlight or remove highlights from selected text. Built with Node.js (v18.x or higher), this standalone React application provides a lightweight, user-friendly experience for text editing. It is also compatible with higher versions of Node.js.

---


## Demo

### Watch the demo to see how the editor works:

[Watch the demo here](https://www.youtube.com/watch?v=your-video-id)

Alternatively, here's a quick GIF demo:

![Text Editor Demo](src/assets/demo.gif)

---


## Features
- **Text Highlighting**: Highlight text in yellow with the click of a button.
- **Remove Highlighting**: Easily remove highlights from selected text with another button.

---

## Technologies Used
- **React**: For building the user interface and handling state.
- **TipTap**: A headless rich-text editor for React.
- **CSS**: For styling the editor and buttons.

---

## File Structure
  ```├── public
      │   ├── index.html
      ├── src
      │   ├── App.css
      │   ├── App.jsx
      │   ├── components
      │   │   └── HighlightMark...
      │   ├── index.css
      │   ├── main.jsx
      │   ├── TextEditor.css
      │   ├── TextEditor.jsx
      ├── package-lock.json
      ├── package.json
      └── vite.config.js
```
---

## Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (v18.x or higher)
- npm

### Steps to Set Up
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   
2. **Install dependencies**:

    ```bash
    Copy code
    npm install

3. **Start the development server**:

    ```bash
    Copy code
    npm start

This will start the development server and open the app in your default browser.

## Code Explanation

### 1. HighlightMark.js
This file defines a custom TipTap extension for highlighting text. It:
- Provides a yellow highlight color.
- Includes functionality to parse and render HTML with a yellow background.

### 2. TextEditor.js
This React component:
- Initializes the TipTap editor.
- Integrates the `HighlightMark` extension.
- Provides buttons for highlighting and removing highlights.
- Manages editor state using TipTap's `useEditor` hook.
- Responds to user input by triggering the appropriate commands.

### 3. TextEditor.css
This file contains basic CSS for:
- Styling the editor.
- Buttons for interactions.
- Ensuring a clean and visually appealing interface.

---

## How to Use

### Highlight Text:
1. Select the text you want to highlight.
2. Click the **"Highlight in Yellow"** button.

### Remove Highlight:
1. Select the highlighted text.
2. Click the **"Remove Highlight"** button.

---

## Future Improvements
- **Customizable Highlight Colors**: Allow users to select different highlight colors.
- **Text Formatting Options**: Add functionality for bold, italic, underline, and more.
- **Text Persistence**: Save the content to a database or local storage to preserve edits.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

