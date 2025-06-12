# PDF Merger

A simple, responsive web application to merge multiple PDF files into a single PDF, sorted alphabetically by filename. Built using vanilla HTML, CSS, and JavaScript with the [pdf-lib](https://github.com/Hopding/pdf-lib) library.

## Features

* Drag & drop or file selection of multiple PDF files
* Automatic sorting of selected files by filename (A–Z)
* Preview list with option to remove individual files
* Responsive design for mobile, tablet, and desktop views
* Instant merge and download of the combined PDF
* Status indicator for merge progress

## Prerequisites

* A modern web browser (Chrome, Firefox, Edge, Safari)
* Internet connection to load the `pdf-lib` library via CDN

## File Structure

```
pdf-merger/
├── index.html    # Main HTML page
├── style.css     # Stylesheet for layout and responsiveness
└── script.js     # JavaScript logic for file handling and PDF merging
```

## Installation & Usage

1. **Clone or download** the repository:

   ```bash
   git clone https://github.com/yourusername/pdf-merger.git
   cd pdf-merger
   ```

2. **Open** `index.html` in your preferred browser:

   * Double-click the file, or
   * Run a local HTTP server (recommended for drag-and-drop consistency):

     ```bash
     # Using Python 3.x
     python -m http.server 8000

     # Open http://localhost:8000 in your browser
     ```

3. **Select PDF files**:

   * Drag & drop them into the drop-zone area, or
   * Click the drop zone to open the file dialog and select PDFs.

4. **Reorder & remove** files as needed using the file list controls.

5. Click **"Merge & Download PDF"** to combine and download the merged document.

## Customization

* **Sorting behavior**: Change the `localeCompare` options in `updateFileList()` for different collation rules.
* **Styling**: Modify `style.css` to update colors, fonts, or layout breakpoints.
* **Library**: Swap out `pdf-lib` for another client-side PDF library if desired.

## Troubleshooting

* If the merge operation fails, check the browser console for errors.
* Ensure all selected files are valid PDF documents.
* On iOS/Safari, drag-and-drop may behave inconsistently; use the file selector click instead.

## License

This project is released under the MIT License. See [LICENSE](LICENSE) for details.

---

*Happy Merging!*
