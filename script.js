const input = document.getElementById("pdfs");
const dropZone = document.getElementById("dropZone");
const fileList = document.getElementById("fileList");
const status = document.getElementById("status");
const mergeBtn = document.getElementById("mergeBtn");
let pdfFiles = [];

dropZone.addEventListener("click", () => input.click());
dropZone.addEventListener("dragover", e => {
  e.preventDefault();
  dropZone.style.backgroundColor = "#d0e2ff";
});
dropZone.addEventListener("dragleave", () => {
  dropZone.style.backgroundColor = "#e9ecef";
});
dropZone.addEventListener("drop", e => {
  e.preventDefault();
  dropZone.style.backgroundColor = "#e9ecef";
  handleFiles(e.dataTransfer.files);
});
input.addEventListener("change", () => handleFiles(input.files));

function handleFiles(files) {
  for (let file of files) {
    if (file.type === "application/pdf") {
      pdfFiles.push(file);
    }
  }
  updateFileList();
  input.value = null; // allow re-selection of same file
}

function updateFileList() {
  pdfFiles.sort((a, b) => a.name.localeCompare(b.name));
  fileList.innerHTML = '';
  pdfFiles.forEach((file, idx) => {
    const li = document.createElement('li');
    const nameSpan = document.createElement('span');
    nameSpan.textContent = file.name;
    const btn = document.createElement('button');
    btn.innerHTML = '&times;';
    btn.className = 'remove-btn';
    btn.addEventListener('click', () => {
      pdfFiles.splice(idx, 1);
      updateFileList();
    });
    li.append(nameSpan, btn);
    fileList.appendChild(li);
  });
}

mergeBtn.addEventListener("click", mergePDFs);

async function mergePDFs() {
  if (pdfFiles.length < 2) {
    alert("Please upload at least two PDF files.");
    return;
  }
  status.textContent = "Merging PDFs, please wait...";
  const mergedPdf = await PDFLib.PDFDocument.create();
  for (let file of pdfFiles) {
    const bytes = await file.arrayBuffer();
    const pdf = await PDFLib.PDFDocument.load(bytes);
    const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    pages.forEach(page => mergedPdf.addPage(page));
  }
  const mergedPdfBytes = await mergedPdf.save();
  const blob = new Blob([mergedPdfBytes], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "merged.pdf";
  link.click();
  status.textContent = "✅ Merged PDF downloaded successfully!";
}
